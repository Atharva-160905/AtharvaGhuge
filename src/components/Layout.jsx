import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

export default function Layout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-moxa-white dark:bg-dark-950 text-moxa-black dark:text-neutral-300 font-sans flex flex-col relative overflow-x-hidden w-full selection:bg-primary-500/30">
            {/* Subtle Top Ambient Gradient */}
            <div className="fixed top-0 left-0 w-full h-[300px] bg-gradient-radial from-primary-500/5 to-transparent pointer-events-none -z-10" />
            
            <Navbar />

            <main className="flex-grow pt-20 relative z-10 flex flex-col justify-start w-full">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex-grow w-full flex flex-col justify-start"
                >
                    <Outlet />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
