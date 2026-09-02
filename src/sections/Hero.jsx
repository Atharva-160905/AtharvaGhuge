import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, FileText, Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex flex-col justify-center overflow-x-hidden overflow-y-auto min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] bg-moxa-white dark:bg-dark-950 transition-colors duration-300">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-4 lg:gap-8 items-center relative z-10 py-6">
                {/* Left Content - Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 flex flex-col justify-center"
                >
                    <div className="mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[12vw] sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-moxa-black dark:text-white mb-2 md:mb-4"
                        >
                            HI, I'M <br />
                            <span className="text-neutral-500">ATHARVA.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-6 text-xl md:text-3xl font-bold uppercase tracking-tight text-moxa-black/90 dark:text-white/90"
                        >
                            <span>Creative</span>
                            <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-primary-500 animate-spin-slow" />
                            <span>Developer</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg mt-4 font-medium leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-4 block"
                        >
                            I engineer high-performance, scalable web applications by merging modern design with robust <span className="text-moxa-black dark:text-white font-bold">full-stack architecture</span>. From real-time platforms to responsive interactive experiences, I turn complex challenges into seamless digital solutions.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 relative z-20 w-full sm:w-max"
                    >
                        <Link to="/projects" className="w-full sm:w-auto text-center px-8 py-3 bg-moxa-black dark:bg-white text-white dark:text-moxa-black font-bold uppercase tracking-wider text-sm hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-colors duration-300">
                            Got a project?
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto text-center px-8 py-3 border border-moxa-black dark:border-white text-moxa-black dark:text-white font-bold uppercase tracking-wider text-sm hover:bg-moxa-black dark:hover:bg-white hover:text-white dark:hover:text-moxa-black transition-colors duration-300">
                            Let's Talk
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex items-center gap-8 text-neutral-500"
                    >
                        {[
                            { icon: Github, href: "https://github.com/Atharva-160905" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/atharvaghuge/" },
                            { icon: FileText, href: "/Atharva_Ghuge_Resume.pdf", label: "Resume" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-500 transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
                            >
                                <item.icon className="w-6 h-6" />
                                {item.label && <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Seamless Hero Portrait */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="order-1 lg:order-2 flex items-center justify-center relative mb-8 lg:mb-0"
                >
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5] flex items-center justify-center">
                        {/* Ambient Warm Backlight Glow */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-500/15 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Moxa 4-Point Star Accent */}
                        <div className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 z-20 pointer-events-none">
                            <svg className="w-20 h-20 sm:w-28 sm:h-28 text-primary-500 animate-spin-slow drop-shadow-[0_4px_16px_rgba(255,77,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                        </div>

                        {/* Seamless Portrait Container with Smooth Radial Contour Mask */}
                        <div
                            className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
                            style={{
                                maskImage: 'radial-gradient(ellipse 92% 82% at 50% 32%, black 62%, transparent 92%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 92% 82% at 50% 32%, black 62%, transparent 92%)',
                            }}
                        >
                            <img
                                src="/images/Atharva.png"
                                alt="Atharva Ghuge"
                                className="w-full h-full object-contain object-bottom transition-all duration-700 ease-out drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
