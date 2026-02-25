"use client";

import { Sparkles, Type, Image as ImageIcon, Film } from "lucide-react";

interface ScriptPreviewProps {
    script: {
        title: string;
        synopsis: string;
        scenes: Array<{
            order: number;
            description: string;
            visualPrompt: string;
            image?: string;
        }>;
    };
}

export function ScriptPreview({ script }: ScriptPreviewProps) {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-16 py-20 animate-fade-up">
            <div className="text-center space-y-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
                <h2 className="text-5xl font-black outfit tracking-tighter">
                    {script.title}
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-white/10"></div>
                    <p className="text-white/40 font-medium tracking-widest text-[10px] uppercase">
                        Sussurro da alma (Sinopse)
                    </p>
                    <div className="h-px w-12 bg-white/10"></div>
                </div>
                <p className="text-white/70 italic text-xl max-w-3xl mx-auto leading-relaxed">
                    "{script.synopsis}"
                </p>
            </div>

            <div className="space-y-32">
                {script.scenes.map((scene) => (
                    <div key={scene.order} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className={`lg:col-span-5 space-y-8 ${scene.order % 2 === 0 ? 'lg:order-2' : ''}`}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="flex-none w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center font-black text-xl outfit">
                                        {scene.order.toString().padStart(2, '0')}
                                    </span>
                                    <div className="h-px flex-1 bg-white/5"></div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/80">
                                        Roteiro Técnico
                                    </h3>
                                </div>
                                <p className="text-2xl leading-snug font-medium text-white/90">
                                    {scene.description}
                                </p>
                            </div>

                            <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 space-y-3">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Sparkles size={12} className="text-amber-500/50" />
                                    Diretrizes para IA (Visual Prompt)
                                </span>
                                <p className="text-xs text-white/40 italic leading-relaxed">
                                    {scene.visualPrompt}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative group">
                            {/* Reflexo Premium */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/5 blur-[80px] rounded-full -z-10 group-hover:bg-rose-500/10 transition-colors"></div>

                            <div className="relative glass rounded-[40px] overflow-hidden aspect-[16/9] flex items-center justify-center bg-black/40 border border-white/10 shadow-3xl transition-transform duration-700 group-hover:scale-[1.01]">
                                {scene.image ? (
                                    <img
                                        src={scene.image}
                                        alt={`Preview cena ${scene.order}`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-white/10">
                                        <ImageIcon size={64} strokeWidth={1} />
                                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">Renderizando Frame</span>
                                    </div>
                                )}

                                {/* Badge de Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/60 backdrop-blur-2xl px-5 py-2.5 rounded-2xl border border-white/10 shadow-2xl">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-3 bg-rose-500/40 rounded-full animate-bounce"></div>
                                        <div className="w-1 h-5 bg-rose-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1 h-3 bg-rose-500/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/90">Aguar. Luma AI</span>
                                    <Film size={14} className="text-white/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-20 border-t border-white/5 text-center flex flex-col items-center gap-6">
                <div className="space-y-2">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Finalização Mestre</p>
                    <h3 className="text-2xl font-bold">Pronto para a imersão total?</h3>
                </div>
                <button className="px-16 h-20 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-[28px] font-black text-sm tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-white/20">
                    GERAR VÍDEO COMPLETO
                </button>
            </div>
        </div>
    );
}
