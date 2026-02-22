import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ weddingDate }) => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary-light via-primary to-primary-dark">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent-rose blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold blur-[150px] rounded-full translate-x-1/4 translate-y-1/4" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-10 text-center px-4"
            >
                <span className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-6 block font-medium">
                    The Wedding of
                </span>
                <h1 className="title-elegant text-5xl sm:text-7xl md:text-8xl text-gray-800 mb-8 leading-tight px-4">
                    Sarah <span className="text-accent-rose italic">&</span> James
                </h1>
                <div className="w-24 h-[1px] bg-accent-gold mx-auto mb-8 opacity-50" />

                <p className="title-elegant text-2xl md:text-3xl text-gray-600 italic mb-12">
                    Save the Date
                </p>

                {/* Countdown component placeholder - will be injected here */}
                <div id="countdown-portal" className="flex justify-center space-x-4 md:space-x-8">
                    {/* Flip countdown will be rendered here */}
                </div>
            </motion.div>

            {/* Decorative Vines/Flowers - can be images later */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-40 pointer-events-none"
            >
                <svg viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 200C150 150 350 180 500 150C650 120 850 180 1000 150V200H0Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="500" y1="120" x2="500" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D4AF37" stopOpacity="0" />
                            <stop offset="1" stopColor="#D4AF37" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
