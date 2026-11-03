import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import WavingPortfolioLanding from '../components/ui/waving-portfolio-landing';
import { useTheme } from '../context/ThemeContext';

// Authentic Brand SVGs
const LeetCodeIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.96 3.825c.346.027.69.027 1.034 0a5.83 5.83 0 0 0 3.167-1.423l4.318-4.148 2.148-2.062a1.38 1.38 0 0 0 0-1.95 1.38 1.38 0 0 0-1.95 0l-2.148 2.062-4.318 4.148a3.1 3.1 0 0 1-1.688.759 3.13 3.13 0 0 1-.55.013 3.17 3.17 0 0 1-2.646-2.04 3.01 3.01 0 0 1-.186-.543 2.94 2.94 0 0 1-.033-1.26 2.8 2.8 0 0 1 .645-1.121l3.854-4.127 5.406-5.788a1.374 1.374 0 0 0-.961-2.31z"
            fill="#FFA116"
        />
        <path
            d="M9.833 13.921a1.38 1.38 0 0 0 0 1.95l1.95 1.95a1.38 1.38 0 1 0 1.95-1.95l-1.95-1.95a1.38 1.38 0 0 0-1.95 0z"
            fill="currentColor"
        />
        <path
            d="M12.986 21.082l9.043-8.685a1.38 1.38 0 1 0-1.905-1.983l-9.043 8.685a1.38 1.38 0 1 0 1.905 1.983z"
            fill="currentColor"
        />
    </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.1v8.37h2.73z" />
    </svg>
);

const ResumeIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
);

const Hero = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="relative w-full overflow-hidden bg-moxa-white dark:bg-dark-950 transition-colors duration-300 flex flex-col">
            {/* Interactive Waving Portfolio Poster Hero */}
            <div className="relative w-full">
                <WavingPortfolioLanding
                    name="ATHARVA"
                    year="2026"
                    roles={["Full Stack Developer", "Creative Engineer"]}
                    title="Atharva Ghuge Portfolio"
                    greeting="Hi, I'm Atharva!"
                    accent="#FF4D00"
                    paper={isDark ? "#090909" : "#F4F4F0"}
                    ink={isDark ? "#F4F4F0" : "#111111"}
                    height="calc(100vh - 5rem)"
                    className="w-full"
                />
            </div>

            {/* Quick Actions Console Bar */}
            <div className="w-full border-y border-neutral-300/80 dark:border-neutral-800/80 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md relative z-20 transition-colors shadow-xs">
                <div className="container mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left: Primary CTAs */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <Link
                            to="/projects"
                            className="group px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold uppercase tracking-wider text-xs hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all rounded-xl flex items-center gap-2 shadow-sm active:scale-95 font-display"
                        >
                            <span>Explore Projects</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        <Link
                            to="/contact"
                            className="px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-dark-950/40 hover:border-neutral-900 dark:hover:border-white text-neutral-800 dark:text-neutral-200 font-bold uppercase tracking-wider text-xs transition-all rounded-xl hover:bg-neutral-100 dark:hover:bg-dark-800 active:scale-95 font-display"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Right: Developer Profiles Hub (Sleek Micro-Pills) */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5 w-full md:w-auto">
                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/Atharva_160905/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-dark-950/50 hover:bg-white dark:hover:bg-dark-800 hover:border-amber-500/60 transition-all text-neutral-800 dark:text-neutral-200 shadow-xs"
                            title="LeetCode Profile (300+ Solved)"
                        >
                            <LeetCodeIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                            <span className="text-xs font-bold font-mono tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                LeetCode
                            </span>
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/25">
                                300+
                            </span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Atharva-160905"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-dark-950/50 hover:bg-white dark:hover:bg-dark-800 hover:border-neutral-500 transition-all text-neutral-800 dark:text-neutral-200 shadow-xs"
                            title="GitHub Profile"
                        >
                            <GitHubIcon className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:text-neutral-950 dark:group-hover:text-white" />
                            <span className="text-xs font-bold font-mono tracking-tight group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                                GitHub
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/atharvaghuge/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-dark-950/50 hover:bg-white dark:hover:bg-dark-800 hover:border-[#0A66C2]/60 transition-all text-neutral-800 dark:text-neutral-200 shadow-xs"
                            title="LinkedIn Profile"
                        >
                            <LinkedInIcon className="w-4 h-4 text-[#0A66C2] dark:text-[#388ee7] transition-transform group-hover:scale-110" />
                            <span className="text-xs font-bold font-mono tracking-tight group-hover:text-[#0A66C2] dark:group-hover:text-[#388ee7] transition-colors">
                                LinkedIn
                            </span>
                        </a>

                        {/* Resume */}
                        <a
                            href="/Atharva_Ghuge.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-primary-500/40 bg-primary-500/10 dark:bg-primary-500/15 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all text-primary-600 dark:text-primary-400 shadow-xs"
                            title="Atharva Ghuge Resume (PDF)"
                        >
                            <ResumeIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                            <span className="text-xs font-bold font-mono tracking-tight">
                                Resume
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
