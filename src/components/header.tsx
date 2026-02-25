"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Sparkles,
    Settings,
    Video,
    Layout,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home", icon: Layout },
        { href: "/generator", label: "Gerador", icon: Sparkles },
        { href: "/my-videos", label: "Meus Vídeos", icon: Video },
        { href: "/settings", label: "Configurações", icon: Settings },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
            <div className="w-full max-w-7xl glass rounded-2xl px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl overflow-hidden relative">
                {/* Efeito Glow no Logo */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-12 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-rose-500 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Sparkles size={22} fill="white" className="animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter outfit leading-none text-white">
                            DirectorFlow
                        </span>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30 text-white">Studio IA</span>
                    </div>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = (pathname === item.href) || (item.href === "/generator" && pathname === "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-2 transition-all relative group",
                                    isActive
                                        ? "text-white"
                                        : "text-white/40 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-rose-500/10 rounded-lg -z-10 border border-purple-500/20 shadow-lg shadow-purple-500/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon size={14} className={cn("transition-colors", isActive ? "text-purple-400" : "group-hover:text-purple-300")} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10">
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-9 h-9 rounded-xl border border-white/10 shadow-lg hover:border-purple-500/50 transition-colors"
                                }
                            }}
                        />
                    </div>

                    {/* Botão Mobile */}
                    <button
                        className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile AnimatePresence */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-6 right-6 lg:hidden glass rounded-3xl p-6 border-white/5 shadow-3xl z-40 space-y-4"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 active:scale-[0.98] transition-all"
                            >
                                <item.icon size={20} className="text-purple-400" />
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
