module.exports = [
"[project]/src/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
/**
 * Prisma Client — DirectorFlow
 *
 * Instancia o Prisma Client com o driver adapter do Turso (LibSQL).
 * Usa singleton pattern para evitar múltiplas conexões em desenvolvimento.
 *
 * Em produção (Vercel Edge Runtime), cria uma nova instância por request.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-libsql/dist/index-node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$libsql$2f$client$29$__ = __turbopack_context__.i("[externals]/@libsql/client [external] (@libsql/client, esm_import, [project]/node_modules/@libsql/client)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$libsql$2f$client$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$libsql$2f$client$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function createPrismaClient() {
    const libsql = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$libsql$2f$client$29$__["createClient"])({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN ?? ''
    });
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaLibSql"](libsql);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        adapter
    });
}
const db = globalThis.__prisma ?? createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.__prisma = db;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"009d9f9d964cca84a31d19870940228c0cab38afac":"getSettings","408e1d60b9b845996b211dc4b687224c7a518635ba":"saveSettings"},"",""] */ __turbopack_context__.s([
    "getSettings",
    ()=>getSettings,
    "saveSettings",
    ()=>saveSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function saveSettings(formData) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) {
        throw new Error("Usuário não autenticado");
    }
    const deepseekKey = formData.get("deepseekKey");
    const leonardoKey = formData.get("leonardoKey");
    const elevenlabsKey = formData.get("elevenlabsKey");
    const lumaKey = formData.get("lumaKey");
    const animeStyle = formData.get("animeStyle");
    const isAnimeMode = formData.get("isAnimeMode") === "on";
    try {
        // Primeiro garante que o usuário existe no nosso DB
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.upsert({
            where: {
                id: userId
            },
            update: {},
            create: {
                id: userId,
                email: "placeholder@clerk.user" // O Clerk gerencia o email, usamos placeholder ou pegamos via API se necessário
            }
        });
        // Salva ou atualiza as configurações
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].setting.upsert({
            where: {
                userId
            },
            update: {
                deepseekKey,
                leonardoKey,
                elevenlabsKey,
                lumaKey,
                animeStyle,
                isAnimeMode
            },
            create: {
                userId,
                deepseekKey,
                leonardoKey,
                elevenlabsKey,
                lumaKey,
                animeStyle,
                isAnimeMode
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        console.error("Erro ao salvar configurações:", error);
        return {
            success: false,
            error: "Falha ao salvar no banco de dados."
        };
    }
}
async function getSettings() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) return null;
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].setting.findUnique({
        where: {
            userId
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveSettings,
    getSettings
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveSettings, "408e1d60b9b845996b211dc4b687224c7a518635ba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSettings, "009d9f9d964cca84a31d19870940228c0cab38afac", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/services/ia/deepseek.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Serviço DeepSeek — Geração de Roteiros para DirectorFlow
 *
 * Usa a API OpenAI-compatible do DeepSeek para gerar roteiros estruturados
 * em JSON. Quando o Modo Anime está ativo, os prompts são ajustados para
 * priorizar estética visual 2D (Ghibli, Shonen, Seinen).
 */ // --------------------------------------------------------------------------
// Tipos
// --------------------------------------------------------------------------
__turbopack_context__.s([
    "generateScript",
    ()=>generateScript
]);
// --------------------------------------------------------------------------
// Constantes
// --------------------------------------------------------------------------
const DEEPSEEK_BASE_URL = 'https://api.deepseek.com';
const DEFAULT_MODEL = 'deepseek-chat' // DeepSeek V3
;
// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------
/**
 * Monta o system prompt de acordo com o modo ativo.
 * No Modo Anime, instrui a IA a usar estética visual específica.
 */ function buildSystemPrompt(isAnimeMode, animeStyle) {
    const baseInstructions = `
Você é um diretor cinematográfico e roteirista especialista.
Responda SEMPRE em formato JSON válido, seguindo exatamente o schema fornecido.
Não inclua texto fora do JSON. Não use Markdown no retorno.
  `.trim();
    if (!isAnimeMode) {
        return `${baseInstructions}\nCrie roteiros cinematográficos realistas e cinematográficos.`;
    }
    const styleGuides = {
        shonen: `Estética SHONEN: ação intensa, personagens expressivos, movimentos dinâmicos, paleta vibrante, efeitos de velocidade (speed lines), expressões exageradas de emoção.`,
        seinen: `Estética SEINEN: narrativa madura, tons sombrios, detalhes realistas, composição cinematográfica, paleta dessaturada com acentos contrastantes.`,
        ghibli: `Estética GHIBLI (Studio Ghibli): cenários naturais exuberantes, luz suave e aquarelada, personagens charmosos e expressivos, fundo detalhado com planos abertos, atmosfera encantadora e nostálgica.`
    };
    const style = animeStyle ?? 'shonen';
    return `
${baseInstructions}
${styleGuides[style]}

Regras para prompts visuais no Modo Anime:
- Escreva os "visualPrompt" em inglês, focados em estética 2D cel-shading.
- Use termos como: "anime style", "2D animation", "key frame illustration", "${style} aesthetic".
- Descreva composição de câmera (close-up, wide shot, low angle) e iluminação.
- Inclua referências de paleta de cores.
  `.trim();
}
/**
 * Monta o schema JSON esperado para instruir a IA.
 */ function buildUserPrompt(briefing, sceneCount) {
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
  `.trim();
}
// --------------------------------------------------------------------------
// Validação do JSON retornado pela IA
// --------------------------------------------------------------------------
function validateScene(scene, index) {
    if (typeof scene !== 'object' || scene === null) {
        throw new Error(`Cena ${index + 1}: formato inválido (esperado objeto).`);
    }
    const s = scene;
    const validTones = [
        'action',
        'dramatic',
        'peaceful',
        'comedic',
        'emotional'
    ];
    const tone = s.tone;
    if (!validTones.includes(tone)) {
        throw new Error(`Cena ${index + 1}: "tone" inválido — recebido "${tone}".`);
    }
    if (typeof s.order !== 'number') throw new Error(`Cena ${index + 1}: "order" deve ser número.`);
    if (typeof s.description !== 'string') throw new Error(`Cena ${index + 1}: "description" inválida.`);
    if (typeof s.visualPrompt !== 'string') throw new Error(`Cena ${index + 1}: "visualPrompt" inválido.`);
    if (typeof s.durationSeconds !== 'number') throw new Error(`Cena ${index + 1}: "durationSeconds" deve ser número.`);
    return {
        order: s.order,
        description: s.description,
        visualPrompt: s.visualPrompt,
        durationSeconds: s.durationSeconds,
        tone: tone
    };
}
function validateScript(raw) {
    if (typeof raw !== 'object' || raw === null) {
        throw new Error('Resposta da IA não é um objeto JSON válido.');
    }
    const r = raw;
    if (typeof r.title !== 'string') throw new Error('Campo "title" ausente ou inválido.');
    if (typeof r.synopsis !== 'string') throw new Error('Campo "synopsis" ausente ou inválido.');
    if (typeof r.genre !== 'string') throw new Error('Campo "genre" ausente ou inválido.');
    if (!Array.isArray(r.scenes)) throw new Error('Campo "scenes" deve ser um array.');
    if (r.scenes.length === 0) throw new Error('A IA retornou 0 cenas.');
    const validStyles = [
        'shonen',
        'seinen',
        'ghibli'
    ];
    const animeStyle = r.animeStyle && validStyles.includes(r.animeStyle) ? r.animeStyle : undefined;
    return {
        title: r.title,
        synopsis: r.synopsis,
        genre: r.genre,
        animeStyle,
        scenes: r.scenes.map((scene, i)=>validateScene(scene, i))
    };
}
async function generateScript(options) {
    const { apiKey, briefing, sceneCount = 5, isAnimeMode = false, animeStyle = 'shonen' } = options;
    const systemPrompt = buildSystemPrompt(isAnimeMode, animeStyle);
    const userPrompt = buildUserPrompt(briefing, sceneCount);
    try {
        const response = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: DEFAULT_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: userPrompt
                    }
                ],
                response_format: {
                    type: 'json_object'
                },
                temperature: 0.8,
                max_tokens: 4096
            })
        });
        if (!response.ok) {
            const errorBody = await response.text();
            console.error('DeepSeek API Error:', {
                status: response.status,
                body: errorBody
            });
            throw new Error(`Erro na API DeepSeek (${response.status}): ${errorBody || response.statusText}`);
        }
        const data = await response.json();
        const content = data?.choices?.[0]?.message?.content;
        if (!content) {
            console.error('DeepSeek Response Empty:', data);
            throw new Error('O DeepSeek retornou uma resposta vazia.');
        }
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch (e) {
            console.error('DeepSeek JSON Parse Error:', {
                content,
                error: e
            });
            throw new Error(`O DeepSeek retornou um JSON inválido e não pôde ser processado.`);
        }
        return validateScript(parsed);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in generateScript:', error.message);
            throw error;
        }
        throw new Error('Ocorreu um erro inesperado ao gerar o roteiro com o DeepSeek.');
    }
}
}),
"[project]/src/services/ia/leonardo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Serviço Leonardo.ai — Geração de Frames de Anime/Vídeo
 *
 * Integra com a API REST do Leonardo.ai para geração de imagens.
 * Suporta modelos especializados em anime/ilustração 2D.
 */ // --------------------------------------------------------------------------
// Tipos
// --------------------------------------------------------------------------
/** IDs de modelos do Leonardo.ai com melhor resultado para anime/video */ __turbopack_context__.s([
    "LEONARDO_MODELS",
    ()=>LEONARDO_MODELS,
    "generateFrame",
    ()=>generateFrame,
    "generateFrameBatch",
    ()=>generateFrameBatch
]);
const LEONARDO_MODELS = {
    /** Melhor qualidade geral - anime e realismo */ PHOENIX: 'de7d3faf-762f-48e0-b3b7-9d0ac3a3fcf4',
    /** Especializado em ilustração e anime */ ANIME_XL: 'e71a1c2f-4f80-4800-934f-2c68979d1cc6',
    /** Estilo Ghibli / aquarela */ KINO_XL: '1aa0f478-51be-4efd-94e8-76bfc8f533af'
};
// --------------------------------------------------------------------------
// Constantes
// --------------------------------------------------------------------------
const LEONARDO_BASE_URL = 'https://cloud.leonardo.ai/api/rest/v1';
/** Negative prompt padrão para anime — remove artefatos comuns */ const DEFAULT_NEGATIVE_PROMPT = 'blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, signature, text, border';
/** Polling timeout máximo em ms */ const MAX_POLL_DURATION_MS = 90_000;
/** Intervalo entre polls em ms */ const POLL_INTERVAL_MS = 3_000;
// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------
/**
 * Aguarda a geração terminar via polling da API (Leonardo é assíncrono).
 */ async function pollGeneration(generationId, apiKey) {
    const start = Date.now();
    while(Date.now() - start < MAX_POLL_DURATION_MS){
        await new Promise((r)=>setTimeout(r, POLL_INTERVAL_MS));
        const res = await fetch(`${LEONARDO_BASE_URL}/generations/${generationId}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error(`Leonardo poll error ${res.status}: ${await res.text()}`);
        }
        const data = await res.json();
        const generation = data?.generations_by_pk;
        if (!generation) {
            throw new Error('Resposta inválida do Leonardo.ai durante polling.');
        }
        const status = generation.status;
        if (status === 'COMPLETE') {
            const images = generation.generated_images ?? [];
            if (images.length === 0) {
                throw new Error('Geração concluída mas sem imagens retornadas.');
            }
            return {
                generationId,
                imageUrls: images.map((img)=>img.url),
                seed: generation.seed ?? 0
            };
        }
        if (status === 'FAILED') {
            throw new Error(`Geração falhou no Leonardo.ai. ID: ${generationId}`);
        }
    // status === 'PENDING' ou 'PROCESSING' — continua polling
    }
    throw new Error(`Timeout: a geração ${generationId} não foi concluída em ${MAX_POLL_DURATION_MS / 1000}s.`);
}
async function generateFrame(options) {
    const { apiKey, prompt, negativePrompt = DEFAULT_NEGATIVE_PROMPT, modelId = LEONARDO_MODELS.PHOENIX, width = 1024, height = 576, numImages = 1, seed, guidanceScale = 7, inferenceSteps = 30 } = options;
    try {
        // 1. Dispara a geração
        const initiateRes = await fetch(`${LEONARDO_BASE_URL}/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt,
                negative_prompt: negativePrompt,
                modelId,
                width,
                height,
                num_images: numImages,
                ...seed !== undefined && {
                    seed
                },
                guidance_scale: guidanceScale,
                num_inference_steps: inferenceSteps,
                public: false
            })
        });
        if (!initiateRes.ok) {
            const errorBody = await initiateRes.text();
            console.error('Leonardo API Initiation Error:', {
                status: initiateRes.status,
                body: errorBody
            });
            throw new Error(`Erro ao iniciar geração no Leonardo.ai (${initiateRes.status}): ${errorBody || initiateRes.statusText}`);
        }
        const initiateData = await initiateRes.json();
        const generationId = initiateData?.sdGenerationJob?.generationId;
        if (!generationId) {
            console.error('Leonardo Invalid Response (No GenerationID):', initiateData);
            throw new Error('O Leonardo.ai não retornou um ID de geração válido.');
        }
        // 2. Aguarda a conclusão via polling
        return await pollGeneration(generationId, apiKey);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in generateFrame:', error.message);
            throw error;
        }
        throw new Error('Ocorreu um erro inesperado ao gerar a imagem com o Leonardo.ai.');
    }
}
async function generateFrameBatch(prompts, options) {
    const results = [];
    for (const prompt of prompts){
        const frame = await generateFrame({
            ...options,
            prompt
        });
        results.push(frame);
    }
    return results;
}
}),
"[project]/src/services/ia/orchestrator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runCreationFlow",
    ()=>runCreationFlow
]);
/**
 * Orquestrador de IA — DirectorFlow
 *
 * Coordena o fluxo completo de criação:
 *   1. Recebe o briefing do usuário
 *   2. DeepSeek gera o roteiro em JSON validado
 *   3. Leonardo.ai gera o frame base de cada cena
 *
 * Todas as chaves de API vêm do perfil do usuário (modelo BYOK).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$deepseek$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/ia/deepseek.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/ia/leonardo.ts [app-rsc] (ecmascript)");
;
;
// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------
/**
 * Seleciona o modelo Leonardo.ai mais adequado para o estilo de anime.
 */ function selectLeonardoModel(animeStyle) {
    if (!animeStyle) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEONARDO_MODELS"].PHOENIX;
    const modelMap = {
        shonen: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEONARDO_MODELS"].ANIME_XL,
        seinen: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEONARDO_MODELS"].ANIME_XL,
        ghibli: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEONARDO_MODELS"].KINO_XL
    };
    return modelMap[animeStyle];
}
/**
 * Adiciona sufixo de estilo ao prompt visual quando Modo Anime está ativo.
 */ function enrichPromptForAnime(prompt, style) {
    if (!style) return prompt;
    const suffixes = {
        shonen: ', anime key frame illustration, shonen style, vibrant colors, dynamic pose, cel-shading, 2D animation',
        seinen: ', anime key frame illustration, seinen style, detailed linework, muted palette, cinematic composition, 2D animation',
        ghibli: ', Studio Ghibli style, watercolor illustration, lush environment, soft lighting, warm palette, hand-drawn 2D animation'
    };
    return `${prompt}${suffixes[style]}`;
}
async function runCreationFlow(input) {
    const { briefing, sceneCount = 5, apiKeys, anime, imageOptions = {} } = input;
    try {
        const isAnimeMode = anime?.enabled ?? false;
        const animeStyle = isAnimeMode ? anime?.style ?? 'shonen' : undefined;
        console.info('Starting creation flow...', {
            sceneCount,
            isAnimeMode,
            animeStyle
        });
        // ------------------------------------------------------------------
        // PASSO 1: DeepSeek gera o roteiro validado em JSON
        // ------------------------------------------------------------------
        let script;
        try {
            script = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$deepseek$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateScript"])({
                apiKey: apiKeys.deepseek,
                briefing,
                sceneCount,
                isAnimeMode,
                animeStyle
            });
        } catch (err) {
            console.error('Orchestrator: DeepSeek step failed', err);
            throw new Error(`Falha ao gerar roteiro: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
        }
        // Inicializa resultados como pending
        const sceneResults = script.scenes.map((scene)=>({
                order: scene.order,
                description: scene.description,
                visualPrompt: scene.visualPrompt,
                tone: scene.tone,
                durationSeconds: scene.durationSeconds,
                status: 'script_done'
            }));
        // ------------------------------------------------------------------
        // PASSO 2: Leonardo.ai gera frames em paralelo por cena
        // ------------------------------------------------------------------
        const leonardoModel = selectLeonardoModel(animeStyle);
        console.info(`Generating ${script.scenes.length} frames using Leonardo.ai...`);
        const framePromises = script.scenes.map(async (scene, index)=>{
            const enrichedPrompt = enrichPromptForAnime(scene.visualPrompt, animeStyle);
            try {
                const frame = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$leonardo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFrame"])({
                    apiKey: apiKeys.leonardo,
                    prompt: enrichedPrompt,
                    modelId: leonardoModel,
                    width: imageOptions.width ?? 1024,
                    height: imageOptions.height ?? 576,
                    numImages: 1,
                    seed: imageOptions.seed
                });
                return {
                    index,
                    frame,
                    error: null
                };
            } catch (err) {
                console.warn(`Orchestrator: Failed to generate frame for scene ${index + 1}`, err);
                return {
                    index,
                    frame: null,
                    error: err instanceof Error ? err.message : 'Erro na geração da imagem'
                };
            }
        });
        const frameResults = await Promise.all(framePromises);
        const failedScenes = [];
        for (const res of frameResults){
            const { index, frame, error } = res;
            if (error || !frame) {
                sceneResults[index].status = 'error';
                sceneResults[index].error = error ?? 'Erro desconhecido na geração de frame.';
                failedScenes.push(sceneResults[index].order);
            } else {
                sceneResults[index].status = 'frame_done';
                sceneResults[index].frame = frame;
            }
        }
        const totalDurationSeconds = sceneResults.reduce((acc, s)=>acc + s.durationSeconds, 0);
        console.info('Creation flow completed.', {
            success: failedScenes.length === 0,
            scenesGenerated: sceneResults.length,
            failedCount: failedScenes.length
        });
        return {
            success: failedScenes.length === 0,
            script,
            scenes: sceneResults,
            failedScenes,
            totalDurationSeconds
        };
    } catch (error) {
        console.error('Orchestrator: Critical failure in creation flow', error);
        throw error;
    }
}
}),
"[project]/src/app/actions/generate.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4020d5fb8bab3f1f99b472269dbea602cf2146c19c":"generateContent"},"",""] */ __turbopack_context__.s([
    "generateContent",
    ()=>generateContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$orchestrator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/ia/orchestrator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function generateContent(formData) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Não autorizado");
    const briefing = formData.get("briefing");
    const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSettings"])();
    if (!settings || !settings.deepseekKey || !settings.leonardoKey) {
        return {
            success: false,
            error: "Por favor, configure suas chaves de API nas configurações antes de gerar."
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ia$2f$orchestrator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runCreationFlow"])({
            briefing,
            sceneCount: 3,
            apiKeys: {
                deepseek: settings.deepseekKey,
                leonardo: settings.leonardoKey
            },
            anime: {
                enabled: settings.isAnimeMode,
                style: settings.animeStyle || "shonen"
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: result.success,
            data: result,
            error: result.success ? null : "Alguns frames falharam na geração."
        };
    } catch (error) {
        console.error("Erro na geração:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Erro interno no orquestrador."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateContent, "4020d5fb8bab3f1f99b472269dbea602cf2146c19c", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_7a140644._.js.map