import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight, Bell, Search } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

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
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: { colorPrimary: '#3b82f6' }
            }}
        >
            <html lang="pt-BR" suppressHydrationWarning>
                <body className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground h-full flex`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem={false}
                        storageKey="studio-theme"
                    >
                        <Sidebar />

                        {/* Main Content Area */}
                        <div className="flex-1 ml-72 flex flex-col min-w-0 min-h-screen">
                            {/* Professional Top Header */}
                            <header className="h-20 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-10 sticky top-0 z-40">
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <span className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px]">Sistema</span>
                                    <ChevronRight size={14} className="text-border" />
                                    <span className="font-black tracking-tight text-foreground outfit">Dashboard</span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="hidden lg:flex items-center gap-4 pr-6 border-r border-border">
                                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-all">
                                            <Search size={20} />
                                        </button>
                                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-all relative">
                                            <Bell size={20} />
                                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
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
                                                    avatarBox: "w-11 h-11 rounded-2xl border-2 border-border shadow-sm hover:border-primary transition-all"
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </header>

                            {/* Content Viewport */}
                            <main className="flex-1 p-10 md:p-14">
                                <div className="max-w-7xl mx-auto w-full">
                                    {children}
                                </div>
                            </main>
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
