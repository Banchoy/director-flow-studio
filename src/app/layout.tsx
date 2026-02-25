import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Settings, Home } from "lucide-react";

import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "DirectorFlow Studio | AI Cinema & Anime Production",
    description: "Transforme roteiros em obras de arte cinematográficas usando inteligência artificial de ponta (DeepSeek, Leonardo, Luma).",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="pt-BR">
                <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#030303] text-white min-h-screen flex flex-col selection:bg-indigo-500/30`}>
                    <Navbar />

                    <main className="flex-1 flex flex-col pt-24">
                        {children}
                    </main>

                    <footer className="py-12 text-center space-y-4 border-t border-white/5 bg-black/20">
                        <div className="flex items-center justify-center gap-6 text-white/20 uppercase font-black text-[10px] tracking-[0.4em]">
                            <span>DeepSeek V3</span>
                            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                            <span>Leonardo.ai</span>
                            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                            <span>Luma Dream Machine</span>
                        </div>
                        <p className="text-[10px] text-white/10 font-bold uppercase tracking-widest">
                            © 2026 DirectorFlow Studio. Todos os direitos reservados.
                        </p>
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}
