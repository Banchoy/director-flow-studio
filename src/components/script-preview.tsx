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
        <div className="w-full max-w-4xl mx-auto space-y-12 py-12 animate-in fade-in duration-1000">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-black outfit tracking-tight underline decoration-indigo-500 decoration-4 underline-offset-8">
                    {script.title}
                </h2>
                <p className="text-white/60 italic text-lg max-w-2xl mx-auto">
                    "{script.synopsis}"
                </p>
            </div>

            <div className="space-y-24">
                {script.scenes.map((scene) => (
                    <div key={scene.order} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className={`space-y-6 ${scene.order % 2 === 0 ? 'md:order-2' : ''}`}>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black text-xl">
                                    {scene.order}
                                </span>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                                    <Type size={18} />
                                    Roteiro da Cena
                                </h3>
                            </div>
                            <p className="text-xl leading-relaxed text-white/90">
                                {scene.description}
                            </p>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Sparkles size={12} />
                                    Prompt Visual (AI)
                                </span>
                                <p className="text-sm text-white/50 italic">
                                    {scene.visualPrompt}
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative glass rounded-3xl overflow-hidden aspect-[16/9] flex items-center justify-center bg-black/40 border border-white/20 shadow-2xl">
                                {scene.image ? (
                                    <img
                                        src={scene.image}
                                        alt={`Preview cena ${scene.order}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-white/20">
                                        <ImageIcon size={64} strokeWidth={1} />
                                        <span className="text-xs font-bold tracking-[0.3em] uppercase">Preview do Frame</span>
                                    </div>
                                )}

                                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Aguardando Vídeo</span>
                                    <Film size={14} className="text-white/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-white/10 text-center">
                <button className="px-12 h-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/20">
                    PROCESSAR VÍDEO COMPLETO (LUMA AI)
                </button>
            </div>
        </div>
    );
}
