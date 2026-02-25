"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Image as ImageIcon, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GenerationResultComponentProps {
    result: any;
}

export function GenerationResult({ result }: GenerationResultComponentProps) {
    if (!result) return null;

    return (
        <div className="mt-20 w-full max-w-5xl space-y-12 animate-slide">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-10">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black font-heading tracking-tighter text-white italic">{result.script.title}</h2>
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 italic">{result.script.synopsis?.slice(0, 120)}...</p>
                </div>
                <div className="flex gap-4">
                    <Badge className="bg-blue-600 shadow-lg shadow-blue-500/20 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-none italic">
                        {result.script.genre || "Animation Master"}
                    </Badge>
                    <Badge variant="outline" className="bg-slate-900/50 text-slate-300 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-white/10 italic">
                        {result.scenes.length} Entidades Geradas
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {result.scenes.map((scene: any) => (
                    <div key={scene.order} className="stat-card group p-0 overflow-hidden bg-slate-900/40 border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 rounded-[2rem]">
                        <div className="aspect-video relative bg-slate-950 flex items-center justify-center border-b border-white/5">
                            {scene.status === 'frame_done' && scene.frame?.imageUrls?.[0] ? (
                                <img
                                    src={scene.frame.imageUrls[0]}
                                    alt={scene.description}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-slate-700">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner">
                                        <Loader2 className="animate-spin text-blue-500" size={24} />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] italic opacity-50">{scene.status}</span>
                                </div>
                            )}
                            <div className="absolute top-5 left-5 bg-slate-900/90 backdrop-blur-xl px-4 py-1.5 rounded-xl border border-white/5 shadow-xl text-[10px] font-black text-blue-400 tracking-widest italic">
                                UNIT {scene.order.toString().padStart(2, '0')}
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <p className="text-sm text-slate-400 font-medium line-clamp-2 leading-relaxed h-[2.5rem] italic">
                                "{scene.description}"
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <Film size={12} className="text-blue-500" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">{scene.tone || "Cinematic"}</span>
                                </div>
                                <Badge variant="outline" className="text-[9px] font-bold text-slate-500 bg-slate-950/50 border-white/5 px-2 py-0.5 rounded-lg">{scene.durationSeconds || 5}s Master</Badge>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
