"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Box,
    Zap,
    MessageSquare,
    Users,
    FileText,
    Settings,
    LogOut,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { href: "/", label: "Dashboard", icon: LayoutDashboard },
        { href: "/agentes", label: "Agentes", icon: Box },
        { href: "/fluxos", label: "Fluxos", icon: Zap },
        { href: "/whatsapp", label: "WhatsApp", icon: MessageSquare },
        { href: "/usuarios", label: "Usuários", icon: Users },
        { href: "/logs", label: "Logs de Auditoria", icon: FileText },
        { href: "/settings", label: "Configurações", icon: Settings },
    ];

    return (
        <aside className="w-64 flex-none border-r border-border bg-white flex flex-col h-full sticky top-0 overflow-y-auto">
            <div className="p-6">
                <Link href="/" className="flex items-center gap-2 group mb-8">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Sparkles size={18} fill="white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter outfit">
                        Agente AI
                    </span>
                </Link>

                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                                    isActive
                                        ? "bg-black text-white"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <Icon size={18} className={cn("", isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground")} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-border">
                <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full transition-all group">
                    <LogOut size={18} />
                    Sair
                </button>
            </div>
        </aside>
    );
}
