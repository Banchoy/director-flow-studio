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
    Sparkles,
    ChevronRight
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
    ];

    return (
        <aside className="w-72 h-screen fixed left-0 top-0 bg-white border-r border-[#f1f1f4] flex flex-col z-50">
            {/* Logo Section */}
            <div className="p-8 pb-12">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#18181b] rounded-xl flex items-center justify-center text-white shadow-xl shadow-black/10 group-hover:scale-105 transition-all duration-500">
                        <Sparkles size={20} fill="white" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-black tracking-tight outfit">
                            Agente AI
                        </span>
                        <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#a1a1aa] mt-0.5">Studio IA</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                <div className="px-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a1a1aa]">Navegação</span>
                </div>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "sidebar-item",
                                isActive && "active"
                            )}
                        >
                            <Icon size={18} />
                            {item.label}
                            {isActive && (
                                <ChevronRight size={14} className="ml-auto opacity-40" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 mt-auto border-t border-[#f1f1f4]">
                <Link
                    href="/settings"
                    className={cn(
                        "sidebar-item",
                        pathname === "/settings" && "active"
                    )}
                >
                    <Settings size={18} />
                    Configurações
                </Link>
            </div>
        </aside>
    );
}
