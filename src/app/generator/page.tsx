import { getSettings } from "@/app/actions/settings";
import { CreationForm } from "@/components/creation-form";
import { Sparkles, Zap, Box, Terminal } from "lucide-react";

export default async function GeneratorPage() {
    const settings = await getSettings();
    const hasKeys = !!(settings?.deepseekKey && settings?.leonardoKey);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fade-up">
            {/* Header da Área de Edição */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">
                        <Terminal size={12} />
                        Production Environment
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter outfit text-white">Estúdio de Geração</h1>
                    <p className="text-white/40 text-sm font-medium">Orquestre suas ideias e transforme prompts em realidade cinematográfica.</p>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
                    <div className="px-4 py-2 bg-purple-500/10 rounded-xl border border-purple-500/20 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 font-bold">Sistemas Prontos</span>
                    </div>
                </div>
            </div>

            {/* Area de Trabalho Principal */}
            <div className="grid grid-cols-1 gap-12">
                <div className="editing-panel p-8 md:p-12 shadow-3xl relative overflow-hidden group">
                    {/* Glow decorativo */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full group-hover:bg-purple-600/10 transition-colors"></div>

                    <CreationForm
                        hasKeys={hasKeys}
                        isAnimeMode={settings?.isAnimeMode || false}
                    />
                </div>

                {/* Dicas de Prompt / Infos Rápidas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Modo Anime", desc: "Ative nas configurações para estilos Ghibli ou Makoto Shinkai.", icon: Box },
                        { title: "Roteiro Expandido", desc: "O DeepSeek V3 analisa o contexto para gerar prompts densos.", icon: Sparkles },
                        { title: "Alta Definição", desc: "Frames gerados com o Kinematic XL do Leonardo.ai.", icon: Zap }
                    ].map((feature, i) => (
                        <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:bg-white/[0.02] transition-colors">
                            <feature.icon size={20} className="text-white/20 mb-4" />
                            <h3 className="font-bold text-sm mb-1 text-white">{feature.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
