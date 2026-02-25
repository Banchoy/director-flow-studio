"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Box,
    Zap,
    Users,
    FileText,
    Settings,
    Sparkles,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { href: "/", label: "Dashboard", icon: LayoutDashboard },
        { href: "/agentes", label: "Agentes", icon: Box },
        { href: "/fluxos", label: "Fluxos", icon: Zap },
        { href: "/usuarios", label: "Usuários", icon: Users },
        { href: "/logs", label: "Logs de Auditoria", icon: FileText },
    ];

    return (
        <aside className="w-72 h-screen fixed left-0 top-0 bg-sidebar dark:bg-slate-900 border-r border-sidebar-border flex flex-col z-50">
            {/* Logo Section */}
            <div className="flex h-20 items-center px-8 border-b border-sidebar-border">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mr-3">
                    <Zap size={22} className="fill-blue-100/30" />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-xl font-bold tracking-tight outfit font-heading">
                        DirectorFlow
                    </span>
                    <span className="text-[10px] font-medium text-blue-500 uppercase tracking-widest mt-0.5">Studio IA</span>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 flex flex-col gap-2 p-6 overflow-y-auto">
                <div className="px-2 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    Menu Principal
                </div>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant={isActive ? "default" : "ghost"}
                                className={cn(
                                    "w-full justify-start font-medium transition-all duration-200",
                                    isActive ? "shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-500" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                            >
                                <Icon size={20} className={cn("mr-3", isActive ? "text-white" : "text-blue-500/70")} />
                                {item.label}
                                {isActive && (
                                    <ChevronRight size={14} className="ml-auto opacity-50" />
                                )}
                            </Button>
                        </Link>
                    );
                })}

                <div className="mt-auto pt-6 border-t border-sidebar-border">
                    <div className="bg-blue-600/10 rounded-2xl p-4 mb-4 border border-blue-500/20">
                        <p className="text-xs font-bold text-blue-400 mb-2 flex items-center">
                            <Sparkles size={12} className="mr-1.5" /> IA Engine Status
                        </p>
                        <div className="h-1.5 w-full bg-blue-500/10 rounded-full mb-2">
                            <div className="h-1.5 w-[85%] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                        </div>
                        <p className="text-[10px] text-blue-400/80 font-medium">Capacidade: 85% Operacional</p>
                    </div>

                    <Link href="/settings">
                        <Button
                            variant={pathname === "/settings" ? "default" : "ghost"}
                            className={cn(
                                "w-full justify-start font-medium",
                                pathname === "/settings" ? "bg-blue-600" : "text-muted-foreground hover:bg-accent/50"
                            )}
                        >
                            <Settings size={20} className="mr-3 text-blue-500/70" />
                            Configurações
                        </Button>
                    </Link>
                </div>
            </nav>
        </aside>
    );
}
