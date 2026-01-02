import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const experiences = [
    {
        role: "Senior Full Stack Dev",
        company: "Tech Corp",
        period: "2023 - Present",
        description: "Leading a team of 5 developers building cloud-native applications using React, Node.js, and AWS.",
        skills: ["React", "AWS", "Node.js"]
    },
    {
        role: "Software Developer",
        company: "Innovation Labs",
        period: "2021 - 2023",
        description: "Developed and maintained multiple high-traffic web applications. Improved performance by 40%.",
        skills: ["Vue.js", "Python", "Docker"]
    },
    {
        role: "Web Developer Intern",
        company: "StartUp Inc",
        period: "2020 - 2021",
        description: "Collaborated with design team to implement responsive user interfaces and interactive components.",
        skills: ["HTML/CSS", "JavaScript", "React"]
    }
];

export default function Experience() {
    return (
        <section className="py-32 relative" id="experience">
            <div className="container mx-auto px-6 relative z-10">
                <SectionWrapper className="mb-24 flex flex-col items-start border-l-4 border-primary-500 pl-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-moxa-black dark:text-white mb-2">
                        Experience<span className="text-primary-500">.</span>
                    </h2>
                    <p className="text-neutral-500 text-xl font-medium tracking-wide">
                        MY PROFESSIONAL JOURNEY
                    </p>
                </SectionWrapper>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <SectionWrapper key={index} delay={index * 0.1}>
                            <div className="group relative pl-8 border-l border-neutral-200 dark:border-neutral-800 hover:border-primary-500 transition-colors duration-500">
                                {/* Dot */}
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 rounded-full group-hover:bg-primary-500 transition-colors duration-300"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-moxa-black dark:text-white uppercase tracking-tight">
                                        {exp.role} <span className="text-primary-500 mx-2">@</span> {exp.company}
                                    </h3>
                                    <span className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-2 md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6 max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 ">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
