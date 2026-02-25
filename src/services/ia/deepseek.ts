/**
 * Serviço DeepSeek — Geração de Roteiros para DirectorFlow
 *
 * Usa a API OpenAI-compatible do DeepSeek para gerar roteiros estruturados
 * em JSON. Quando o Modo Anime está ativo, os prompts são ajustados para
 * priorizar estética visual 2D (Ghibli, Shonen, Seinen).
 */

// --------------------------------------------------------------------------
// Tipos
// --------------------------------------------------------------------------

export type AnimeStyle = 'shonen' | 'seinen' | 'ghibli'

export interface ScenePrompt {
    /** Número da cena (1-indexed) */
    order: number
    /** Descrição narrativa para diálogos/narração */
    description: string
    /** Prompt visual para o gerador de imagens (inglês) */
    visualPrompt: string
    /** Duração estimada em segundos */
    durationSeconds: number
    /** Tom emocional da cena */
    tone: 'action' | 'dramatic' | 'peaceful' | 'comedic' | 'emotional'
}

export interface GeneratedScript {
    /** Título do projeto */
    title: string
    /** Sinopse curta */
    synopsis: string
    /** Estilo visual (presente apenas em Modo Anime) */
    animeStyle?: AnimeStyle
    /** Gênero narrativo */
    genre: string
    /** Lista de cenas geradas */
    scenes: ScenePrompt[]
}

export interface DeepSeekOptions {
    /** Chave de API do usuário (BYOK) */
    apiKey: string
    /** Briefing do projeto fornecido pelo usuário */
    briefing: string
    /** Número de cenas desejadas */
    sceneCount?: number
    /** Se true, ativa prompts visuais focados em anime 2D */
    isAnimeMode?: boolean
    /** Estilo de anime quando isAnimeMode = true */
    animeStyle?: AnimeStyle
}

// --------------------------------------------------------------------------
// Constantes
// --------------------------------------------------------------------------

const DEEPSEEK_BASE_URL = 'https://api.deepseek.com'
const DEFAULT_MODEL = 'deepseek-chat' // DeepSeek V3

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Monta o system prompt de acordo com o modo ativo.
 * No Modo Anime, instrui a IA a usar estética visual específica.
 */
function buildSystemPrompt(isAnimeMode: boolean, animeStyle?: AnimeStyle): string {
    const baseInstructions = `
Você é um diretor cinematográfico e roteirista especialista.
Responda SEMPRE em formato JSON válido, seguindo exatamente o schema fornecido.
Não inclua texto fora do JSON. Não use Markdown no retorno.
  `.trim()

    if (!isAnimeMode) {
        return `${baseInstructions}\nCrie roteiros cinematográficos realistas e cinematográficos.`
    }

    const styleGuides: Record<AnimeStyle, string> = {
        shonen: `Estética SHONEN: ação intensa, personagens expressivos, movimentos dinâmicos, paleta vibrante, efeitos de velocidade (speed lines), expressões exageradas de emoção.`,
        seinen: `Estética SEINEN: narrativa madura, tons sombrios, detalhes realistas, composição cinematográfica, paleta dessaturada com acentos contrastantes.`,
        ghibli: `Estética GHIBLI (Studio Ghibli): cenários naturais exuberantes, luz suave e aquarelada, personagens charmosos e expressivos, fundo detalhado com planos abertos, atmosfera encantadora e nostálgica.`,
    }

    const style = animeStyle ?? 'shonen'

    return `
${baseInstructions}
${styleGuides[style]}

Regras para prompts visuais no Modo Anime:
- Escreva os "visualPrompt" em inglês, focados em estética 2D cel-shading.
- Use termos como: "anime style", "2D animation", "key frame illustration", "${style} aesthetic".
- Descreva composição de câmera (close-up, wide shot, low angle) e iluminação.
- Inclua referências de paleta de cores.
  `.trim()
}

/**
 * Monta o schema JSON esperado para instruir a IA.
 */
function buildUserPrompt(briefing: string, sceneCount: number): string {
    return `
Crie um roteiro completo para o seguinte projeto:

BRIEFING:
${briefing}

Retorne um JSON com exatamente este schema:
{
  "title": "string",
  "synopsis": "string (max 2 frases)",
  "genre": "string",
  "animeStyle": "shonen | seinen | ghibli | null",
  "scenes": [
    {
      "order": number,
      "description": "string (narrativa, em português)",
      "visualPrompt": "string (prompt para gerador de imagem, em inglês)",
      "durationSeconds": number,
      "tone": "action | dramatic | peaceful | comedic | emotional"
    }
  ]
}

Número de cenas: ${sceneCount}
  `.trim()
}

