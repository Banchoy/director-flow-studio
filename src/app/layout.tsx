import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Agente AI | Painel de Controle",
    description: "Gerencie seus agentes de IA e produções cinematográficas em um só lugar.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="pt-BR" className="h-full">
                <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#f8f9fa] text-[#1a1a1b] h-full flex`}>
                    <Sidebar />

                    <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                        <header className="h-16 flex-none border-b border-border bg-white flex items-center justify-between px-8">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <span>Agente AI</span>
                                <ChevronRight size={14} />
                                <span className="text-foreground font-bold tracking-tight">Dashboard</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="hidden md:flex flex-col items-end leading-tight mr-2">
                                    <span className="text-xs font-bold">Admin</span>
                                    <span className="text-[10px] text-muted-foreground font-black tracking-widest uppercase">Premium Plan</span>
                                </div>
                                <UserButton appearance={{ elements: { avatarBox: "w-8 h-8 rounded-full border border-border shadow-sm" } }} />
                            </div>
                        </header>

                        <main className="flex-1 overflow-y-auto w-full p-8 md:p-12">
                            <div className="max-w-7xl mx-auto w-full">
                                {children}
                            </div>
                        </main>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
