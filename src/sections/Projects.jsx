import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, ArrowUpRight, MousePointer2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
    {
        title: "MedLink",
        description: "A secure file sharing platform enabling patients to upload medical records. It leverages OCR and Gemini API to generate patient-friendly insights from medical files.",
        tags: ["Supabase", "React", "Gemini API", "OCR", "Antigravity"],
        github: "https://github.com/Atharva-160905/Medlink-2026",
        demo: "https://medlink-2026.vercel.app/",
        image: "/images/Medlink.png"
    },
    {
        title: "WebRTC File Sharing",
        description: "A peer-to-peer file sharing web application built with WebRTC. Enables direct browser-based transfers with fast and secure real-time connection handling without server storage.",
        tags: ["JavaScript", "WebRTC"],
        github: "https://github.com/Atharva-160905/WebRtc",
        demo: "https://web-rtc-rose.vercel.app/",
        image: "/images/WebRtc.png"
    },
    {
        title: "College Event Websites",
        description: "Interactive and responsive event websites for E-Conclave & Fusion Hackathon built using React and Three.js, enhancing user engagement through modern UI and 3D visual elements.",
        tags: ["React", "Three.js", "JavaScript"],
        github: "https://github.com/Vedant159357/Ecell-2026",
        demo: "https://iicecellskncoe.com/",
        image: "/images/Ecell.png"
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
                            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative
                                ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>

                                {/* Background Number Decoration */}
                                <span className={`absolute -top-16 lg:-top-24 text-[12rem] lg:text-[16rem] font-black text-neutral-200/40 dark:text-neutral-800/20 select-none pointer-events-none z-0
                                    ${index % 2 === 0 ? 'right-0 lg:-right-10' : 'left-0 lg:-left-10'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Image Area  */}
                                <a 
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full lg:w-3/5 relative aspect-[16/9] bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl block z-10"
                                >
                                    <div className="w-full h-full relative overflow-hidden bg-neutral-100 dark:bg-dark-900 flex items-center justify-center p-4 md:p-8">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 drop-shadow-2xl"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Folder className="w-20 h-20 text-neutral-300 dark:text-neutral-700 group-hover:text-primary-500/50 transition-colors duration-500" />
                                            </div>
                                        )}

                                        {/* Overlay Effect */}
                                        <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none rounded-xl"></div>
                                    </div>
                                </a>

                                {/* Text Area */}
                                <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-20 group">
                                    {/* Featured Label */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <MousePointer2 className="w-4 h-4 text-primary-500 animate-bounce" />
                                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs group-hover:tracking-[0.2em] transition-all duration-300">Featured Project</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-moxa-black dark:text-white mb-6 group-hover:text-primary-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <div className="w-12 h-1 bg-primary-500 mb-6 rounded-full"></div>

                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg lg:text-xl mb-8 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-neutral-800 rounded-none text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-4 border border-moxa-black dark:border-white rounded-none text-sm font-bold uppercase tracking-wider text-moxa-black dark:text-white hover:bg-moxa-black dark:hover:bg-white hover:text-white dark:hover:text-moxa-black transition-all flex items-center gap-2"
                                        >
                                            <Github className="w-5 h-5" /> Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex items-center gap-2 py-4 px-6 text-sm group/btn bg-moxa-black dark:bg-white text-white dark:text-moxa-black"
                                        >
                                            Live Demo <ExternalLink className="w-5 h-5 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" /> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