// --------------------------------------------------------------------------
// Validação do JSON retornado pela IA
// --------------------------------------------------------------------------

function validateScene(scene: unknown, index: number): ScenePrompt {
    if (typeof scene !== 'object' || scene === null) {
        throw new Error(`Cena ${index + 1}: formato inválido (esperado objeto).`)
    }

    const s = scene as Record<string, unknown>

    const validTones = ['action', 'dramatic', 'peaceful', 'comedic', 'emotional'] as const
    const tone = s.tone as string

    if (!validTones.includes(tone as (typeof validTones)[number])) {
        throw new Error(`Cena ${index + 1}: "tone" inválido — recebido "${tone}".`)
    }

    if (typeof s.order !== 'number') throw new Error(`Cena ${index + 1}: "order" deve ser número.`)
    if (typeof s.description !== 'string') throw new Error(`Cena ${index + 1}: "description" inválida.`)
    if (typeof s.visualPrompt !== 'string') throw new Error(`Cena ${index + 1}: "visualPrompt" inválido.`)
    if (typeof s.durationSeconds !== 'number') throw new Error(`Cena ${index + 1}: "durationSeconds" deve ser número.`)

    return {
        order: s.order,
        description: s.description,
        visualPrompt: s.visualPrompt,
        durationSeconds: s.durationSeconds,
        tone: tone as ScenePrompt['tone'],
    }
}

function validateScript(raw: unknown): GeneratedScript {
    if (typeof raw !== 'object' || raw === null) {
        throw new Error('Resposta da IA não é um objeto JSON válido.')
    }

    const r = raw as Record<string, unknown>

    if (typeof r.title !== 'string') throw new Error('Campo "title" ausente ou inválido.')
    if (typeof r.synopsis !== 'string') throw new Error('Campo "synopsis" ausente ou inválido.')
    if (typeof r.genre !== 'string') throw new Error('Campo "genre" ausente ou inválido.')
    if (!Array.isArray(r.scenes)) throw new Error('Campo "scenes" deve ser um array.')
    if (r.scenes.length === 0) throw new Error('A IA retornou 0 cenas.')

    const validStyles: AnimeStyle[] = ['shonen', 'seinen', 'ghibli']
    const animeStyle =
        r.animeStyle && validStyles.includes(r.animeStyle as AnimeStyle)
            ? (r.animeStyle as AnimeStyle)
            : undefined

    return {
        title: r.title,
        synopsis: r.synopsis,
        genre: r.genre,
        animeStyle,
        scenes: r.scenes.map((scene, i) => validateScene(scene, i)),
    }
}

// --------------------------------------------------------------------------
// Função principal
// --------------------------------------------------------------------------

/**
 * Gera um roteiro estruturado usando a API do DeepSeek.
 *
 * @param options - Configurações do DeepSeek + briefing do projeto
 * @returns Roteiro validado como `GeneratedScript`
 * @throws Erro se a API falhar ou o JSON retornado for inválido
 */
export async function generateScript(options: DeepSeekOptions): Promise<GeneratedScript> {
    const {
        apiKey,
        briefing,
        sceneCount = 5,
        isAnimeMode = false,
        animeStyle = 'shonen',
    } = options

    const systemPrompt = buildSystemPrompt(isAnimeMode, animeStyle)
    const userPrompt = buildUserPrompt(briefing, sceneCount)

    try {
        const response = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: DEFAULT_MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt },
                ],
                response_format: { type: 'json_object' },
                temperature: 0.8,
                max_tokens: 4096,
            }),
        })

        if (!response.ok) {
            const errorBody = await response.text()
            console.error('DeepSeek API Error:', { status: response.status, body: errorBody })
            throw new Error(
                `Erro na API DeepSeek (${response.status}): ${errorBody || response.statusText}`
            )
        }

        const data = await response.json()
        const content = data?.choices?.[0]?.message?.content

        if (!content) {
            console.error('DeepSeek Response Empty:', data)
            throw new Error('O DeepSeek retornou uma resposta vazia.')
        }

        let parsed: unknown
        try {
            parsed = JSON.parse(content)
        } catch (e) {
            console.error('DeepSeek JSON Parse Error:', { content, error: e })
            throw new Error(`O DeepSeek retornou um JSON inválido e não pôde ser processado.`)
        }

        return validateScript(parsed)
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in generateScript:', error.message)
            throw error
        }
        throw new Error('Ocorreu um erro inesperado ao gerar o roteiro com o DeepSeek.')
    }
}
