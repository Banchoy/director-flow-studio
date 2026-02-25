"use client";

import { useState } from "react";
import { Sparkles, Play, Video, Terminal, Loader2, Wand2 } from "lucide-react";
import Link from "next/link";
import { generateContent } from "@/app/actions/generate";
import { ScriptPreview } from "./script-preview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CreationFormProps {
    hasKeys: boolean;
    isAnimeMode: boolean;
}

export function CreationForm({ hasKeys, isAnimeMode }: CreationFormProps) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [sceneCount, setSceneCount] = useState(3);

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
        <div className="w-full flex flex-col items-center animate-slide">
            <div className="w-full max-w-5xl bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>

                {/* Header do Form */}
                <div className="flex items-center justify-between mb-12">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-black font-heading tracking-tight text-white flex items-center gap-2 italic">
                            <Wand2 className="text-blue-500" size={24} /> Criador de Fluxo
                        </h2>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Orquestração de Inteligência Artificial</p>
                    </div>
                    {isAnimeMode ? (
                        <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20 px-4 py-1.5 rounded-xl text-[10px] font-bold tracking-widest uppercase">
                            Direção: Estúdio Anime
                        </Badge>
                    ) : (
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 rounded-xl text-[10px] font-bold tracking-widest uppercase">
                            Direção: Cinematográfico
                        </Badge>
                    )}
                </div>

                <form action={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    {/* Coluna 1: Ajustes Técnicos */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="space-y-5">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2 ml-1">
                                <Sparkles size={14} className="text-blue-500" />
                                Atmosfera
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {atmospheres.map((atm) => (
                                    <label
                                        key={atm.id}
                                        className="relative group cursor-pointer"
                                    >
                                        <input type="radio" name="atmosphere" value={atm.id} className="sr-only peer" defaultChecked={atm.id === 'action'} />
                                        <div className="p-4 rounded-3xl bg-slate-800/50 border border-white/5 text-center transition-all peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:text-white hover:bg-slate-800 group-active:scale-95 shadow-lg">
                                            <span className="block text-3xl mb-2 group-hover:scale-110 transition-transform">{atm.icon}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{atm.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
                                    <Video size={14} className="text-blue-500" />
                                    Cenas
                                </label>
                                <Badge variant="outline" className="text-[10px] font-black border-blue-500/20 text-blue-400">{sceneCount} QUADROS</Badge>
                            </div>
                            <input
                                type="range"
                                name="sceneCount"
                                min="1"
                                max="5"
                                value={sceneCount}
                                onChange={(e) => setSceneCount(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase tracking-widest">
                                <span>Rápido</span>
                                <span>Completo</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Briefing */}
                    <div className="lg:col-span-8 flex flex-col space-y-10">
                        <div className="flex-1 space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2 pl-1">
                                <Terminal size={14} className="text-blue-500" />
                                Roteiro Base (Briefing)
                            </label>
                            <div className="h-full min-h-[300px] relative">
                                <textarea
                                    name="briefing"
                                    required
                                    disabled={loading}
                                    placeholder="Descreva sua visão narrativa... Ex: Um robô descobrindo o amor em uma Tóquio cyberpunk."
                                    className="w-full h-full p-8 bg-slate-950/50 border border-white/5 rounded-[2rem] focus:border-blue-500/50 focus:ring-0 transition-all resize-none text-base text-white placeholder:text-slate-600 disabled:opacity-50 font-medium leading-relaxed italic"
                                />
                                <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                                    <Sparkles size={40} className="text-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <Button
                                type="submit"
                                disabled={loading || !hasKeys}
                                size="lg"
                                className="flex-1 w-full h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] tracking-[0.25em] uppercase flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-50 group italic"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        ORQUESTRANDO IA...
                                    </>
                                ) : (
                                    <>
                                        <Play fill="white" size={16} className="group-hover:translate-x-1 transition-transform" />
                                        INICIAR PRODUÇÃO
                                    </>
                                )}
                            </Button>
                            <Link href="/logs" className="w-full md:w-auto">
                                <Button
                                    variant="outline"
                                    className="w-full md:w-auto px-10 h-16 bg-slate-800/50 border-white/5 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-slate-800 transition-all text-slate-400 hover:text-white"
                                >
                                    Painel
                                </Button>
                            </Link>
                        </div>
                    </div>
                </form>

                {/* Status de Loading Refinado */}
                {loading && (
                    <div className="mt-12 pt-10 border-t border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5">
                                        <Loader2 className="animate-spin" size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase italic">Neural Syncing</span>
                                </div>
                                <div className="w-8 h-[2px] bg-slate-800"></div>
                                <div className="flex flex-col items-center gap-3 opacity-20">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 border border-white/5 flex items-center justify-center font-black text-xs">02</div>
                                    <span className="text-[10px] font-black tracking-widest uppercase italic">Visuals</span>
                                </div>
                                <div className="w-8 h-[2px] bg-slate-800"></div>
                                <div className="flex flex-col items-center gap-3 opacity-20">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 border border-white/5 flex items-center justify-center font-black text-xs">03</div>
                                    <span className="text-[10px] font-black tracking-widest uppercase italic">Motion</span>
                                </div>
                            </div>
                            <p className="text-[11px] font-semibold text-slate-500 italic max-w-sm text-center leading-relaxed">Sincronizando modelos de rede neural v14... <br /> <span className="text-blue-500/50">Diretor IA está compondo as cenas iniciais.</span></p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mt-10 p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex items-center justify-center gap-3 animate-in shake duration-500">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <p className="text-red-400 text-[11px] font-black uppercase tracking-widest italic">{error}</p>
                    </div>
                )}
            </div>

            {result && <ScriptPreview script={result} />}
        </div>
    );
}
