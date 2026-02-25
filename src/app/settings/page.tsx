import { saveSettings, getSettings } from "@/app/actions/settings";
import { Key, Shield, Monitor, Sparkles } from "lucide-react";

export default async function SettingsPage() {
    const settings = await getSettings();

    return (
        <div className="max-w-4xl mx-auto w-full px-6 py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-2">Configurações</h1>
                <p className="text-white/60">Gerencie suas chaves de API e preferências de Inteligência Artificial.</p>
            </div>

            <form action={saveSettings} className="space-y-8">
                {/* Seção de Chaves de API */}
                <div className="glass p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                            <Key size={20} />
                        </div>
                        <h2 className="text-xl font-semibold">Chaves de API (BYOK)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">DeepSeek (Roteiros)</label>
                            <input
                                name="deepseekKey"
                                type="password"
                                defaultValue={settings?.deepseekKey || ""}
                                placeholder="Introduza a sua chave DeepSeek"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Leonardo.ai (Imagens)</label>
                            <input
                                name="leonardoKey"
                                type="password"
                                defaultValue={settings?.leonardoKey || ""}
                                placeholder="Introduza a sua chave Leonardo"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">ElevenLabs (Voz)</label>
                            <input
                                name="elevenlabsKey"
                                type="password"
                                defaultValue={settings?.elevenlabsKey || ""}
                                placeholder="Introduza a sua chave ElevenLabs"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Luma AI (Vídeo)</label>
                            <input
                                name="lumaKey"
                                type="password"
                                defaultValue={settings?.lumaKey || ""}
                                placeholder="Introduza a sua chave Luma"
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Preferências de Estúdio */}
                <div className="glass p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                            <Sparkles size={20} />
                        </div>
                        <h2 className="text-xl font-semibold">Estúdio de Anime</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">Modo Anime</h3>
                                    <p className="text-sm text-white/50">Ativa otimização para cores 2D e cel-shading.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        name="isAnimeMode"
                                        type="checkbox"
                                        defaultChecked={settings?.isAnimeMode || false}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Estilo Base</label>
                            <select
                                name="animeStyle"
                                defaultValue={settings?.animeStyle || "shonen"}
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 outline-none transition-all"
                            >
                                <option value="shonen" className="bg-[#141414]">Shonen (Ação/Brilhante)</option>
                                <option value="seinen" className="bg-[#141414]">Seinen (Maduro/Sombrio)</option>
                                <option value="ghibli" className="bg-[#141414]">Ghibli (Aquarela/Natureza)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
                >
                    Salvar Configurações
                </button>
            </form>
        </div>
    );
}
