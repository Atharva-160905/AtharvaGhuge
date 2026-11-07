import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code2, 
    Globe, 
    Database, 
    Terminal, 
    Trophy, 
    Cpu, 
    Sparkles, 
    CheckCircle2, 
    Layers, 
    ArrowUpRight, 
    ExternalLink,
    Zap,
    Briefcase,
    GraduationCap,
    Workflow
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

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

const skillCategories = [
    {
        id: "languages",
        title: "Programming Languages",
        subtitle: "CORE CODING & SYNTAX",
        icon: Code2,
        color: "text-amber-500",
        bgLight: "bg-amber-500/10",
        borderLight: "border-amber-500/30",
        skills: [
            { name: "C++", note: "LeetCode 300+ • STL • OOP", level: "Primary DSA" },
            { name: "JavaScript (ES6+)", note: "Async/Await • DOM • Web APIs", level: "Advanced" },
            { name: "SQL", note: "Relational Queries • Joins • Schema", level: "Proficient" },
            { name: "HTML5 / CSS3", note: "Semantic Structure • Flex/Grid", level: "Modern Web" }
        ]
    },
    {
        id: "frontend",
        title: "Frontend & Creative Engineering",
        subtitle: "SSR, 3D & FLUID MOTION",
        icon: Globe,
        color: "text-primary-500",
        bgLight: "bg-primary-500/10",
        borderLight: "border-primary-500/30",
        skills: [
            { name: "React 19 / 18", note: "Hooks • Context • 30+ Screens Built", level: "Production" },
            { name: "Next.js", note: "App Router • SSR • SEO Optimized", level: "Production" },
            { name: "GSAP", note: "ScrollTrigger • Timeline Animations", level: "Interactive" },
            { name: "Three.js", note: "3D Visual Canvas • College Event Sites", level: "Creative 3D" },
            { name: "Tailwind CSS", note: "Design Tokens • Dark Mode • Responsive", level: "Design System" },
            { name: "Figma to Code", note: "Pixel-Perfect Responsive UI Translation", level: "UI/UX Spec" }
        ]
    },
    {
        id: "backend",
        title: "Backend, Cloud & Databases",
        subtitle: "APIS, TRANSACTIONS & PERSISTENCE",
        icon: Database,
        color: "text-cyan-500",
        bgLight: "bg-cyan-500/10",
        borderLight: "border-cyan-500/30",
        skills: [
            { name: "Node.js & Express", note: "RESTful Endpoints • Middleware Chains", level: "Backend" },
            { name: "MongoDB & Mongoose", note: "NoSQL Schemas • Aggregation • Atlas", level: "Database" },
            { name: "Supabase & PostgreSQL", note: "BaaS • Auth • Row Level Security", level: "Cloud BaaS" },
            { name: "Razorpay Payments", note: "Live Order Pipeline • Webhook Signatures", level: "Fintech API" },
            { name: "WebRTC DataChannels", note: "Direct P2P Encrypted Browser Transfer", level: "Protocol" },
            { name: "Auth & Security", note: "JWT Sessions • bcrypt • Role-Based Access", level: "Security" }
        ]
    },
    {
        id: "tools",
        title: "Developer Tools & DevOps",
        subtitle: "VERSION CONTROL & DEPLOYMENT",
        icon: Terminal,
        color: "text-emerald-500",
        bgLight: "bg-emerald-500/10",
        borderLight: "border-emerald-500/30",
        skills: [
            { name: "Git & GitHub", note: "PR Workflows • Branching • Version Control", level: "Essential" },
            { name: "Vercel & Render", note: "Production CI/CD • Serverless Hosting", level: "Cloud Deploy" },
            { name: "Google Gemini API", note: "Multimodal AI • Medical Summarization", level: "AI Integration" },
            { name: "OCR Processing", note: "Health Record Text & Data Extraction", level: "SIH Winner" },
            { name: "Figma & Canva", note: "Wireframes • Assets • Product Prototyping", level: "Design" },
            { name: "Testing & QA", note: "SRS Docs • Functional Cases • UI Validation", level: "Quality" }
        ]
    },
    {
        id: "core_cs",
        title: "Computer Science Fundamentals",
        subtitle: "ARCHITECTURE & SYSTEMS",
        icon: Cpu,
        color: "text-purple-500",
        bgLight: "bg-purple-500/10",
        borderLight: "border-purple-500/30",
        skills: [
            { name: "Data Structures", note: "Arrays • Strings • Trees • Hash Tables", level: "Core" },
            { name: "Algorithms", note: "Two Pointers • Sliding Window • Sorting", level: "Problem Solving" },
            { name: "OOP Principles", note: "Inheritance • Polymorphism • Encapsulation", level: "Architecture" },
            { name: "DBMS Concepts", note: "Normalization • ACID • Indexing", level: "Data Models" },
            { name: "Networking Basics", note: "HTTP/HTTPS • Client-Server • P2P Protocol", level: "Systems" }
        ]
    },
    {
        id: "engineering_practice",
        title: "Professional Workflows & Leadership",
        subtitle: "COLLABORATION & IMPACT",
        icon: Workflow,
        color: "text-rose-500",
        bgLight: "bg-rose-500/10",
        borderLight: "border-rose-500/30",
        skills: [
            { name: "SRS Documentation", note: "Authored system specs for TheSubscription", level: "Product" },
            { name: "Tech Leadership", note: "E-Cell Tech Lead: Fusion Hackathon (400+ devs)", level: "Leadership" },
            { name: "Sole Developer Ownership", note: "Delivered AimersMedia SSR site at Dramsve", level: "Full Ownership" },
            { name: "Collaborative Git Workflow", note: "Cross-functional teams at Mendygo & E-Cell", level: "Team Sync" },
            { name: "Hackathon Execution", note: "₹2L Prize pool event with 120+ teams managed", level: "Impact" }
        ]
    }
];

