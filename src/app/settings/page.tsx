import { getSettings } from "@/app/actions/settings";
import { SettingsForm } from "@/components/settings-form";

export default async function SettingsPage() {
    const settings = await getSettings();

    return (
        <div className="max-w-4xl mx-auto w-full px-6 py-12">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2 outfit tracking-tight">Configurações</h1>
                <p className="text-white/60">Gerencie suas chaves de API e preferências de Inteligência Artificial.</p>
            </div>

            <SettingsForm initialSettings={settings} />
        </div>
    );
}
