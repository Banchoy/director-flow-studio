"use client";

import { Box, Film, ImageIcon, PlayCircle } from "lucide-react";

export function PreviewConsole() {
    return (
        <div className="stat-card bg-slate-950 border-white/5 border-dashed border-2 relative overflow-hidden group min-h-[400px] flex flex-col justify-center items-center text-center p-12">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="relative space-y-8 max-w-sm">
                <div className="flex justify-center -space-x-4">
                    <div className="w-16 h-16 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-700 shadow-2xl transform rotate-[-12deg] group-hover:rotate-0 transition-transform duration-500">
                        <ImageIcon size={32} />
                    </div>
                    <div className="w-20 h-20 rounded-[2rem] bg-blue-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-2xl z-10 scale-110 group-hover:scale-125 transition-transform duration-500">
                        <PlayCircle size={40} />
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-700 shadow-2xl transform rotate-[12deg] group-hover:rotate-0 transition-transform duration-500">
                        <Film size={32} />
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-black font-heading tracking-tight text-white uppercase italic">Aguardando Direção</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Insira seu briefing à esquerda e clique em gerar para visualizar o storyboard e a produção em tempo real.</p>
                </div>

                <div className="flex items-center gap-4 justify-center pt-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Roteiro</span>
                    </div>
                    <div className="w-12 h-px bg-slate-800"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Frames</span>
                    </div>
                    <div className="w-12 h-px bg-slate-800"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Vídeo</span>
                    </div>
                </div>
            </div>

            {/* Scanning Effect Overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-scan"></div>
        </div>
    );
}

// Estilo de animação customizado para o scan
const scanStyle = document.createElement('style');
scanStyle.textContent = `
  @keyframes scan {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(400px); opacity: 0; }
  }
  .animate-scan {
    animation: scan 3s linear infinite;
  }
`;
if (typeof document !== 'undefined') document.head.appendChild(scanStyle);
