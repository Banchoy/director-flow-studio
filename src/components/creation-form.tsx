"use client";

import { useState } from "react";
import { Sparkles, Play, Video, Terminal, Loader2 } from "lucide-react";
import Link from "next/link";
import { generateContent } from "@/app/actions/generate";
import { ScriptPreview } from "./script-preview";

interface CreationFormProps {
    hasKeys: boolean;
    isAnimeMode: boolean;
}

export function CreationForm({ hasKeys, isAnimeMode }: CreationFormProps) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        if (!hasKeys) return;

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await generateContent(formData);
            if (res.success) {
                // Formata os dados para o ScriptPreview
                const formattedScript = {
                    title: res.data.script.title,
                    synopsis: res.data.script.synopsis,
                    scenes: res.data.scenes.map((s: any) => ({
                        order: s.order,
                        description: s.description,
                        visualPrompt: s.visualPrompt,
                        image: s.frame?.imageUrls?.[0]
                    }))
                };
                setResult(formattedScript);
            } else {
                setError(res.error || "Ocorreu um erro inesperado.");
            }
        } catch (err) {
            setError("Falha na comunicação com o servidor.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-3xl glass p-8 rounded-[32px] md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    {isAnimeMode ? (
                        <div className="bg-rose-500/10 text-rose-400 px-4 py-1 rounded-full text-xs font-bold border border-rose-500/20 flex items-center gap-2">
                            <Sparkles size={14} />
                            MODO ANIME ATIVO
                        </div>
                    ) : (
                        <div className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-xs font-bold border border-blue-500/20 flex items-center gap-2">
                            <Video size={14} />
                            MODO CINEMA
                        </div>
                    )}
                </div>

                <form action={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-semibold tracking-wider text-white/40 uppercase pl-1">
                            <Terminal size={16} />
                            Briefing do Projeto
                        </label>
                        <textarea
                            name="briefing"
                            required
                            disabled={loading}
                            placeholder="Ex: No ano de 2077, um ninja cibernético descobre uma antiga relíquia que pode resetar o tempo..."
                            className="w-full h-40 p-6 bg-black/40 border border-white/10 rounded-2xl focus:border-indigo-500/50 transition-all resize-none text-lg text-white placeholder:text-white/20 disabled:opacity-50"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button
                            type="submit"
                            disabled={loading || !hasKeys}
                            className="flex-1 w-full h-16 bg-white text-black hover:bg-white/90 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={24} />
                                    GERANDO...
                                </>
                            ) : (
                                <>
                                    <Play fill="black" size={24} />
                                    GERAR ROTEIRO & FRAMES
                                </>
                            )}
                        </button>
                        <Link
                            href="/settings"
                            className="w-full md:w-auto px-8 h-16 glass rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-white/5 transition-colors"
                        >
                            CONFIGURAR
                        </Link>
                    </div>

                    {error && (
                        <div className="text-center p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                            <p className="text-rose-400 text-sm">{error}</p>
                        </div>
                    )}

                    {!hasKeys && (
                        <div className="text-center p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                            <p className="text-amber-200 text-sm">
                                ⚠️ Você ainda não configurou suas chaves de API. Vá em <strong>Configurações</strong> para começar.
                            </p>
                        </div>
                    )}
                </form>
            </div>

            {result && <ScriptPreview script={result} />}
        </div>
    );
}
