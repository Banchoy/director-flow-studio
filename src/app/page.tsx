import { getSettings } from "@/app/actions/settings";
import { Sparkles, Video, Terminal } from "lucide-react";
import { CreationForm } from "@/components/creation-form";

export default async function HomePage() {
    const settings = await getSettings();
    const hasKeys = !!(settings?.deepseekKey && settings?.leonardoKey);

    return (
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 flex flex-col items-center">
            {/* Hero Section Refinada */}
            <div className="text-center mb-20 space-y-6 relative animate-fade-up">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-4">
                    <Sparkles size={12} className="text-indigo-400" />
                    Next-Gen AI Animation Studio
                </div>

                <h1 className="text-7xl md:text-8xl font-black tracking-tighter outfit leading-[0.9]">
                    Dê vida ao seu <br />
                    <span className="gradient-text">Anime</span> em segundos.
                </h1>

                <p className="text-lg md:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed pt-4 font-medium">
                    Do briefing ao frame final. Orquestre as IAs mais potentes do mundo
                    em um fluxo único de criação cinematográfica.
                </p>
            </div>

            <CreationForm
                hasKeys={hasKeys}
                isAnimeMode={settings?.isAnimeMode || false}
            />

            {/* Grid de Tecnologias (Node.js Backend) */}
            <div className="mt-40 w-full animate-fade-up [animation-delay:0.4s]">
                <div className="text-center mb-16 space-y-2">
                    <h2 className="text-xs font-black tracking-[0.6em] text-white/20 uppercase">Core Infrastructure</h2>
                    <p className="text-2xl font-bold tracking-tight">Potência Node.js & IA</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                        { icon: Sparkles, color: "text-indigo-400", bg: "bg-indigo-500/5", title: "Roteiro Inteligente", desc: "Powered by DeepSeek V3 para diálogos e cenários densos.", label: "NLP ENGINE" },
                        { icon: Video, color: "text-rose-400", bg: "bg-rose-500/5", title: "Visual Art", desc: "Leonardo.ai refinando cada frame com precisão artística.", label: "GEN-ART" },
                        { icon: Terminal, color: "text-amber-400", bg: "bg-amber-500/5", title: "Motion Design", desc: "Luma Dream Machine trazendo fluidez e realismo.", label: "VID-CORE" }
                    ].map((feature, i) => (
                        <div key={i} className="group p-8 glass rounded-[32px] border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                            <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <span className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-2 block">{feature.label}</span>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>

                            {/* Glow decorativo */}
                            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
