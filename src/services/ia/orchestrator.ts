/**
 * Orquestrador de IA — DirectorFlow
 *
 * Coordena o fluxo completo de criação:
 *   1. Recebe o briefing do usuário
 *   2. DeepSeek gera o roteiro em JSON validado
 *   3. Leonardo.ai gera o frame base de cada cena
 *
 * Todas as chaves de API vêm do perfil do usuário (modelo BYOK).
 */

import { generateScript, type GeneratedScript, type AnimeStyle } from './deepseek'
import { generateFrame, type GeneratedFrame, LEONARDO_MODELS, type LeonardoModelId } from './leonardo'

// --------------------------------------------------------------------------
// Tipos de entrada/saída do Orquestrador
// --------------------------------------------------------------------------

export interface OrchestratorInput {
    /** Briefing livre do projeto (ideia, tema, personagens, etc.) */
    briefing: string

    /** Número de cenas a gerar (default: 5) */
    sceneCount?: number

    /** Chaves de API do usuário (BYOK) */
    apiKeys: {
        deepseek: string
        leonardo: string
    }

    /** Configurações de Modo Anime */
    anime?: {
        enabled: boolean
        style?: AnimeStyle
    }

    /** Opções avançadas de geração de imagem */
    imageOptions?: {
        /** Seed global para consistência visual entre frames */
        seed?: number
        /** Resolução (default: 1024x576 = 16:9) */
        width?: number
        height?: number
    }
}

/** Status de uma cena durante a geração */
export type SceneStatus = 'pending' | 'script_done' | 'frame_done' | 'error'

export interface SceneResult {
    /** Número da cena */
    order: number
    /** Descrição narrativa (do roteiro) */
    description: string
    /** Prompt visual enviado ao Leonardo */
    visualPrompt: string
    /** Tom emocional */
    tone: string
    /** Duração estimada em segundos */
    durationSeconds: number
    /** Status de geração desta cena */
    status: SceneStatus
    /** Frame gerado (disponível quando status = 'frame_done') */
    frame?: GeneratedFrame
    /** Mensagem de erro, se houver */
    error?: string
}

export interface OrchestratorResult {
    /** Se o fluxo concluiu sem erros críticos */
    success: boolean
    /** Metadados do roteiro gerado */
    script: GeneratedScript
    /** Resultados por cena (roteiro + frame) */
    scenes: SceneResult[]
    /** Cenas que falharam na geração de imagem */
    failedScenes: number[]
    /** Duração total estimada do projeto em segundos */
    totalDurationSeconds: number
}

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Seleciona o modelo Leonardo.ai mais adequado para o estilo de anime.
 */
function selectLeonardoModel(animeStyle?: AnimeStyle): LeonardoModelId {
    if (!animeStyle) return LEONARDO_MODELS.PHOENIX

    const modelMap: Record<AnimeStyle, LeonardoModelId> = {
        shonen: LEONARDO_MODELS.ANIME_XL,
        seinen: LEONARDO_MODELS.ANIME_XL,
        ghibli: LEONARDO_MODELS.KINO_XL,
    }

    return modelMap[animeStyle]
}

/**
 * Adiciona sufixo de estilo ao prompt visual quando Modo Anime está ativo.
 */
function enrichPromptForAnime(prompt: string, style?: AnimeStyle): string {
    if (!style) return prompt

    const suffixes: Record<AnimeStyle, string> = {
        shonen:
            ', anime key frame illustration, shonen style, vibrant colors, dynamic pose, cel-shading, 2D animation',
        seinen:
            ', anime key frame illustration, seinen style, detailed linework, muted palette, cinematic composition, 2D animation',
        ghibli:
            ', Studio Ghibli style, watercolor illustration, lush environment, soft lighting, warm palette, hand-drawn 2D animation',
    }

    return `${prompt}${suffixes[style]}`
}

// --------------------------------------------------------------------------
// Função principal
// --------------------------------------------------------------------------

