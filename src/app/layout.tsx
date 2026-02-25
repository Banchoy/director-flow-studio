import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight, Bell, Search } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Agente AI | Command Center",
    description: "Enterprise level AI automation and command center.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="pt-BR" className="h-full">
                <body className={`${inter.variable} ${outfit.variable} antialiased h-full flex`}>
                    <Sidebar />

                    {/* Main Content Area */}
                    <div className="flex-1 ml-72 flex flex-col min-w-0 min-h-screen">
                        {/* Professional Top Header */}
                        <header className="h-20 bg-white border-b border-[#f1f1f4] flex items-center justify-between px-10 sticky top-0 z-40">
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <span className="text-[#a1a1aa] font-black uppercase tracking-[0.2em] text-[10px]">Sistema</span>
                                <ChevronRight size={14} className="text-[#e4e4e7]" />
                                <span className="font-black tracking-tight text-[#18181b] outfit">Dashboard</span>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="hidden lg:flex items-center gap-4 pr-6 border-r border-[#f1f1f4]">
                                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a1a1aa] hover:bg-[#f4f4f5] hover:text-[#18181b] transition-all">
                                        <Search size={20} />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a1a1aa] hover:bg-[#f4f4f5] hover:text-[#18181b] transition-all relative">
                                        <Bell size={20} />
                                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-black rounded-full border-2 border-white"></span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col items-end leading-none">
                                        <span className="text-[11px] font-black outfit">Suporte Admin</span>
                                        <div className="flex items-center gap-1.5 mt-1.5 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                            Conectado
                                        </div>
                                    </div>
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "w-11 h-11 rounded-2xl border-2 border-[#f1f1f4] shadow-sm hover:border-[#18181b] transition-all"
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </header>

                        {/* Content Viewport */}
                        <main className="flex-1 p-10 md:p-14 bg-[#fbfcff]">
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
