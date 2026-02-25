"use server";

import { auth } from "@clerk/nextjs/server";
import { runCreationFlow } from "@/services/ia/orchestrator";
import { getSettings } from "./settings";
import { revalidatePath } from "next/cache";

export async function generateContent(formData: FormData) {
    const { userId } = await auth();
    if (!userId) throw new Error("Não autorizado");

    const rawBriefing = formData.get("briefing") as string;
    const atmosphere = formData.get("atmosphere") as string;
    const sceneCount = parseInt(formData.get("sceneCount") as string) || 3;

    const briefing = atmosphere ? `Atmosfera: ${atmosphere}. Briefing: ${rawBriefing}` : rawBriefing;

    const settings = await getSettings();

    if (!settings || !settings.deepseekKey || !settings.leonardoKey) {
        return {
            success: false,
            error: "Por favor, configure suas chaves de API nas configurações antes de gerar."
        };
    }

    try {
        const result = await runCreationFlow({
            briefing,
            sceneCount,
            apiKeys: {
                deepseek: settings.deepseekKey,
                leonardo: settings.leonardoKey,
            },
            anime: {
                enabled: settings.isAnimeMode,
                style: (settings.animeStyle as any) || "shonen",
            }
        });

        revalidatePath("/");
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
