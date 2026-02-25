"use client";

import { Sparkles, Type, Image as ImageIcon, Film, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
        <div className="w-full max-w-5xl mx-auto space-y-24 py-24 animate-slide">
            <div className="text-center space-y-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>
                <div className="flex flex-col items-center gap-6">
                    <Badge variant="outline" className="px-5 py-1.5 border-blue-500/30 text-blue-400 bg-blue-500/5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase">
                        Master Blueprint v2.0
                    </Badge>
                    <h2 className="text-7xl font-black font-heading tracking-tighter text-white max-w-4xl leading-[1.1] italic">
                        {script.title}
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-24 bg-white/5"></div>
                    <p className="text-slate-500 font-black tracking-[0.3em] text-[10px] uppercase italic">
                        Visão Narrativa (Synopsis)
                    </p>
                    <div className="h-px w-24 bg-white/5"></div>
                </div>
                <p className="text-slate-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium italic">
                    "{script.synopsis}"
                </p>
            </div>

            <div className="space-y-40">
                {script.scenes.map((scene) => (
                    <div key={scene.order} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className={`lg:col-span-5 space-y-10 ${scene.order % 2 === 0 ? 'lg:order-2' : ''}`}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-5">
                                    <span className="flex-none w-16 h-16 rounded-[1.25rem] bg-blue-600 text-white flex items-center justify-center font-black text-2xl font-heading shrink-0 shadow-xl shadow-blue-600/20 italic">
                                        {scene.order.toString().padStart(2, '0')}
                                    </span>
                                    <div className="h-px flex-1 bg-white/5"></div>
                                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 border-white/5">
                                        Frame Direction
                                    </Badge>
                                </div>
                                <h3 className="text-4xl leading-tight font-black font-heading text-white italic">
                                    {scene.description}
                                </h3>
                            </div>

                            <div className="p-8 bg-slate-900/50 rounded-[2.5rem] border border-white/5 space-y-5 backdrop-blur-sm">
                                <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                    <Sparkles size={12} className="text-blue-500" />
                                    Prompt de Engenharia Visual
                                </span>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                                    {scene.visualPrompt}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative group">
                            <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden aspect-[16/9] flex items-center justify-center border border-white/5 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-blue-500/20">
                                {scene.image ? (
                                    <img
                                        src={scene.image}
                                        alt={`Preview cena ${scene.order}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-6 text-slate-800">
                                        <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner">
                                            <ImageIcon size={40} className="text-slate-700" />
                                        </div>
                                        <span className="text-[10px] font-black tracking-[0.5em] uppercase animate-pulse">Neural Render Engine</span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute bottom-10 right-10 flex items-center gap-5 bg-slate-900/90 backdrop-blur-2xl px-8 py-4 rounded-[1.5rem] border border-white/10 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-5 bg-blue-500/20 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-8 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-2 h-5 bg-blue-500/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Otimizando Frame</span>
                                    <Film size={18} className="text-slate-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Final */}
            <div className="pt-32 border-t border-white/5 text-center flex flex-col items-center gap-10">
                <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">Finalização Industrial Platinum</p>
                    <h3 className="text-5xl font-black font-heading tracking-tight text-white italic">Pronto para a premiere global?</h3>
                </div>
                <Button size="lg" className="h-20 px-16 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-[12px] tracking-[0.3em] uppercase transition-all shadow-2xl shadow-blue-600/30 group italic">
                    <Play className="mr-3 fill-white" size={20} /> INICIAR RENDERIZAÇÃO 4K <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
