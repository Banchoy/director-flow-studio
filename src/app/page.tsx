import { getSettings } from "@/app/actions/settings";
import { Sparkles, Video, Terminal, Zap, Box, Users, LayoutDashboard, Settings } from "lucide-react";
import { CreationForm } from "@/components/creation-form";

export default async function HomePage() {
    const settings = await getSettings();
    const hasKeys = !!(settings?.deepseekKey && settings?.leonardoKey);

    return (
        <div className="space-y-10 animate-fade-up">
            {/* Boas-vindas */}
            <div className="space-y-1">
                <h1 className="text-3xl font-black tracking-tight outfit">Dashboard</h1>
                <p className="text-sm text-muted-foreground font-medium">Bem-vindo ao centro de comando dos seus agentes de IA.</p>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Agentes Ativos", value: "0", detail: "Configurados no sistema", icon: Box, color: "text-blue-500" },
                    { label: "Membros da Equipe", value: "1", detail: "Gerenciados via Clerk", icon: Users, color: "text-orange-500" },
                    { label: "Requisições / Mês", value: "142.5k", detail: "82% da cota utilizada", icon: Zap, color: "text-purple-500" },
                    { label: "Uptime", value: "99.9%", detail: "Sistema estável", icon: LayoutDashboard, color: "text-green-500" },
                ].map((stat, i) => (
                    <div key={i} className="dashboard-card group">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                            <stat.icon size={18} className={stat.color} />
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-black tracking-tighter outfit">{stat.value}</div>
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">{stat.detail}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Próximos Passos / Ações Rápidas */}
            <div className="dashboard-card bg-white border-border shadow-sm">
                <h2 className="text-lg font-bold mb-8">Próximos Passos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Ação 1: Iniciar Produção (Link para o Estúdio) */}
                    <div className="flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-black/10 hover:bg-muted/50 transition-all group cursor-pointer">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                            <Sparkles size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold">Treinar Novo Agente</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Produza vídeos e animes cinematográficos usando inteligência artificial.
                            </p>
                        </div>
                    </div>

                    {/* Ação 2: Configurar Integrações */}
                    <div className="flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-black/10 hover:bg-muted/50 transition-all group cursor-pointer">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground shrink-0 group-hover:scale-110 transition-transform">
                            <Settings size={22} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold">Configurar Integrações</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Conecte sua IA com Slack, WhatsApp ou seu CRM.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção do Formulário de Criação (Opcional: Integrado ou via clique/modal) */}
            <div className="pt-10 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-black tracking-tight outfit flex items-center gap-2">
                        <Zap size={20} className="text-purple-500" />
                        Estúdio de Geração
                    </h2>
                </div>
                <CreationForm
                    hasKeys={hasKeys}
                    isAnimeMode={settings?.isAnimeMode || false}
                />
            </div>
        </div>
    );
}
