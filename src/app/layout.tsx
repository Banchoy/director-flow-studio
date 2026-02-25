import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Settings, Home } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "DirectorFlow Studio | AI Cinema & Anime",
    description: "Crie vídeos e animes cinematográficos com IA.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="pt-BR">
                <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#0a0a0a] text-white min-h-screen flex flex-col`}>
                    <header className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold gradient-text tracking-tighter">
                            DirectorFlow <span className="text-sm font-medium opacity-80 text-white">STUDIO</span>
                        </Link>

                        <nav className="flex items-center gap-6">
                            <Link href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <Home size={18} />
                                <span className="hidden sm:inline">Painel</span>
                            </Link>
                            <Link href="/settings" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <Settings size={18} />
                                <span className="hidden sm:inline">Configurações</span>
                            </Link>
                            <div className="ml-2 pl-4 border-l border-white/10">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </nav>
                    </header>

                    <main className="flex-1 flex flex-col">
                        {children}
                    </main>

                    <footer className="py-6 text-center text-sm text-white/40 border-t border-white/5">
                        © 2026 DirectorFlow Studio. Powered by DeepSeek & Leonardo.ai
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}
