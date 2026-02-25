"use client";

import { Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export function BriefingPanel() {
    return (
        <div className="stat-card bg-slate-900/40 border-white/10 p-8 space-y-8 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black font-heading tracking-tight text-white italic">Video Briefing</h2>
                    <p className="text-sm text-slate-500 font-medium">Descreva a cena que você deseja criar.</p>
                </div>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    AI Ready
                </Badge>
            </div>

            <div className="flex-1 min-h-[200px] relative">
                <Textarea
                    placeholder="Ex: Uma batalha épica entre dois samurais sob uma lua de sangue, estilo Shonen clássico, com muitos efeitos de partículas e sombras dramáticas..."
                    className="h-full resize-none pb-12 leading-relaxed"
                />
                <div className="absolute bottom-4 right-4 text-[10px] font-black text-slate-700 uppercase tracking-widest pointer-events-none">
                    Linguagem Natural Suportada
                </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-white italic">Modo Anime</p>
                        <p className="text-[10px] text-slate-500 font-medium">Otimização para estética Ghibli/Shonen</p>
                    </div>
                </div>
                <Switch defaultChecked />
            </div>

            <Button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[12px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/20 group italic">
                <Wand2 className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Gerar Roteiro e Frames
            </Button>
        </div>
    );
}
