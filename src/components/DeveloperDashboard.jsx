import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Terminal, 
    Copy, 
    Check, 
    Clock, 
    MapPin, 
    Layers,
    Activity,
    Code2,
    Trophy
} from 'lucide-react';

export default function DeveloperDashboard() {
    const [time, setTime] = useState('');
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            setTime(`${timeString} IST`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('atharvaghuge16@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    const techStack = [
        { name: "React 19", color: "from-cyan-500/15 to-blue-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30" },
        { name: "Next.js", color: "from-neutral-500/15 to-zinc-500/15 text-neutral-800 dark:text-neutral-200 border-neutral-400/40" },
        { name: "GSAP", color: "from-green-500/15 to-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30" },
        { name: "WebRTC", color: "from-orange-500/15 to-amber-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30" },
        { name: "Supabase", color: "from-teal-500/15 to-emerald-500/15 text-teal-700 dark:text-teal-400 border-teal-500/30" },
        { name: "Gemini API", color: "from-indigo-500/15 to-purple-500/15 text-indigo-700 dark:text-indigo-400 border-indigo-500/30" },
        { name: "Node / MongoDB", color: "from-lime-500/15 to-green-500/15 text-lime-700 dark:text-lime-400 border-lime-500/30" },
        { name: "C++ / DSA", color: "from-blue-500/15 to-indigo-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30" },
    ];

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col gap-3 select-none relative z-20">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/15 to-cyan-500/15 rounded-3xl blur-xl opacity-60 pointer-events-none -z-10" />

            {/* Main Bento Container */}
            <div className="bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-5 sm:p-6 shadow-xl transition-all duration-300">
                
                {/* Header Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                            Available for work
                        </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-primary-500" />
                            <span>Pune, IN</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-primary-500" />
                            <span className="font-mono tabular-nums">{time || '17:30 IST'}</span>
                        </div>
                    </div>
                </div>

                {/* Interactive Code / Config Viewport */}
                <div className="mt-4 rounded-2xl bg-neutral-950 dark:bg-black border border-neutral-800 p-3.5 font-mono text-xs overflow-hidden relative shadow-inner">
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-neutral-800 text-neutral-400 text-[11px]">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                            <span className="ml-2 text-neutral-300 flex items-center gap-1">
                                <Terminal className="w-3 h-3 text-primary-500" />
                                atharva.config.ts
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`px-2 py-0.5 rounded text-[10px] transition-colors ${activeTab === 'profile' ? 'bg-primary-500 text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
                            >
                                profile
                            </button>
                            <button
                                onClick={() => setActiveTab('telemetry')}
                                className={`px-2 py-0.5 rounded text-[10px] transition-colors ${activeTab === 'telemetry' ? 'bg-primary-500 text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
                            >
                                telemetry
                            </button>
                        </div>
                    </div>

                    {activeTab === 'profile' ? (
                        <div className="text-neutral-300 leading-relaxed font-mono text-[11px]">
                            <p><span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;</p>
                            <p className="pl-3.5"><span className="text-neutral-400">name:</span> <span className="text-emerald-400">"Atharva Ghuge"</span>,</p>
                            <p className="pl-3.5"><span className="text-neutral-400">role:</span> <span className="text-emerald-400">"Full-Stack Dev Intern @ Dramsve"</span>,</p>
                            <p className="pl-3.5"><span className="text-neutral-400">stack:</span> [<span className="text-cyan-300">"React 19"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"GSAP"</span>],</p>
                            <p className="pl-3.5"><span className="text-neutral-400">dsaPractice:</span> <span className="text-amber-300">"300+ LeetCode Solved"</span></p>
                            <p>&#125;;</p>
                        </div>
                    ) : (
                        <div className="text-neutral-300 leading-relaxed font-mono text-[11px] space-y-1">
                            <p className="text-emerald-400 flex items-center gap-1.5">
                                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                                Telemetry: ACTIVE & READY
                            </p>
                            <p className="pl-3.5 text-neutral-400">Latest Project: <span className="text-primary-400">AimersMedia & MedLink</span></p>
                            <p className="pl-3.5 text-neutral-400">Payments: <span className="text-emerald-400">Razorpay Integrated</span></p>
                            <p className="pl-3.5 text-neutral-400">Network: <span className="text-cyan-400">WebRTC DataChannels Ready</span></p>
                        </div>
                    )}
                </div>

                {/* Tech Arsenal Chips */}
                <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-primary-500" />
                            Core Stack in Rotation
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className={`px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-lg border bg-gradient-to-r ${tech.color} cursor-default`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Metrics & Copy Email Bar */}
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 gap-3 items-center">
                    <div className="bg-neutral-100 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-xl p-2.5 flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-primary-500/10 text-primary-500">
                            <Trophy className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="text-sm font-black text-neutral-900 dark:text-white leading-none font-display">
                                300+
                            </div>
                            <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mt-0.5">
                                LeetCode Solved
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCopyEmail}
                        className={`w-full h-full min-h-[42px] px-3 py-2 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
                            copied
                                ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                                : 'bg-moxa-black text-white dark:bg-white dark:text-moxa-black border-transparent hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white shadow-sm'
                        }`}
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Email</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
