import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border-b border-neutral-300 dark:border-neutral-800 shadow-md' : 'bg-moxa-white/90 dark:bg-dark-950/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800/80'}`}>
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    
                    {/* Brand Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group relative z-50">
                        <span className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors uppercase font-display">
                            Atharva<span className="text-primary-500">.</span>
                        </span>
                    </NavLink>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-9">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary-500 font-display py-2 ${
                                        isActive ? 'text-primary-500' : 'text-neutral-800 dark:text-neutral-300'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-primary-500 rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.25 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-white dark:bg-dark-900 hover:bg-neutral-100 dark:hover:bg-dark-800 transition-colors text-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-700 shadow-sm flex items-center justify-center"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3 relative z-50">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white hover:text-primary-500 transition-colors shadow-sm"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-white dark:bg-dark-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white hover:text-primary-500 transition-colors shadow-sm"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-moxa-white dark:bg-dark-950 z-40 flex flex-col justify-between px-6 py-24 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col items-center gap-7 my-auto">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.04 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-3xl font-black uppercase tracking-tight transition-colors font-display ${isActive ? 'text-primary-500' : 'text-neutral-800 dark:text-neutral-300 hover:text-primary-500'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Social Shortcuts */}
                        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="/Atharva_Ghuge.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-500 text-xs font-mono font-bold"
                            >
                                Resume (PDF)
                            </a>
                            <a
                                href="https://leetcode.com/u/Atharva_160905/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-dark-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold"
                            >
                                LeetCode
                            </a>
                            <a
                                href="https://github.com/Atharva-160905"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-dark-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/atharvaghuge/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-dark-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
