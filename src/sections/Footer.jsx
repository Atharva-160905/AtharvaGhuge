import React from 'react';
import { CrowdCanvas } from '../components/ui/skiper39';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-neutral-300/80 dark:border-neutral-800 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md overflow-hidden select-none">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary-500/5 blur-3xl pointer-events-none" />

            {/* Upper Content Section (Completely Separated from the Walking Stage) */}
            <div className="container mx-auto px-4 sm:px-6 pt-10 pb-6 relative z-10 flex flex-col items-center justify-center text-center">
                {/* Brand & Subtitle */}
                <div className="flex flex-col items-center gap-1.5 mb-5">
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white font-display">
                        Atharva<span className="text-primary-500">.</span>
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                        Full-Stack Developer & Creative Engineer • Pune, India
                    </p>
                </div>

                {/* Quick Link Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                    <a
                        href="/Atharva_Ghuge.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl border border-primary-500/40 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-mono font-bold hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all flex items-center gap-1 shadow-xs"
                    >
                        <span>Resume (PDF)</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                        href="https://leetcode.com/u/Atharva_160905/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-dark-950 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all flex items-center gap-1.5 shadow-xs"
                    >
                        <span>LeetCode</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                            300+
                        </span>
                    </a>
                    <a
                        href="https://github.com/Atharva-160905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-dark-950 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold hover:border-neutral-900 dark:hover:border-white transition-all shadow-xs"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/atharvaghuge/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-dark-950 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all shadow-xs"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Dedicated Crowd Walking Stage (Own Lane — No Text Overlap) */}
            <div className="relative w-full h-32 sm:h-36 overflow-hidden border-t border-neutral-200/70 dark:border-neutral-800/70 bg-gradient-to-b from-transparent via-neutral-100/30 to-neutral-200/20 dark:via-dark-950/20 dark:to-dark-950/50">
                <CrowdCanvas
                    src="/images/openpeeps.png"
                    rows={15}
                    cols={7}
                    peepScale={0.38}
                    className="absolute inset-0 w-full h-full pointer-events-none dark:invert opacity-80 dark:opacity-75"
                />
            </div>

            {/* Bottom Clean Copyright Strip */}
            <div className="w-full py-3 bg-neutral-100/90 dark:bg-dark-950/90 border-t border-neutral-200/80 dark:border-neutral-800/80 text-center relative z-20">
                <p className="text-neutral-500 dark:text-neutral-400 text-xs font-mono">
                    © {new Date().getFullYear()} Atharva Ghuge. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
