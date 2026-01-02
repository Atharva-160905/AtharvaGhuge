import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, ArrowUpRight, MousePointer2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
    {
        title: "AI Portfolio",
        description: "A modern developer portfolio with 3D elements, dark mode, and high performance animations.",
        tags: ["React", "Tailwind", "Spline", "Vite"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/project1.png"
    },
    {
        title: "E-Commerce Dashboard",
        description: "Full-stack admin dashboard for managing products, orders, and analytics with real-time updates.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/project2.png"
    },
    {
        title: "Task Master",
        description: "Collaborative task management app with drag-and-drop boards and team workspaces.",
        tags: ["React", "Firebase", "Redux", "DND Kit"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/project3.png"
    }
];

export default function Projects() {
    return (
        <section className="py-32 relative bg-moxa-white dark:bg-dark-950 transition-colors duration-300" id="projects">
            <div className="container mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="mb-32">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-moxa-black dark:text-white">
                        Selected <span className="text-neutral-500">Works</span><span className="text-primary-500">.</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full" />
                </div>

                <div className="flex flex-col gap-20 lg:gap-24">
                    {projects.map((project, index) => (
                        <SectionWrapper key={index} delay={index * 0.1}>
                            <div className="relative grid lg:grid-cols-12 gap-6 items-center">

                                {/* Image Area - Alternating Position */}
                                <div className={`relative aspect-[16/9] bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden group hover:border-primary-500/30 transition-all duration-500 
                                    ${index % 2 === 0 ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7 lg:col-start-1'}
                                    col-span-12 row-start-1 lg:row-start-1 shadow-2xl`}>

                                    {/* Placeholder/Image */}
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-dark-900 relative overflow-hidden">
                                        <Folder className="w-20 h-20 text-neutral-300 dark:text-neutral-700 group-hover:text-primary-500/50 transition-colors duration-500" />

                                        {/* Overlay Effect */}
                                        <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

                                        {/* Decorative Grid */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                                    </div>
                                </div>

                                {/* Text Card - Floating & Overlapping */}
                                <div className={`relative bg-moxa-white/90 dark:bg-dark-950/90 backdrop-blur-xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-2xl z-20 flex flex-col justify-center
                                    ${index % 2 === 0 ? 'lg:col-span-6 lg:col-start-1' : 'lg:col-span-6 lg:col-start-7'}
                                    col-span-12 row-start-2 lg:row-start-1 -mt-8 lg:mt-0 mx-4 lg:mx-0`}>

                                    {/* Featured Label */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs">Featured Project</span>
                                        <MousePointer2 className="w-5 h-5 text-primary-500 animate-bounce" />
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-moxa-black dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-6"></div>

                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default bg-white/50 dark:bg-black/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-moxa-black dark:text-white hover:text-primary-500 transition-colors group/link"
                                        >
                                            <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" /> Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-moxa-black dark:text-white hover:text-primary-500 transition-colors group/link"
                                        >
                                            <ExternalLink className="w-5 h-5 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> Live Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Background Number Decoration */}
                                <span className={`absolute -top-12 lg:-top-20 text-[10rem] lg:text-[12rem] font-black text-neutral-200/40 dark:text-neutral-800/20 select-none pointer-events-none z-0
                                    ${index % 2 === 0 ? 'left-0' : 'right-0'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                            </div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
