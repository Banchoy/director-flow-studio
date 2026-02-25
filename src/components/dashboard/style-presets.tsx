"use client";

import { Check, Flame, Palette, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const styles = [
    {
        id: "ghibli",
        name: "Studio Ghibli",
        description: "Aquarela suave, ambiente mágico e nostálgico.",
        image: "https://images.unsplash.com/photo-1578632738980-23053520144d?q=80&w=400&h=300&auto=format&fit=crop",
        icon: Wind,
        color: "text-emerald-400",
        border: "border-emerald-500/20"
    },
    {
        id: "shonen",
        name: "Shonen Power",
        description: "Contraste alto, linhas fortes e energia pura.",
        image: "https://images.unsplash.com/photo-1541562232579-512a21359920?q=80&w=400&h=300&auto=format&fit=crop",
        icon: Flame,
        color: "text-orange-400",
        border: "border-orange-500/20"
    },
    {
        id: "cyberpunk",
        name: "Cyberpunk Neo",
        description: "Neon intenso, futurismo distópico e detalhes mecânicos.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=400&h=300&auto=format&fit=crop",
        icon: Palette,
        color: "text-purple-400",
        border: "border-purple-500/20"
    }
];

export function StylePresets() {
    const [selected, setSelected] = useState("shonen");

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 italic">Presets de Estilo Visual</h3>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest underline cursor-pointer decoration-blue-500/30">Customizar Estilo</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {styles.map((style) => {
                    const isActive = selected === style.id;
                    const Icon = style.icon;

                    return (
                        <div
                            key={style.id}
                            onClick={() => setSelected(style.id)}
                            className={cn(
                                "group relative overflow-hidden rounded-[2rem] border transition-all duration-500 cursor-pointer",
                                isActive
                                    ? "bg-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10"
                                    : "bg-slate-950 border-white/5 hover:border-white/10"
                            )}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={style.image}
                                    alt={style.name}
                                    className={cn(
                                        "w-full h-full object-cover transition-transform duration-700",
                                        isActive ? "scale-110 blur-sm" : "group-hover:scale-110"
                                    )}
                                />
                                <div className={cn(
                                    "absolute inset-0 bg-slate-950/40 transition-opacity",
                                    isActive ? "opacity-90" : "opacity-40 group-hover:opacity-60"
                                )} />

                                {isActive && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl animate-bounce-short">
                                            <Check size={28} strokeWidth={3} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-2 relative">
                                <div className="flex items-center gap-2">
                                    <Icon size={14} className={style.color} />
                                    <h4 className="text-sm font-black text-white italic">{style.name}</h4>
                                </div>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{style.description}</p>
                            </div>

                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Estilo de animação customizado
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-short {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-bounce-short {
    animation: bounce-short 1s ease-in-out infinite;
  }
`;
if (typeof document !== 'undefined') document.head.appendChild(style);
