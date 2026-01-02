import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-moxa-white dark:bg-dark-950 text-moxa-black dark:text-white"
            initial={{ opacity: 1 }}
            exit={{ y: -1000, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="overflow-hidden flex flex-col items-center">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4"
                >
                    Atharva<span className="text-primary-500">.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-bold uppercase tracking-widest text-neutral-500"
                >
                    Learn &middot; Build &middot; Improve
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;
