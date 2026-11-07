import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ExternalLink, 
    ArrowUpRight, 
    ChevronLeft, 
    ChevronRight, 
    LayoutGrid, 
    Monitor, 
    CheckCircle2, 
    Lock, 
    CreditCard, 
    Database, 
    Server, 
    ShieldCheck, 
    Zap 
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

// Authentic GitHub SVG
const GitHubIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const projects = [
    {
        id: "medlink",
        num: "01",
        title: "MedLink",
        shortTitle: "MedLink",
        badge: "Smart India Hackathon • AI Healthcare",
        category: "AI & Healthcare",
        urlDisplay: "medlink-2026.vercel.app",
        status: "Production Live",
        description: "A secure medical exchange and intelligence platform built for Smart India Hackathon. Enables patients to upload health documents, leveraging OCR text extraction and Google Gemini API to generate patient-friendly clinical summaries.",
        highlights: [
            "OCR document processing with Gemini API clinical analysis",
            "End-to-end encrypted health record storage on Supabase",
            "Role-based portals for patients, clinicians, and emergency triage"
        ],
        tags: ["Supabase", "React 19", "Gemini API", "OCR", "Antigravity"],
        github: "https://github.com/Atharva-160905/Medlink-2026",
        demo: "https://medlink-2026.vercel.app/",
        image: "/images/MedLink AI Healthcare Showcase.png"
    },
    {
        id: "sundrip",
        num: "02",
        title: "SunDrip E-Commerce",
        shortTitle: "SunDrip Store",
        badge: "MERN Stack • Live Payments",
        category: "Full-Stack Architecture",
        urlDisplay: "sun-drip.vercel.app",
        status: "Production Live",
        description: "A full-stack e-commerce platform featuring secure authentication, shopping cart workflows, dynamic customer catalog, and an Admin inventory dashboard with Razorpay payment processing.",
        highlights: [
            "Complete checkout pipeline with live Razorpay payment processing",
            "Role-based Admin console for real-time inventory and catalog control",
            "Secure JWT session authentication with MongoDB Atlas persistence"
        ],
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
        github: "https://github.com/Atharva-160905/SunDrip",
        demo: "https://sun-drip.vercel.app/",
        image: "/images/SunDrip E-Commerce Laptop Mockup.png"
    },
    {
        id: "aimersmedia",
        num: "03",
        title: "AimersMedia Agency",
        shortTitle: "AimersMedia",
        badge: "Dramsve • Production Client Site",
        category: "Creative Frontend & SSR",
        urlDisplay: "aimers-media.vercel.app",
        status: "Client Production",
        description: "The official agency platform for AimersMedia engineered as sole developer during internship at Dramsve. Built with Next.js App Router for SEO-optimized server-side rendering and GSAP animations for fluid interactions.",
        highlights: [
            "Engineered complete UI & animations as sole developer at Dramsve",
            "SEO-optimized Server-Side Rendering (SSR) via Next.js App Router",
            "High-framerate GSAP motion design and responsive custom typography"
        ],
        tags: ["Next.js", "GSAP", "React", "Tailwind CSS", "Vercel"],
        github: "https://github.com/Atharva-160905",
        demo: "https://aimers-media.vercel.app/",
        image: "/images/Aimers Media Laptop Showcase.png"
    },
    {
        id: "robotic-joint-care",
        num: "04",
        title: "Robotic Joint Care Institute",
        shortTitle: "Dr. Kasliwal Institute",
        badge: "Dr. Kasliwal • Hospital Platform",
        category: "Healthcare & Enterprise",
        urlDisplay: "dr-kasliwal.vercel.app",
        status: "Production Live",
        description: "End-to-end web platform designed and architected for Dr. Kasliwal's Robotic Joint Care Institute, a multispeciality orthopedic hospital. Features treatment discovery, patient appointment scheduling, robotic surgery showcase, and consultation workflows.",
        highlights: [
            "End-to-end hospital web architecture from design to full-stack development",
            "Patient appointment booking and interactive surgical procedure walkthroughs",
            "Optimized clinical accessibility, fast load times, and mobile responsive layouts"
        ],
        tags: ["Next.js", "React", "Tailwind CSS", "UI/UX Architecture", "Vercel"],
        github: "https://github.com/Atharva-160905",
        demo: "https://dr-kasliwal.vercel.app/",
        image: "/images/Robotic Joint Care Institute Website Mockup.png"
    },
    {
        id: "webrtc",
        num: "05",
        title: "WebRTC File Sharing",
        shortTitle: "WebRTC P2P",
        badge: "Real-Time P2P Protocol",
        category: "Networks & Protocol",
        urlDisplay: "web-rtc-rose.vercel.app",
        status: "Serverless P2P",
        description: "A serverless peer-to-peer file transfer web application built with WebRTC DataChannels. Delivers high-speed, direct browser-to-browser encrypted transfers without intermediate cloud storage.",
        highlights: [
            "Direct browser-to-browser P2P DataChannel connection",
            "Zero intermediate cloud storage — completely private & encrypted",
            "Real-time transfer progress, chunking, and hash validation"
        ],
        tags: ["JavaScript", "WebRTC", "PeerJS", "Real-Time", "P2P"],
        github: "https://github.com/Atharva-160905/WebRtc",
        demo: "https://web-rtc-rose.vercel.app/",
        image: "/images/WebRtc.png"
    },
    {
        id: "ecell",
        num: "06",
        title: "E-Cell SKNCOE Platforms",
        shortTitle: "E-Cell 3D Web",
        badge: "Interactive 3D Web • E-Cell",
        category: "Creative Frontend & 3D",
        urlDisplay: "iicecellskncoe.com",
        status: "High Traffic Event",
        description: "Interactive and responsive event websites for E-Conclave & Fusion Hackathon built using React and Three.js, featuring 3D visual elements and high-traffic event schedule tracking.",
        highlights: [
            "Interactive Three.js 3D visual canvas and fluid animations",
            "Powered Fusion Hackathon serving 400+ participants with ₹2L prizes",
            "Dynamic registration flows, speaker lineups, and live agendas"
        ],
        tags: ["React", "Three.js", "Tailwind CSS", "JavaScript", "GSAP"],
        github: "https://github.com/Vedant159357/Ecell-2026",
        demo: "https://iicecellskncoe.com/",
        image: "/images/E-Cell SKNCOE Web Showcase.png"
    }
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' | 'grid'

    const activeProject = projects[activeIndex];

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="py-8 md:py-12 relative bg-moxa-white dark:bg-dark-950 transition-colors duration-300 min-h-[calc(100vh-5rem)] flex flex-col justify-center" id="projects">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
                
                {/* Header & View Switcher */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
                    <div className="flex flex-col items-start border-l-4 border-primary-500 pl-4">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-1 font-display">
                            Projects<span className="text-primary-500">.</span>
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Production Applications & Real-Time Systems
                        </p>
                    </div>

                    {/* View Switcher Toggle */}
                    <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-xl shadow-xs self-start sm:self-auto">
                        <button
                            onClick={() => setViewMode('spotlight')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                viewMode === 'spotlight'
                                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                        >
                            <Monitor className="w-3.5 h-3.5" />
                            <span>Spotlight</span>
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                viewMode === 'grid'
                                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                        >
                            <LayoutGrid className="w-3.5 h-3.5" />
                            <span>Grid (6)</span>
                        </button>
                    </div>
                </div>

                {/* SPOTLIGHT STUDIO VIEW */}
                {viewMode === 'spotlight' && (
                    <div className="flex flex-col gap-5">
                        {/* Project Navigation Tabs */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                            {projects.map((proj, idx) => {
                                const isCurrent = idx === activeIndex;
                                return (
                                    <button
                                        key={proj.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all text-left relative overflow-hidden ${
                                            isCurrent
                                                ? 'bg-white dark:bg-dark-900 border-primary-500 shadow-md ring-2 ring-primary-500/20'
                                                : 'bg-white/60 dark:bg-dark-900/60 border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 opacity-80 hover:opacity-100'
                                        }`}
                                    >
                                        <div className="flex flex-col">
                                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isCurrent ? 'text-primary-500' : 'text-neutral-400'}`}>
                                                0{idx + 1} // {proj.category.split(' ')[0]}
                                            </span>
                                            <span className="text-xs sm:text-sm font-black uppercase tracking-tight text-neutral-900 dark:text-white font-display truncate">
                                                {proj.shortTitle}
                                            </span>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Interactive Main Stage */}
                        <div className="bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-5 sm:p-7 shadow-xl overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.25 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
                                >
                                    {/* Left: Project Dossier (5 cols) */}
                                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                                        <div>
                                            {/* Top Metadata */}
                                            <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                                <span className="px-2.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-[10px]">
                                                    {activeProject.badge}
                                                </span>
                                                <span className="text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400">
                                                    PROJECT {activeProject.num} OF 06
                                                </span>
                                            </div>

                                            {/* Project Title */}
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display mb-2.5">
                                                {activeProject.title}
                                            </h2>

                                            {/* Project Description */}
                                            <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                                                {activeProject.description}
                                            </p>

                                            {/* Feature Highlights */}
                                            <div className="space-y-2 mb-4 bg-neutral-50 dark:bg-dark-950 p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                                                    Engineering Highlights
                                                </span>
                                                {activeProject.highlights.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0" />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack Chips */}
                                            <div className="flex flex-wrap gap-1.5 mb-5">
                                                {activeProject.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-white dark:bg-dark-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-tight text-neutral-800 dark:text-neutral-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons & Quick Nav */}
                                        <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3 flex-wrap">
                                            <div className="flex items-center gap-2.5">
                                                {activeProject.demo && (
                                                    <a
                                                        href={activeProject.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold uppercase tracking-wider text-xs hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 font-display"
                                                    >
                                                        <span>Live Demo</span>
                                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                                    </a>
                                                )}

                                                <a
                                                    href={activeProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white font-bold uppercase tracking-wider text-xs transition-all rounded-xl flex items-center gap-1.5 bg-neutral-50 dark:bg-dark-950 shadow-xs active:scale-95 font-display"
                                                >
                                                    <GitHubIcon className="w-3.5 h-3.5" />
                                                    <span>Repository</span>
                                                </a>
                                            </div>

                                            {/* Prev / Next arrows */}
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={prevProject}
                                                    className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-dark-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                                                    aria-label="Previous Project"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={nextProject}
                                                    className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-dark-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                                                    aria-label="Next Project"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Realistic Browser / Studio Frame (7 cols) */}
                                    <div className="lg:col-span-7">
                                        <div className="w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-dark-950 overflow-hidden shadow-2xl">
                                            {/* Browser Window Chrome */}
                                            <div className="px-4 py-2.5 bg-neutral-200/80 dark:bg-dark-800/80 border-b border-neutral-300 dark:border-neutral-700/80 flex items-center justify-between gap-3">
                                                {/* Window Dots */}
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                                                    <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                                                    <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                                                </div>

                                                {/* URL Address Bar */}
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/80 dark:bg-dark-900/80 border border-neutral-300/80 dark:border-neutral-700 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 max-w-xs w-full justify-center truncate">
                                                    <Lock className="w-3 h-3 text-emerald-500" />
                                                    <span>https://{activeProject.urlDisplay}</span>
                                                </div>

                                                {/* Status Tag */}
                                                <span className="text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                                    {activeProject.status}
                                                </span>
                                            </div>

                                            {/* Browser Viewport Content */}
                                            <div className="relative min-h-[290px] sm:min-h-0 aspect-auto sm:aspect-[16/10] bg-neutral-50 dark:bg-dark-950 overflow-hidden flex items-center justify-center p-3 sm:p-5">
                                                {activeProject.image ? (
                                                    <div className="group relative w-full h-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-dark-900 flex items-center justify-center min-h-[220px] sm:min-h-0">
                                                        <img
                                                            src={activeProject.image}
                                                            alt={activeProject.title}
                                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                                                        />
                                                        {activeProject.demo && (
                                                            <a
                                                                href={activeProject.demo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs"
                                                            >
                                                                <span className="px-4 py-2 rounded-xl bg-white text-neutral-950 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform font-display">
                                                                    <span>Open Live Platform</span>
                                                                    <ArrowUpRight className="w-4 h-4" />
                                                                </span>
                                                            </a>
                                                        )}
                                                    </div>
                                                ) : (
                                                    /* High-Tech Custom Architecture Showcase for SunDrip */
                                                    <div className="w-full h-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-200 p-4 sm:p-5 flex flex-col justify-between font-mono text-xs select-none">
                                                        {/* Terminal header */}
                                                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                                            <div className="flex items-center gap-2">
                                                                <Server className="w-4 h-4 text-primary-500" />
                                                                <span className="font-bold text-neutral-300">sundrip_pipeline.sys</span>
                                                            </div>
                                                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                                                LIVE PAYMENTS READY
                                                            </span>
                                                        </div>

                                                        {/* Interactive Architecture Grid */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-auto py-2">
                                                            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex flex-col gap-1">
                                                                <div className="flex items-center gap-1.5 text-primary-400 font-bold text-[11px]">
                                                                    <CreditCard className="w-3.5 h-3.5" />
                                                                    <span>Razorpay Gateway</span>
                                                                </div>
                                                                <p className="text-[10px] text-neutral-400">Order creation & signature verification webhook</p>
                                                                <span className="text-[10px] text-emerald-400">STATUS: 200 OK</span>
                                                            </div>

                                                            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex flex-col gap-1">
                                                                <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[11px]">
                                                                    <Database className="w-3.5 h-3.5" />
                                                                    <span>MongoDB Atlas</span>
                                                                </div>
                                                                <p className="text-[10px] text-neutral-400">Product schemas, orders & secure user hashes</p>
                                                                <span className="text-[10px] text-cyan-400">CONNECTED: Primary Replica</span>
                                                            </div>

                                                            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex flex-col gap-1">
                                                                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
                                                                    <ShieldCheck className="w-3.5 h-3.5" />
                                                                    <span>JWT Auth & RBAC</span>
                                                                </div>
                                                                <p className="text-[10px] text-neutral-400">Protected admin routes & session management</p>
                                                                <span className="text-[10px] text-amber-400">ENCRYPTION: AES-256</span>
                                                            </div>

                                                            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex flex-col gap-1">
                                                                <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[11px]">
                                                                    <Zap className="w-3.5 h-3.5" />
                                                                    <span>Redux State Store</span>
                                                                </div>
                                                                <p className="text-[10px] text-neutral-400">Persistent cart, totals & checkout flow</p>
                                                                <span className="text-[10px] text-purple-400">SYNC: LocalStorage + API</span>
                                                            </div>
                                                        </div>

                                                        {/* Terminal Footer */}
                                                        <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                                                            <span>Stack: React • Node • Express • Mongo</span>
                                                            <a
                                                                href="https://sun-drip.vercel.app/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-primary-400 hover:text-white transition-colors flex items-center gap-1 font-bold"
                                                            >
                                                                <span>Launch Store</span>
                                                                <ArrowUpRight className="w-3 h-3" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {/* GRID VIEW (Compact Bento Matrix) */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {projects.map((proj, idx) => (
                            <div
                                key={proj.id}
                                className="bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-primary-500"
                            >
                                <div>
                                    {/* Card Window Mockup Header */}
                                    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-dark-950 overflow-hidden mb-4">
                                        <div className="px-3 py-2 bg-neutral-200/80 dark:bg-dark-800/80 border-b border-neutral-300/80 dark:border-neutral-800 flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                            </div>
                                            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[160px]">
                                                {proj.urlDisplay}
                                            </span>
                                            <span className="text-[9px] font-mono font-bold text-neutral-500 dark:text-neutral-400">PROD</span>
                                        </div>
                                        <div className="aspect-[16/9] bg-white dark:bg-dark-900 flex items-center justify-center p-2 overflow-hidden">
                                            {proj.image ? (
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-neutral-900 text-neutral-200 p-3 rounded-lg flex flex-col justify-center items-center gap-1 text-center font-mono">
                                                    <CreditCard className="w-6 h-6 text-primary-500 mb-1" />
                                                    <span className="text-xs font-bold text-white">Full-Stack E-Commerce</span>
                                                    <span className="text-[10px] text-neutral-400">React • Node.js • Razorpay</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Info */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] font-bold uppercase tracking-wider">
                                            {proj.badge}
                                        </span>
                                        <span className="text-xs font-mono font-bold text-neutral-400">
                                            0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display mb-2 group-hover:text-primary-500 transition-colors">
                                        {proj.title}
                                    </h3>

                                    <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed line-clamp-3 mb-4">
                                        {proj.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 mb-5">
                                        {proj.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-dark-800 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                                    {proj.demo && (
                                        <a
                                            href={proj.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 px-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all font-display"
                                        >
                                            <span>Live Demo</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-2 px-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-800 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 bg-white dark:bg-dark-900 transition-all font-display"
                                    >
                                        <GitHubIcon className="w-3.5 h-3.5" />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
