import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, MapPin, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const experiences = [
    {
        id: "dramsve",
        company: "Dramsve",
        role: "Full Stack Developer Intern",
        period: "10/2026 – Present",
        location: "Remote",
        badge: "Active Role",
        link: "https://aimersmedia.com",
        highlights: [
            "Designed and developed AimersMedia (social media agency website) as the sole developer, using Next.js for SEO-optimized SSR and GSAP for rich, fluid animations.",
            "Handed over production deployment on Vercel to the client for launch on their own custom domain.",
            "Shipped critical UI revamps and bug fixes on MyTestCart (platform for NEET aspirants outside India).",
            "Currently architecting and developing an end-to-end web portal for a multispeciality hospital from design to deployment."
        ],
        skills: ["Next.js", "GSAP", "React", "Vercel", "Tailwind CSS"],
        stat: "Sole Developer • Next.js & GSAP"
    },
    {
        id: "mendygo",
        company: "Mendygo",
        role: "Frontend Developer Intern",
        period: "11/2025 – 03/2026",
        location: "Remote",
        badge: "Completed",
        link: "https://mendygo.com/",
        highlights: [
            "Built 30+ responsive dashboard screens in React directly from Figma designs, independently owning the frontend UI architecture.",
            "Developed role-based dashboards for HR, Admin, and Intern portals with strong focus on usability, responsiveness, and state handling.",
            "Collaborated closely with backend engineers to integrate dashboards with company-specific workflows.",
            "Maintained strict version control and collaborative workflow via GitHub pull requests and code reviews."
        ],
        skills: ["React", "Figma", "State Architecture", "GitHub", "Responsive UI"],
        stat: "30+ Dashboard Screens Built"
    },
    {
        id: "thesubscription",
        company: "TheSubscription",
        role: "Product & Operations Intern",
        period: "11/2024 – 09/2025",
        location: "Pune, India",
        badge: "Completed",
        link: "https://thesubscription.in/",
        highlights: [
            "Contributed to product planning and authored SRS documentation, defining core features and user flows before launch.",
            "Authored and executed functional test suites and conducted UI validation across user scenarios.",
            "Managed and reviewed live application dashboards to maintain accuracy and operational health.",
            "Represented the product at events and startup competitions, demoing features and collecting user feedback."
        ],
        skills: ["Product Planning", "SRS Docs", "Testing & QA", "Operations"],
        stat: "SRS Documentation & Product QA"
    },
    {
        id: "ecell",
        company: "E-Cell SKNCOE",
        role: "Tech Lead & Sponsorship Member",
        period: "2024 – 2025",
        location: "Pune, India",
        badge: "Leadership",
        link: "https://iicecellskncoe.com/",
        highlights: [
            "Led technical planning, event portal architecture, and sponsorship outreach for Fusion Hackathon (₹2L prize pool, 400+ participants, 120+ teams).",
            "Coordinated with tech startups, sponsors, and industry keynote speakers for E-Conclave.",
            "Maintained event platforms with real-time schedule tracking and team registration workflows."
        ],
        skills: ["Leadership", "Event Web Apps", "Sponsorship Outreach", "Three.js"],
        stat: "₹2L Prize Pool • 400+ Participants"
    }
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState(experiences[0].id);
    const activeExp = experiences.find(exp => exp.id === activeTab) || experiences[0];

    return (
        <section className="relative flex flex-col justify-center min-h-[calc(100vh-5rem)] bg-moxa-white dark:bg-dark-950 transition-colors duration-300 py-8 lg:py-0" id="experience">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-6 flex flex-col items-start border-l-4 border-primary-500 pl-4 max-w-5xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white mb-1 font-display">
                        Experience<span className="text-primary-500">.</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                        Interactive Career Console & Timeline
                    </p>
                </div>

                {/* Interactive Split Console */}
                <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Rail: Company Navigator (4 columns) */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                        {experiences.map((exp) => {
                            const isActive = exp.id === activeTab;
                            return (
                                <button
                                    key={exp.id}
                                    onClick={() => setActiveTab(exp.id)}
                                    className={`relative text-left p-4 rounded-2xl border transition-all duration-200 flex-shrink-0 w-64 lg:w-full flex items-center justify-between ${
                                        isActive
                                            ? 'bg-white dark:bg-dark-900 border-primary-500 shadow-md shadow-primary-500/10'
                                            : 'bg-white/60 dark:bg-dark-900/60 border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-dark-900'
                                    }`}
                                >
                                    {/* Active Highlight Bar */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="exp-active-indicator"
                                            className="absolute left-0 top-3 bottom-3 w-1.5 bg-primary-500 rounded-r-full hidden lg:block"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}

                                    <div className="pr-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-base font-black uppercase tracking-tight font-display ${isActive ? 'text-primary-500' : 'text-neutral-900 dark:text-white'}`}>
                                                {exp.company}
                                            </span>
                                            {exp.badge === 'Active Role' && (
                                                <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-semibold truncate max-w-[190px]">
                                            {exp.role}
                                        </p>
                                        <span className="text-[10px] text-neutral-500 dark:text-neutral-500 font-mono mt-1 block">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ${isActive ? 'text-primary-500 translate-x-1' : 'text-neutral-400 opacity-60'}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Panel: Detail Showcase View (8 columns) */}
                    <div className="lg:col-span-8 bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[420px]">
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeExp.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col h-full justify-between"
                            >
                                <div>
                                    {/* Top Row: Title & Company Link */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-neutral-200 dark:border-neutral-800 mb-5">
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-tight font-display">
                                                {activeExp.role}
                                            </h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-primary-500 font-bold">@</span>
                                                {activeExp.link ? (
                                                    <a 
                                                        href={activeExp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-base sm:text-lg font-bold text-primary-500 hover:underline inline-flex items-center gap-1 group/link"
                                                    >
                                                        <span>{activeExp.company}</span>
                                                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100" />
                                                    </a>
                                                ) : (
                                                    <span className="text-base sm:text-lg font-bold text-primary-500">{activeExp.company}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Date & Location Badges */}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-full text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                                                <Calendar className="w-3 h-3 text-primary-500" />
                                                <span>{activeExp.period}</span>
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-full text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                                                <MapPin className="w-3 h-3 text-primary-500" />
                                                <span>{activeExp.location}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Key Deliverables & Achievements */}
                                    <div className="space-y-3 mb-6">
                                        {activeExp.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                                                    {highlight}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Row: Tech Stack & Impact Badge */}
                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeExp.skills.map(skill => (
                                            <span 
                                                key={skill}
                                                className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-dark-950 border border-neutral-300 dark:border-neutral-800 rounded-lg"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-xl text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 w-fit self-start sm:self-auto flex-shrink-0 font-mono">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>{activeExp.stat}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    );
}
