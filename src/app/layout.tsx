import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "DirectorFlow Studio | Prompt to Anime",
    description: "A ferramenta definitiva para criar animes e vídeos cinematográficos com IA.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="pt-BR" className="scroll-smooth">
                <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#0a0a0a] text-white min-h-screen flex flex-col selection:bg-purple-500/30`}>
                    <Header />

                    <main className="flex-1">
                        {children}
                    </main>

                    <footer className="py-12 px-6 border-t border-white/5 bg-black/50">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                            <div className="flex flex-col gap-2">
                                <span className="text-xl font-black tracking-tighter outfit gradient-text">DirectorFlow</span>
                                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Next-Gen Animation Studio</p>
                            </div>

                            <div className="flex items-center gap-8 sm:gap-12 text-white/20 uppercase font-black text-[10px] tracking-[0.4em]">
                                <span className="hover:text-purple-400 transition-colors cursor-default">DeepSeek</span>
                                <span className="hover:text-purple-400 transition-colors cursor-default">Leonardo</span>
                                <span className="hover:text-purple-400 transition-colors cursor-default">Luma AI</span>
                            </div>

                            <p className="text-[10px] text-white/10 font-bold uppercase tracking-widest leading-relaxed">
                                © 2026 DirectorFlow Studio. Built for creators.
                            </p>
                        </div>
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}
