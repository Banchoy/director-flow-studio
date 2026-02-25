"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveSettings(prevState: any, formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Usuário não autenticado");
    }

    const deepseekKey = formData.get("deepseekKey") as string;
    const leonardoKey = formData.get("leonardoKey") as string;
    const elevenlabsKey = formData.get("elevenlabsKey") as string;
    const lumaKey = formData.get("lumaKey") as string;
    const animeStyle = formData.get("animeStyle") as string;
    const isAnimeMode = formData.get("isAnimeMode") === "on";

    try {
        // Primeiro garante que o usuário existe no nosso DB
        await db.user.upsert({
            where: { id: userId },
            update: {},
            create: {
                id: userId,
                email: "placeholder@clerk.user" // O Clerk gerencia o email, usamos placeholder ou pegamos via API se necessário
            },
        });

        // Salva ou atualiza as configurações
        await db.setting.upsert({
            where: { userId },
            update: {
                deepseekKey,
                leonardoKey,
                elevenlabsKey,
                lumaKey,
                animeStyle,
                isAnimeMode,
            },
            create: {
                userId,
                deepseekKey,
                leonardoKey,
                elevenlabsKey,
                lumaKey,
                animeStyle,
                isAnimeMode,
            },
        });

        revalidatePath("/settings");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Erro ao salvar configurações:", error);
        return { success: false, error: "Falha ao salvar no banco de dados." };
    }
}

export async function getSettings() {
    const { userId } = await auth();
    if (!userId) return null;

    return await db.setting.findUnique({
        where: { userId },
    });
}
