import { getSettings } from "@/app/actions/settings";
import { Sparkles, Video, Terminal } from "lucide-react";
import { CreationForm } from "@/components/creation-form";

export default async function HomePage() {
    const settings = await getSettings();
    const hasKeys = !!(settings?.deepseekKey && settings?.leonardoKey);

    return (
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-6xl font-black tracking-tighter outfit">
                    Crie seu <span className="gradient-text">Anime</span> em Segundos.
                </h1>
                <p className="text-xl text-white/60 max-w-2xl">
                    Transforme briefings em roteiros e vídeos cinematográficos usando o poder da inteligência artificial.
                </p>
            </div>

            <CreationForm
                hasKeys={hasKeys}
                isAnimeMode={settings?.isAnimeMode || false}
            />

            {/* Grid de Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full">
                <div className="space-y-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mx-auto md:mx-0">
                        <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold">DeepSeek V3</h3>
                    <p className="text-white/40 text-sm">Roteiros detalhados e criativos com inteligência de última geração.</p>
                </div>
                <div className="space-y-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 mx-auto md:mx-0">
                        <Video size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Leonardo.ai</h3>
                    <p className="text-white/40 text-sm">Frames base gerados com modelos otimizados para estética Anime.</p>
                </div>
                <div className="space-y-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mx-auto md:mx-0">
                        <Terminal size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Luma Dream Machine</h3>
                    <p className="text-white/40 text-sm">Animação suave dos frames base para vídeo final incrível.</p>
                </div>
            </div>
        </div>
    );
}
