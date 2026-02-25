"use client";

import { motion } from "framer-motion";
import { Video, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MyVideosPage() {
    // Placeholder para vídeos gerados
    const videos = [];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 font-black text-[10px] uppercase tracking-[0.4em]">
                        <Video size={12} />
                        Personal Collection
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter outfit text-white">Meus Vídeos</h1>
                    <p className="text-white/40 text-sm font-medium">Gerencie e visualize todas as suas criações cinematográficas.</p>
                </div>
            </div>

            {videos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-6 glass rounded-[40px] border-white/5 bg-white/[0.02]">
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-white/20">
                        <Video size={40} />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-white">Nenhum vídeo ainda</h3>
                        <p className="text-white/40 text-sm max-w-xs mx-auto">Você ainda não produziu nenhum vídeo. Vá ao estúdio e comece sua jornada!</p>
                    </div>
                    <Link
                        href="/generator"
                        className="px-8 h-12 bg-white text-black rounded-xl font-black text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-white/5"
                    >
                        <Sparkles size={14} />
                        Ir para o Estúdio
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Futura implementação de galeria */}
                </div>
            )}
        </div>
    );
}