export default function About() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredCategories = selectedCategory === "all" 
        ? skillCategories 
        : selectedCategory === "tools"
        ? skillCategories.filter(c => c.id === "tools" || c.id === "engineering_practice")
        : skillCategories.filter(c => c.id === selectedCategory);

    return (
        <section className="py-8 md:py-12 relative bg-moxa-white dark:bg-dark-950 transition-colors duration-300 min-h-[calc(100vh-5rem)] flex flex-col justify-center" id="skills">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                    <div className="flex flex-col items-start border-l-4 border-primary-500 pl-4">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-1 font-display">
                            Technical <span className="text-neutral-500">Arsenal</span><span className="text-primary-500">.</span>
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Full-Stack Architecture • Problem Solving • Engineering Capabilities
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 rounded-xl shadow-xs self-start sm:self-auto">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "all"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectedCategory("frontend")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "frontend"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            Frontend
                        </button>
                        <button
                            onClick={() => setSelectedCategory("backend")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "backend"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            Backend
                        </button>
                        <button
                            onClick={() => setSelectedCategory("languages")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "languages"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            Languages
                        </button>
                        <button
                            onClick={() => setSelectedCategory("core_cs")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "core_cs"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            Core CS
                        </button>
                        <button
                            onClick={() => setSelectedCategory("tools")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-display ${
                                selectedCategory === "tools"
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                        >
                            Tools & DevOps
                        </button>
                    </div>
                </div>

                {/* Top Highlight Cards Strip (3 Key Pillars) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
                    {/* LeetCode DSA Highlight */}
                    <a
                        href="https://leetcode.com/u/Atharva_160905/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-2xl bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 hover:border-amber-500/80 transition-all shadow-sm flex items-center justify-between gap-3"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                                <LeetCodeIcon className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
                                        300+ LeetCode Solved
                                    </h3>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                                    Active DSA: Arrays, Strings, Trees, Two Pointers
                                </p>
                            </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold shrink-0">
                            C++ Rank
                        </span>
                    </a>

                    {/* Production Frontend Experience */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 shadow-sm flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/30 text-primary-500">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
                                    Production UI & SSR
                                </h3>
                                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                                    30+ React Screens • Next.js SSR • GSAP
                                </p>
                            </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-primary-500/15 text-primary-600 dark:text-primary-400 border border-primary-500/30 text-[10px] font-mono font-bold shrink-0">
                            Dramsve & Mendygo
                        </span>
                    </div>

                    {/* Academic & SIH Achievement */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 shadow-sm flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-500">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
                                    BE IT • 9.1 CGPA
                                </h3>
                                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                                    SKNCOE • SIH MedLink Project & E-Cell Lead
                                </p>
                            </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[10px] font-mono font-bold shrink-0">
                            Distinction
                        </span>
                    </div>
                </div>

                {/* Main Detailed Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
                    {filteredCategories.map((cat) => {
                        const IconComponent = cat.icon;
                        return (
                            <div 
                                key={cat.id}
                                className="bg-white dark:bg-dark-900 p-5 rounded-3xl border border-neutral-300 dark:border-neutral-800 hover:border-primary-500/80 transition-all duration-300 flex flex-col justify-between shadow-sm group"
                            >
                                <div>
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                                        <div className="flex items-center gap-2.5">
                                            <div className={`p-2 rounded-xl ${cat.bgLight} ${cat.color} border ${cat.borderLight} flex items-center justify-center transition-transform group-hover:scale-105`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                                                    {cat.subtitle}
                                                </span>
                                                <h3 className="text-sm font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
                                                    {cat.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Skills List */}
                                    <div className="space-y-2 mb-2">
                                        {cat.skills.map((skill, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="p-2.5 rounded-xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200/80 dark:border-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-dark-800/80 transition-colors flex items-center justify-between gap-2"
                                            >
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-xs font-black text-neutral-900 dark:text-white font-display tracking-tight truncate">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono truncate">
                                                        {skill.note}
                                                    </span>
                                                </div>
                                                <span className="px-2 py-0.5 rounded-md bg-white dark:bg-dark-900 border border-neutral-200 dark:border-neutral-700 text-[9px] font-mono font-bold text-neutral-700 dark:text-neutral-300 shrink-0">
                                                    {skill.level}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
