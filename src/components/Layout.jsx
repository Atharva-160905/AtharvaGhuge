import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../sections/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-grow w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default function Layout() {
    return (
        <div className="min-h-screen bg-moxa-white dark:bg-dark-950 text-moxa-black dark:text-slate-300 font-sans flex flex-col relative overflow-hidden selection:bg-primary-500/30">
            {/* Background Gradients (Fixed) */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-radial from-primary-500/5 dark:from-primary-500/10 to-transparent opacity-40 pointer-events-none fade-in z-0" />
            <div className="fixed bottom-0 right-0 w-full h-[500px] bg-gradient-radial from-primary-500/5 dark:from-blue-900/10 to-transparent opacity-30 pointer-events-none fade-in z-0" />

            <Navbar />

            <main className="flex-grow pt-24 relative z-10 flex flex-col">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>

            <Footer />
        </div>
    );
}
