"use client";

import {
    ArrowRight,
    LayoutDashboard,
    Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BriefingPanel } from "@/components/dashboard/briefing-panel";
import { StylePresets } from "@/components/dashboard/style-presets";
import { UsageCharts } from "@/components/dashboard/usage-charts";
import { PreviewConsole } from "@/components/dashboard/preview-console";

export default function DashboardPage() {
    return (
        <div className="space-y-12 animate-slide">
            {/* Seção de Título */}
            <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <LayoutDashboard size={22} />
                    </div>
                    <Badge variant="outline" className="px-4 py-1 border-blue-500/30 text-blue-400 bg-blue-500/5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                        Enterprise Command Center
                    </Badge>
                </div>
                <div>
                    <h1 className="text-5xl font-black tracking-tight font-heading text-white leading-tight italic">
                        Director<span className="text-blue-500">Flow</span> Studio
                    </h1>
                    <p className="text-slate-400 max-w-2xl font-medium leading-relaxed mt-2 text-lg">
                        Sua usina de produção de anime alimentada por IA. Do briefing ao vídeo final em minutos.
                    </p>
                </div>
            </div>

            {/* Grid Principal: Briefing + Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 h-full">
                    <BriefingPanel />
                </div>
                <div className="lg:col-span-7 h-full">
                    <PreviewConsole />
                </div>
            </div>

            {/* Presets de Estilo */}
            <div className="space-y-8">
                <StylePresets />
            </div>

            {/* Gráficos de Uso */}
            <div className="space-y-10 pt-10 border-t border-white/5">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-black font-heading text-white italic">Métricas de Consumo</h2>
                    <div className="h-px flex-1 bg-white/5"></div>
                </div>
                <UsageCharts />
            </div>

            {/* Footer de Ação Rápida */}
            <div className="bg-blue-600 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center text-white shadow-inner">
                        <Sparkles size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black font-heading tracking-tight italic">Quer resultados ainda mais profundos?</h3>
                        <p className="text-blue-100/70 font-medium">Explore a configuração avançada dos seus Agentes de IA.</p>
                    </div>
                </div>
                <button className="h-14 px-8 bg-white text-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-xl italic relative z-10 flex items-center gap-3">
                    Painel de Agentes <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}
