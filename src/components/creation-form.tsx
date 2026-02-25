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
    const [sceneCount, setSceneCount] = useState(3);

    // Mapeamento de atmosferas para o seletor visual
    const atmospheres = [
        { id: "action", label: "Ação", icon: "🔥" },
        { id: "mystery", label: "Mistério", icon: "👁️" },
        { id: "nature", label: "Natureza", icon: "🌱" },
        { id: "cyberpunk", label: "Cyberpunk", icon: "🌃" },
        { id: "slice-of-life", label: "Cotidiano", icon: "🍵" },
    ];

    async function handleSubmit(formData: FormData) {
        if (!hasKeys) return;

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await generateContent(formData);
            if (res.success && res.data?.script) {
                const formattedScript = {
                    title: res.data.script.title,
                    synopsis: res.data.script.synopsis,
                    scenes: (res.data.scenes || []).map((s: any) => ({
                        order: s.order,
                        description: s.description,
                        visualPrompt: s.visualPrompt,
                        image: s.frame?.imageUrls?.[0]
                    }))
                };
                setResult(formattedScript);
            } else {
                setError(res.error || "Ocorreu um erro inesperado na geração.");
            }
        } catch (err) {
            setError("Falha na comunicação com o servidor.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full flex flex-col items-center animate-fade-up">
            <div className="w-full max-w-5xl glass p-8 rounded-[40px] md:p-10 shadow-3xl relative overflow-hidden border-white/5">
                {/* Badge de Modo */}
                <div className="flex justify-end mb-6">
                    {isAnimeMode ? (
                        <div className="bg-rose-500/10 text-rose-400 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] border border-rose-500/20 flex items-center gap-2 uppercase">
                            <Sparkles size={12} />
                            Direção: Estúdio Anime
                        </div>
                    ) : (
                        <div className="bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] border border-indigo-500/20 flex items-center gap-2 uppercase">
                            <Video size={12} />
                            Direção: Cinematográfico
                        </div>
                    )}
                </div>

                <form action={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Coluna 1: Ajustes Técnicos */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Sparkles size={14} className="text-indigo-400" />
                                Atmosfera
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {atmospheres.map((atm) => (
                                    <label
                                        key={atm.id}
                                        className="relative group cursor-pointer"
                                    >
                                        <input type="radio" name="atmosphere" value={atm.id} className="sr-only peer" defaultChecked={atm.id === 'action'} />
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center transition-all peer-checked:bg-white/10 peer-checked:border-indigo-500/50 peer-checked:text-indigo-400 hover:bg-white/10 group-active:scale-95">
                                            <span className="block text-xl mb-1">{atm.icon}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">{atm.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Video size={14} className="text-indigo-400" />
                                    Cenas
                                </label>
                                <span className="text-xs font-black text-indigo-400">{sceneCount} QUADROS</span>
                            </div>
                            <input
                                type="range"
                                name="sceneCount"
                                min="1"
                                max="5"
                                value={sceneCount}
                                onChange={(e) => setSceneCount(parseInt(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest">
                                <span>Rápido</span>
                                <span>Completo</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Briefing */}
                    <div className="lg:col-span-8 flex flex-col space-y-6">
                        <div className="flex-1 space-y-3">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2 pl-1">
                                <Terminal size={14} className="text-indigo-400" />
                                Roteiro Base (Briefing)
                            </label>
                            <div className="relative glow-border h-full min-h-[220px]">
                                <textarea
                                    name="briefing"
                                    required
                                    disabled={loading}
                                    placeholder="Descreva a alma da sua história aqui..."
                                    className="w-full h-full p-8 bg-black/40 border border-white/5 rounded-[24px] focus:border-indigo-500/30 transition-all resize-none text-lg text-white/90 placeholder:text-white/10 disabled:opacity-50 font-medium leading-relaxed"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <button
                                type="submit"
                                disabled={loading || !hasKeys}
                                className="flex-1 w-full h-16 bg-white text-black hover:bg-white/90 rounded-2xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        ORQUESTRANDO IA...
                                    </>
                                ) : (
                                    <>
                                        <Play fill="black" size={18} className="group-hover:translate-x-1 transition-transform" />
                                        INICIAR PRODUÇÃO
                                    </>
                                )}
                            </button>
                            <Link
                                href="/settings"
                                className="w-full md:w-auto px-10 h-16 glass rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white/5 transition-all text-white/50 hover:text-white"
                            >
                                <Terminal size={14} />
                                Painel
                            </Link>
                        </div>
                    </div>
                </form>

                {/* Status de Loading Refinado */}
                {loading && (
                    <div className="mt-8 pt-8 border-t border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                                    <span className="text-[10px] font-black text-indigo-400 tracking-widest">PENSANDO</span>
                                </div>
                                <div className="w-px h-8 bg-white/10"></div>
                                <div className="flex flex-col items-center gap-2 text-white/20">
                                    <div className="w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center text-[10px]">2</div>
                                    <span className="text-[10px] font-black tracking-widest uppercase">Pintando</span>
                                </div>
                                <div className="w-px h-8 bg-white/10"></div>
                                <div className="flex flex-col items-center gap-2 text-white/20">
                                    <div className="w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center text-[10px]">3</div>
                                    <span className="text-[10px] font-black tracking-widest uppercase">Finalizando</span>
                                </div>
                            </div>
                            <p className="text-xs font-bold text-white/30 italic">Isso pode levar até 30 segundos enquanto a IA cria seu universo...</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mt-6 text-center p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                        <p className="text-rose-400 text-xs font-bold tracking-wide">{error}</p>
                    </div>
                )}
            </div>

            {result && <ScriptPreview script={result} />}
        </div>
    );
}
