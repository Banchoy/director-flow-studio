"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";

interface GenerationResultComponentProps {
    result: any;
}

export function GenerationResult({ result }: GenerationResultComponentProps) {
    if (!result) return null;

    return (
        <div className="mt-12 w-full max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-bold outfit">{result.script.title}</h2>
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/20">
                    {result.script.genre}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {result.scenes.map((scene: any) => (
                    <div key={scene.order} className="glass rounded-2xl overflow-hidden group">
                        <div className="aspect-video relative bg-black/60 flex items-center justify-center">
                            {scene.status === 'frame_done' && scene.frame?.imageUrls?.[0] ? (
                                <img
                                    src={scene.frame.imageUrls[0]}
                                    alt={scene.description}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-white/20">
                                    <ImageIcon size={48} />
                                    <span className="text-xs font-medium uppercase tracking-widest italic">{scene.status}</span>
                                </div>
                            )}
                            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">
                                SCENE {scene.order}
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            <p className="text-sm text-white/80 line-clamp-3 leading-relaxed">
                                {scene.description}
                            </p>
                            <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-tighter text-white/40">
                                <span>{scene.tone}</span>
                                <span>{scene.durationSeconds}s</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
