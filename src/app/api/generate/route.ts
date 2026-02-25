import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { runCreationFlow } from "@/services/ia/orchestrator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
        }

        const { briefing, sceneCount = 3 } = await req.json();

        if (!briefing) {
            return NextResponse.json({ error: "Briefing é obrigatório" }, { status: 400 });
        }

        // Busca configurações do usuário
        const settings = await db.setting.findUnique({
            where: { userId },
        });

        if (!settings || !settings.deepseekKey || !settings.leonardoKey) {
            return NextResponse.json(
                { error: "Configure suas chaves de API antes de gerar conteúdo." },
                { status: 400 }
            );
        }

        // Executa o Orquestrador
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
            },
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("API Error [Generate]:", error);
        return NextResponse.json(
            { error: "Erro interno no servidor de geração." },
            { status: 500 }
        );
    }
}
