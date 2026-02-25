"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Settings, Layout, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Estúdio", icon: Layout },
        { href: "/settings", label: "Configurações", icon: Settings },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-center">
            <div className="w-full max-w-6xl glass rounded-full px-6 py-3 flex items-center justify-between border border-white/5 shadow-2xl">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Sparkles size={18} fill="white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter outfit group-hover:gradient-text transition-all">
                        DirectorFlow
                    </span>
                </Link>

                <nav className="flex items-center gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all",
                                    isActive
                                        ? "bg-white/10 text-white border border-white/10 shadow-inner"
                                        : "text-white/40 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <Icon size={14} className={cn(isActive && "text-indigo-400")} />
                                <span className="hidden sm:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                    <div className="ml-2 pl-4 border-l border-white/10 flex items-center h-6">
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-8 h-8 rounded-full border border-white/10"
                                }
                            }}
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}
