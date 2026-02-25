"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, Terminal, Play, ArrowRight, Zap, Layers, Cpu } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* HERO SECTION */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                {/* Background Decorativo */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-purple-600/10 blur-[180px] rounded-full -z-10 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rose-500/10 blur-[120px] rounded-full -z-10"></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl w-full text-center space-y-10"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-purple-500/20 text-[11px] font-black tracking-[0.4em] text-purple-400 uppercase">
                        <Zap size={14} className="animate-pulse" />
                        Next-Gen Animation Forge
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black tracking-tighter outfit leading-[0.85]">
                        Deixe a IA <br />
                        <span className="gradient-text italic">Dirigir.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                        Transforme prompts em animes cinematográficos com a orquestração de
                        elite entre DeepSeek, Leonardo e Luma.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link
                            href="/generator"
                            className="w-full sm:w-auto px-10 h-16 bg-white text-black rounded-2xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group shadow-2xl shadow-white/10"
                        >
                            <Play fill="black" size={18} />
                            INICIAR PRODUÇÃO
                        </Link>
                        <Link
                            href="#concept"
                            className="w-full sm:w-auto px-10 h-16 glass rounded-2xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-white/5 active:scale-95 text-white/60 hover:text-white"
                        >
                            VER CONCEITO
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Grid Visual Animado (Simulação de Timeline) */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute -bottom-20 w-full max-w-7xl h-64 border-x border-t border-white/5 rounded-t-[100px] overflow-hidden -z-10"
                >
                    <div className="w-full h-full bg-gradient-to-b from-white/5 to-transparent flex items-end justify-center pb-12 gap-10">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="w-40 h-56 bg-white/5 rounded-2xl border border-white/5 animate-float" style={{ animationDelay: `${i * 0.5}s` }}></div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CONCEPT SECTION: Prompt to Anime */}
            <section id="concept" className="w-full max-w-7xl py-40 px-6 space-y-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"></div>
                        <h2 className="text-5xl font-black tracking-tight outfit leading-tight text-white">
                            Do Roteiro <br /> ao Frame Final.
                        </h2>
                        <p className="text-xl text-white/40 leading-relaxed max-w-md">
                            Nossa tecnologia orquestra múltiplos modelos de IA para garantir consistência visual e drama cinematográfico.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: Cpu, title: "DeepSeek V3", desc: "Arquitetando o roteiro e diálogos." },
                                { icon: Layers, title: "Leonardo Kinematic", desc: "Gerando a arte base de alta definição." },
                                { icon: Zap, title: "Luma Dream Machine", desc: "Animação de 120 FPS para motion fluido." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <step.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{step.title}</h4>
                                        <p className="text-[10px] text-white/20 uppercase font-black tracking-widest">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[600px] w-full editing-panel p-4 shadow-3xl overflow-hidden"
                    >
                        {/* Simulação de Preview IA */}
                        <div className="w-full h-full bg-black/40 rounded-2xl flex flex-col items-center justify-center relative">
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"
                            ></motion.div>
                            <Terminal className="text-white/10 mb-4" size={48} />
                            <span className="text-[10px] text-white/20 font-black tracking-[0.5em] uppercase">IA Processing Engine</span>

                            {/* Overlay de Edição */}
                            <div className="absolute bottom-6 left-6 right-6 h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
