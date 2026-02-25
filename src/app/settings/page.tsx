import { SettingsForm } from "@/components/settings-form";
import { Settings } from "lucide-react";

export default async function SettingsPage() {
    const settings = await getSettings();

    return (
        <div className="max-w-4xl mx-auto w-full px-6 py-12 space-y-12 animate-fade-up">
            <div className="flex flex-col gap-2 border-b border-white/5 pb-10">
                <div className="flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">
                    <Settings size={12} />
                    System Configuration
                </div>
                <h1 className="text-4xl font-black tracking-tighter outfit text-white">Configurações</h1>
                <p className="text-white/40 text-sm font-medium">Gerencie suas chaves de API e preferências de Inteligência Artificial.</p>
            </div>

            <div className="editing-panel p-8 md:p-10 shadow-3xl">
                <SettingsForm initialSettings={settings} />
            </div>
        </div>
    );
}
