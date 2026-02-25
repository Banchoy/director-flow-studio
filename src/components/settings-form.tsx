"use client";

import { useActionState } from "react";
import { saveSettings } from "@/app/actions/settings";
import { Key, Shield, Monitor, Sparkles, Loader2, CheckCircle2, AlertCircle, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SettingsFormProps {
    initialSettings: any;
}

export function SettingsForm({ initialSettings }: SettingsFormProps) {
    const [state, formAction, isPending] = useActionState(saveSettings, null);

    return (
        <form action={formAction} className="space-y-12 animate-slide">
            {/* Header das Configurações */}
            <div className="flex items-center justify-between relative overflow-hidden p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 backdrop-blur-sm mb-12">
                <div className="absolute top-0 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
                <div className="space-y-4 relative z-10">
                    <Badge variant="outline" className="px-4 py-1 border-blue-500/30 text-blue-400 bg-blue-500/5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                        ⚙️ Central de Configurações
                    </Badge>
                    <h1 className="text-4xl font-black tracking-tight font-heading text-white italic">
                        Ajuste sua <span className="text-blue-500">Engine</span>.
                    </h1>
                    <p className="text-slate-500 max-w-lg font-medium">Configure suas chaves de API e diretivas de arte para personalização máxima.</p>
                </div>
                <div className="relative z-10 hidden md:block">
                    <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-blue-500 border border-white/5 shadow-2xl">
                        <Settings2 size={40} className="animate-spin-slow" />
                    </div>
                </div>
            </div>

            {/* Seção de Chaves de API */}
            <div className="stat-card bg-slate-900/40 border-white/5 p-8">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Key size={22} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black font-heading tracking-tight text-white italic">Células de Conectividade</h2>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Integrações de API Externas</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { name: "deepseekKey", label: "Arquitetura DeepSeek", placeholder: "sk-..." },
                        { name: "leonardoKey", label: "Leonardo.ai Engine", placeholder: "Chave para frames" },
                        { name: "elevenlabsKey", label: "ElevenLabs Voice", placeholder: "Sintetização de voz" },
                        { name: "lumaKey", label: "Luma Dream Machine", placeholder: "Renderização de Motion" },
                    ].map((field) => (
                        <div key={field.name} className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">{field.label}</label>
                            <input
                                name={field.name}
                                type="password"
                                defaultValue={initialSettings?.[field.name] || ""}
                                placeholder={field.placeholder}
                                className="w-full h-14 px-6 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 text-sm font-medium text-white italic"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Preferências de Estúdio */}
            <div className="stat-card bg-slate-900/40 border-white/5 p-8">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Sparkles size={22} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black font-heading tracking-tight text-white italic">Diretivas de Direção</h2>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Estilização de Arte e Frames</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-6 bg-slate-800/50 rounded-3xl border border-white/5 transition-all hover:bg-slate-800">
                            <div className="space-y-1">
                                <h3 className="text-base font-black font-heading text-white italic">Modo Otaku</h3>
                                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">Otimização Cel-Shading.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer scale-110">
                                <input
                                    name="isAnimeMode"
                                    type="checkbox"
                                    defaultChecked={initialSettings?.isAnimeMode || false}
                                    className="sr-only peer"
                                />
                                <div className="w-12 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Estilo de Arte Mestre</label>
                        <select
                            name="animeStyle"
                            defaultValue={initialSettings?.animeStyle || "shonen"}
                            className="w-full h-14 px-6 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 outline-none transition-all text-sm font-bold text-white cursor-pointer appearance-none italic"
                        >
                            <option value="shonen" className="bg-slate-900">Shonen (High Dynamics)</option>
                            <option value="seinen" className="bg-slate-900">Seinen (Dark/Sophisticated)</option>
                            <option value="ghibli" className="bg-slate-900">Studio Ghibli (Soft/Aesthetic)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 pt-6">
                <Button
                    type="submit"
                    disabled={isPending}
                    size="lg"
                    className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] shadow-2xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 italic"
                >
                    {isPending ? <Loader2 className="animate-spin text-white" size={20} /> : <Shield size={18} className="text-white/50" />}
                    {isPending ? "SINCRONIZANDO ENGINE..." : "APLICAR DIRETIVAS DE SEGURANÇA"}
                </Button>

                {state?.success && (
                    <div className="flex items-center gap-4 text-emerald-400 bg-emerald-500/5 p-6 rounded-3xl border border-emerald-500/20 animate-in fade-in slide-in-from-top-4 italic">
                        <CheckCircle2 size={24} />
                        <div>
                            <span className="text-xs font-black uppercase tracking-widest block">Sincronização Concluída</span>
                            <span className="text-[10px] text-emerald-500/60 font-medium">As células de memória foram atualizadas com sucesso.</span>
                        </div>
                    </div>
                )}

                {state?.success === false && (
                    <div className="flex items-center gap-4 text-rose-400 bg-rose-500/5 p-6 rounded-3xl border border-rose-500/20 animate-in shake italic">
                        <AlertCircle size={24} />
                        <div>
                            <span className="text-xs font-black uppercase tracking-widest block">Falha de Integridade</span>
                            <span className="text-[10px] text-rose-500/60 font-medium">{state.error || "Erro crítico na engine de dados."}</span>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
