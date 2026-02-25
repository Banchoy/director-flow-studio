"use client";

import {
    Users,
    Zap,
    TrendingUp,
    Activity,
    BrainCircuit,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    const stats = [
        { label: "Agentes Ativos", value: "12", trend: "+14%", detail: "Inteligências em execução", icon: BrainCircuit, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Requisições de IA", value: "142.5k", trend: "+8.2%", detail: "Processamento mensal", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Membros da Equipe", value: "8", trend: "+2", detail: "Colaboradores ativos", icon: Users, color: "text-orange-600", bg: "bg-orange-50" },
        { label: "Uptime do Sistema", value: "99.9%", trend: "Estável", detail: "Infraestrutura resiliente", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
    ];

    return (
        <div className="space-y-10 animate-slide">
            {/* Seção de Boas-vindas */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5">
                    <h1 className="text-4xl font-black tracking-tighter outfit text-[#18181b]">Command Center</h1>
                    <p className="text-sm font-medium text-[#a1a1aa]">Visão geral estratégica da sua infraestrutura de inteligência artificial.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 h-12 bg-white border border-[#e4e4e7] rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-[#18181b] hover:bg-[#f4f4f5] transition-all">Exportar Relatórios</button>
                    <button className="px-6 h-12 bg-[#18181b] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-black/20 transition-all active:scale-[0.98]">Criar Novo Agente</button>
                </div>
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card group">
                        <div className="flex items-center justify-between mb-8">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-sm", stat.bg, stat.color)}>
                                <stat.icon size={26} />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black">
                                <TrendingUp size={12} />
                                {stat.trend}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a1a1aa] mb-1">{stat.label}</h3>
                            <div className="text-4xl font-black tracking-tight outfit text-[#18181b]">{stat.value}</div>
                            <div className="flex items-center justify-between pt-4 border-t border-[#f1f1f4] mt-4">
                                <p className="text-[9px] font-black text-[#a1a1aa] uppercase tracking-wider">{stat.detail}</p>
                                <ArrowUpRight size={14} className="text-[#e4e4e7] group-hover:text-[#18181b] transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Seção Inferior: Monitoramento e Ações */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                <div className="lg:col-span-2 stat-card">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-xl font-black outfit tracking-tight text-[#18181b]">Atividade de Automação</h2>
                            <p className="text-sm text-[#a1a1aa] font-medium mt-1">Registros de execução em tempo real.</p>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18181b]/30 hover:text-[#18181b] transition-all">Ver Histórico</button>
                    </div>

                    <div className="space-y-5">
                        {[
                            { name: "Agente Comercial #01", action: "Interação via WhatsApp finalizada.", time: "2m atrás" },
                            { name: "Agente de Triagem #04", action: "42 novos leads processados.", time: "12m atrás" },
                            { name: "Core System", action: "Atualização de segurança aplicada.", time: "45m atrás" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 p-5 rounded-3xl hover:bg-[#fbfcfe] border border-[#f1f1f4]/50 hover:border-[#f1f1f4] transition-all group cursor-pointer shadow-sm hover:shadow-md">
                                <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#a1a1aa] group-hover:bg-[#18181b] group-hover:text-white transition-all duration-300">
                                    <Activity size={22} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-black outfit leading-none text-[#18181b]">{item.name}</h4>
                                    <p className="text-sm text-[#a1a1aa] font-medium mt-2">{item.action}</p>
                                </div>
                                <span className="text-[11px] font-black text-[#cbd5e1]">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#18181b] rounded-[2.5rem] p-12 flex flex-col justify-between text-white shadow-2xl shadow-black/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] blur-[120px] rounded-full -mr-40 -mt-40"></div>
                    <div className="space-y-8 relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-emerald-400">
                            <Zap size={32} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black outfit leading-[1.1] tracking-tight">Potencialize sua operação com IA.</h3>
                            <p className="text-base text-white/40 leading-relaxed font-medium">Configure fluxos automatizados que trabalham por você 24/7 com precisão absoluta.</p>
                        </div>
                    </div>
                    <button className="w-full h-14 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] mt-12 hover:bg-[#f4f4f5] transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl relative z-10">Painel de Agentes</button>
                </div>
            </div>
        </div>
    );
}