/**
 * Executa o fluxo completo de criação:
 * DeepSeek → roteiro em JSON → Leonardo.ai → frames das cenas
 *
 * As gerações de imagem rodam em paralelo (Promise.allSettled)
 * para maximizar performance sem bloquear o fluxo por falhas pontuais.
 *
 * @param input - Briefing, chaves de API e configurações
 * @returns Resultado completo com roteiro + frames + status por cena
 */
export async function runCreationFlow(
    input: OrchestratorInput,
): Promise<OrchestratorResult> {
    const {
        briefing,
        sceneCount = 5,
        apiKeys,
        anime,
        imageOptions = {},
    } = input

    try {
        const isAnimeMode = anime?.enabled ?? false
        const animeStyle = isAnimeMode ? (anime?.style ?? 'shonen') : undefined

        console.info('Starting creation flow...', { sceneCount, isAnimeMode, animeStyle })

        // ------------------------------------------------------------------
        // PASSO 1: DeepSeek gera o roteiro validado em JSON
        // ------------------------------------------------------------------
        let script: GeneratedScript
        try {
            script = await generateScript({
                apiKey: apiKeys.deepseek,
                briefing,
                sceneCount,
                isAnimeMode,
                animeStyle,
            })
        } catch (err) {
            console.error('Orchestrator: DeepSeek step failed', err)
            throw new Error(`Falha ao gerar roteiro: ${err instanceof Error ? err.message : 'Erro desconhecido'}`)
        }

        // Inicializa resultados como pending
        const sceneResults: SceneResult[] = script.scenes.map((scene) => ({
            order: scene.order,
            description: scene.description,
            visualPrompt: scene.visualPrompt,
            tone: scene.tone,
            durationSeconds: scene.durationSeconds,
            status: 'script_done',
        }))

        // ------------------------------------------------------------------
        // PASSO 2: Leonardo.ai gera frames em paralelo por cena
        // ------------------------------------------------------------------
        const leonardoModel = selectLeonardoModel(animeStyle)
        console.info(`Generating ${script.scenes.length} frames using Leonardo.ai...`)

        const framePromises = script.scenes.map(async (scene, index) => {
            const enrichedPrompt = enrichPromptForAnime(scene.visualPrompt, animeStyle)

            try {
                const frame = await generateFrame({
                    apiKey: apiKeys.leonardo,
                    prompt: enrichedPrompt,
                    modelId: leonardoModel,
                    width: imageOptions.width ?? 1024,
                    height: imageOptions.height ?? 576,
                    numImages: 1,
                    seed: imageOptions.seed,
                })
                return { index, frame, error: null }
            } catch (err) {
                console.warn(`Orchestrator: Failed to generate frame for scene ${index + 1}`, err)
                return { index, frame: null, error: err instanceof Error ? err.message : 'Erro na geração da imagem' }
            }
        })

        const frameResults = await Promise.all(framePromises)
        const failedScenes: number[] = []

        for (const res of frameResults) {
            const { index, frame, error } = res

            if (error || !frame) {
                sceneResults[index].status = 'error'
                sceneResults[index].error = error ?? 'Erro desconhecido na geração de frame.'
                failedScenes.push(sceneResults[index].order)
            } else {
                sceneResults[index].status = 'frame_done'
                sceneResults[index].frame = frame
            }
        }

        const totalDurationSeconds = sceneResults.reduce(
            (acc, s) => acc + s.durationSeconds,
            0,
        )

        console.info('Creation flow completed.', {
            success: failedScenes.length === 0,
            scenesGenerated: sceneResults.length,
            failedCount: failedScenes.length,
        })

        return {
            success: failedScenes.length === 0,
            script,
            scenes: sceneResults,
            failedScenes,
            totalDurationSeconds,
        }
    } catch (error) {
        console.error('Orchestrator: Critical failure in creation flow', error)
        throw error
    }
}
