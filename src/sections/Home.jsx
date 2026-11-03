import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FolderGit2, 
    Layers, 
    Briefcase, 
    Mail, 
    ArrowRight 
} from 'lucide-react';
import Hero from './Hero';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
    const glimpses = [
        {
            title: "Selected Projects",
            subtitle: "PRODUCTION APPS & SYSTEMS",
            description: "From MedLink (Smart India Hackathon OCR & AI platform) to SunDrip full-stack e-commerce with Razorpay payments and WebRTC P2P transfers.",
            icon: FolderGit2,
            stats: "4 Featured Deployments",
            tags: ["MedLink (SIH)", "SunDrip E-Commerce", "WebRTC P2P", "3D Event Sites"],
            link: "/projects",
            linkText: "View All Projects",
            color: "group-hover:border-primary-500"
        },
        {
            title: "Skills & Problem Solving",
            subtitle: "CORE ARCHITECTURE & TECH",
            description: "Modern frontend engineering with Next.js, React 19, and GSAP paired with scalable backend APIs, Supabase, and 300+ solved LeetCode DSA challenges.",
            icon: Layers,
            stats: "300+ LeetCode Solved",
            tags: ["Next.js", "React 19", "GSAP", "Node.js", "MongoDB", "C++"],
            link: "/skills",
            linkText: "Explore Tech Matrix",
            color: "group-hover:border-cyan-500"
        },
        {
            title: "Professional Experience",
            subtitle: "INTERNSHIPS & LEADERSHIP",
            description: "Full Stack Developer Intern at Dramsve building AimersMedia with Next.js & GSAP, and Frontend Intern at Mendygo crafting 30+ responsive dashboard screens.",
            icon: Briefcase,
            stats: "Dramsve • Mendygo • TheSubscription",
            tags: ["Full Stack Intern", "30+ UI Screens", "E-Cell Tech Lead"],
            link: "/experience",
            linkText: "View Full Journey",
            color: "group-hover:border-emerald-500"
        },
        {
            title: "Let's Collaborate",
            subtitle: "GET IN TOUCH",
            description: "Currently open for innovative software engineering roles, full-stack internships, and technical collaborations. Based in Pune, available remotely.",
            icon: Mail,
            stats: "Pune, IN / Remote",
            tags: ["atharvaghuge16@gmail.com", "Pune, India"],
            link: "/contact",
            linkText: "Send Message",
            color: "group-hover:border-purple-500"
        }
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Clean Screen-Fitted Hero Section */}
            <Hero />

            {/* Curated Glimpses / Overview Section */}
            <section className="py-10 md:py-16 relative bg-moxa-white dark:bg-dark-950 transition-colors duration-300">
                <div className="container mx-auto px-6 relative z-10">
                    
                    {/* Section Header */}
                    <SectionWrapper className="mb-8 flex flex-col items-start border-l-4 border-primary-500 pl-5">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-1.5 font-display">
                            At a <span className="text-neutral-500">Glance</span><span className="text-primary-500">.</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Overview of Works, Capabilities & Background
                        </p>
                    </SectionWrapper>

                    {/* Glimpse Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                        {glimpses.map((item, index) => (
                            <SectionWrapper key={item.title} delay={index * 0.08}>
                                <Link 
                                    to={item.link}
                                    className={`group flex flex-col justify-between h-full bg-white dark:bg-dark-900 p-6 sm:p-7 rounded-3xl border border-neutral-300 dark:border-neutral-800 ${item.color} transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
                                >
                                    <div>
                                        {/* Card Top Row */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className="p-2.5 bg-neutral-100 dark:bg-dark-800 group-hover:bg-primary-500 group-hover:text-white rounded-xl transition-colors duration-300 text-moxa-black dark:text-white flex items-center justify-center">
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-500">
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                            
                                            {/* High Contrast Stats Badge for Light & Dark Mode */}
                                            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-800 dark:text-neutral-200 bg-neutral-200/70 dark:bg-dark-800 px-2.5 sm:px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 shrink-0">
                                                {item.stats}
                                            </span>
                                        </div>

                                        {/* Card Title */}
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-moxa-black dark:text-white mb-2 group-hover:text-primary-500 transition-colors font-display">
                                            {item.title}
                                        </h3>

                                        {/* Card Description */}
                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed mb-5">
                                            {item.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {item.tags.map(tag => (
                                                <span 
                                                    key={tag}
                                                    className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-dark-950 text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 rounded-lg"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Link Footer */}
                                    <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-moxa-black dark:text-white group-hover:text-primary-500 transition-colors">
                                        <span>{item.linkText}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
