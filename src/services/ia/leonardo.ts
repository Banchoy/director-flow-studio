/**
 * Serviço Leonardo.ai — Geração de Frames de Anime/Vídeo
 *
 * Integra com a API REST do Leonardo.ai para geração de imagens.
 * Suporta modelos especializados em anime/ilustração 2D.
 */

// --------------------------------------------------------------------------
// Tipos
// --------------------------------------------------------------------------

/** IDs de modelos do Leonardo.ai com melhor resultado para anime/video */
export const LEONARDO_MODELS = {
    /** Melhor qualidade geral - anime e realismo */
    PHOENIX: 'de7d3faf-762f-48e0-b3b7-9d0ac3a3fcf4',
    /** Especializado em ilustração e anime */
    ANIME_XL: 'e71a1c2f-4f80-4800-934f-2c68979d1cc6',
    /** Estilo Ghibli / aquarela */
    KINO_XL: '1aa0f478-51be-4efd-94e8-76bfc8f533af',
} as const

export type LeonardoModelId = (typeof LEONARDO_MODELS)[keyof typeof LEONARDO_MODELS]

export interface LeonardoGenerateOptions {
    /** Chave de API do usuário (BYOK) */
    apiKey: string
    /** Prompt descritivo da imagem (inglês) */
    prompt: string
    /** Prompt negativo para excluir elementos indesejados */
    negativePrompt?: string
    /** ID do modelo a usar */
    modelId?: LeonardoModelId
    /** Largura da imagem (default: 1024) */
    width?: number
    /** Altura da imagem (default: 576) — formato 16:9 */
    height?: number
    /** Número de imagens a gerar (1-4) */
    numImages?: number
    /** Seed para reprodutibilidade (consistência de personagem) */
    seed?: number
    /** Nível de adesão ao prompt (1-20, default: 7) */
    guidanceScale?: number
    /** Número de steps de inferência (default: 30) */
    inferenceSteps?: number
}

export interface GeneratedFrame {
    /** ID da geração no Leonardo.ai */
    generationId: string
    /** URL pública das imagens geradas */
    imageUrls: string[]
    /** Seed usada (para reprodutibilidade) */
    seed: number
}

// --------------------------------------------------------------------------
// Constantes
// --------------------------------------------------------------------------

const LEONARDO_BASE_URL = 'https://cloud.leonardo.ai/api/rest/v1'

/** Negative prompt padrão para anime — remove artefatos comuns */
const DEFAULT_NEGATIVE_PROMPT =
    'blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, signature, text, border'

/** Polling timeout máximo em ms */
const MAX_POLL_DURATION_MS = 90_000

/** Intervalo entre polls em ms */
const POLL_INTERVAL_MS = 3_000

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Aguarda a geração terminar via polling da API (Leonardo é assíncrono).
 */
async function pollGeneration(
    generationId: string,
    apiKey: string,
): Promise<GeneratedFrame> {
    const start = Date.now()

    while (Date.now() - start < MAX_POLL_DURATION_MS) {
        await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS))

        const res = await fetch(`${LEONARDO_BASE_URL}/generations/${generationId}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/json',
            },
        })

        if (!res.ok) {
            throw new Error(`Leonardo poll error ${res.status}: ${await res.text()}`)
        }

        const data = await res.json()
        const generation = data?.generations_by_pk

        if (!generation) {
            throw new Error('Resposta inválida do Leonardo.ai durante polling.')
        }

        const status: string = generation.status

        if (status === 'COMPLETE') {
            const images: Array<{ url: string }> = generation.generated_images ?? []

            if (images.length === 0) {
                throw new Error('Geração concluída mas sem imagens retornadas.')
            }

            return {
                generationId,
                imageUrls: images.map((img) => img.url),
                seed: generation.seed ?? 0,
            }
        }

        if (status === 'FAILED') {
            throw new Error(`Geração falhou no Leonardo.ai. ID: ${generationId}`)
        }

        // status === 'PENDING' ou 'PROCESSING' — continua polling
    }

    throw new Error(
        `Timeout: a geração ${generationId} não foi concluída em ${MAX_POLL_DURATION_MS / 1000}s.`,
    )
}

// --------------------------------------------------------------------------
// Função principal
// --------------------------------------------------------------------------

/**
 * Gera frames de anime/vídeo usando a API do Leonardo.ai.
 *
 * Leonardo é uma API assíncrona: primeiro cria a geração,
 * depois faz polling até o status ser COMPLETE.
 *
 * @param options - Configurações de geração
 * @returns Frame(s) gerado(s) com URLs públicas
 * @throws Erro se a API falhar, timeout ou resposta inválida
 */
export async function generateFrame(
    options: LeonardoGenerateOptions,
): Promise<GeneratedFrame> {
    const {
        apiKey,
        prompt,
        negativePrompt = DEFAULT_NEGATIVE_PROMPT,
        modelId = LEONARDO_MODELS.PHOENIX,
        width = 1024,
        height = 576,
        numImages = 1,
        seed,
        guidanceScale = 7,
        inferenceSteps = 30,
    } = options

    try {
        // 1. Dispara a geração
        const initiateRes = await fetch(`${LEONARDO_BASE_URL}/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt,
                negative_prompt: negativePrompt,
                modelId,
                width,
                height,
                num_images: numImages,
                ...(seed !== undefined && { seed }),
                guidance_scale: guidanceScale,
                num_inference_steps: inferenceSteps,
                public: false,
            }),
        })

        if (!initiateRes.ok) {
            const errorBody = await initiateRes.text()
            console.error('Leonardo API Initiation Error:', { status: initiateRes.status, body: errorBody })
            throw new Error(`Erro ao iniciar geração no Leonardo.ai (${initiateRes.status}): ${errorBody || initiateRes.statusText}`)
        }

        const initiateData = await initiateRes.json()
        const generationId: string | undefined =
            initiateData?.sdGenerationJob?.generationId

        if (!generationId) {
            console.error('Leonardo Invalid Response (No GenerationID):', initiateData)
            throw new Error('O Leonardo.ai não retornou um ID de geração válido.')
        }

        // 2. Aguarda a conclusão via polling
        return await pollGeneration(generationId, apiKey)
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in generateFrame:', error.message)
            throw error
        }
        throw new Error('Ocorreu um erro inesperado ao gerar a imagem com o Leonardo.ai.')
    }
}

/**
 * Gera múltiplos frames em sequência (uma cena = uma chamada).
 * Útil para gerar todos os frames de um roteiro.
 *
 * @param prompts - Lista de prompts visuais
 * @param options - Opções base compartilhadas entre as gerações
 * @returns Array de frames gerados, na mesma ordem dos prompts
 */
export async function generateFrameBatch(
    prompts: string[],
    options: Omit<LeonardoGenerateOptions, 'prompt'>,
): Promise<GeneratedFrame[]> {
    const results: GeneratedFrame[] = []

    for (const prompt of prompts) {
        const frame = await generateFrame({ ...options, prompt })
        results.push(frame)
    }

    return results
}
