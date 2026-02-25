"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    AreaChart,
    Area
} from "recharts";
import { BrainCircuit, Zap } from "lucide-react";

interface UsageChartsProps {
    deepseekTokens?: number;
    leonardoCredits?: number;
}

const dataDeepSeek = [
    { name: "Seg", tokens: 1200 },
    { name: "Ter", tokens: 2100 },
    { name: "Qua", tokens: 800 },
    { name: "Qui", tokens: 1600 },
    { name: "Sex", tokens: 3400 },
    { name: "Sáb", tokens: 1200 },
    { name: "Dom", tokens: 900 },
];

const dataLeonardo = [
    { name: "Seg", credits: 15 },
    { name: "Ter", credits: 45 },
    { name: "Qua", credits: 20 },
    { name: "Qui", credits: 60 },
    { name: "Sex", credits: 85 },
    { name: "Sáb", credits: 30 },
    { name: "Dom", credits: 10 },
];

export function UsageCharts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DeepSeek Tokens Chart */}
            <div className="stat-card bg-slate-900/40 border-white/5 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400">
                            <BrainCircuit size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black font-heading text-white italic">DeepSeek V3</h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Tokens Consumidos</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-white outfit">12.4k</span>
                        <p className="text-[9px] text-slate-600 font-black uppercase tracking-tighter">Budget: 5M Grátis</p>
                    </div>
                </div>

                <div className="h-[200px] w-full mt-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dataDeepSeek}>
                            <defs>
                                <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                                dy={10}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                                itemStyle={{ color: '#a855f7', fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="tokens"
                                stroke="#a855f7"
                                fillOpacity={1}
                                fill="url(#colorTokens)"
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Leonardo.ai Credits Chart */}
            <div className="stat-card bg-slate-900/40 border-white/5 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black font-heading text-white italic">Leonardo.ai</h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Créditos Restantes</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-white outfit">112</span>
                        <p className="text-[9px] text-slate-600 font-black uppercase tracking-tighter">Budget: 150/dia</p>
                    </div>
                </div>

                <div className="h-[200px] w-full mt-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dataLeonardo}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                                dy={10}
                            />
                            <Tooltip
                                cursor={{ fill: '#ffffff05' }}
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                                itemStyle={{ color: '#3b82f6', fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                            />
                            <Bar dataKey="credits" radius={[6, 6, 0, 0]}>
                                {dataLeonardo.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 4 ? '#3b82f6' : '#3b82f630'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
