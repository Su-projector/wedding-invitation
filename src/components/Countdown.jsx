import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipUnit = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-16 h-20 md:w-20 md:h-28 bg-white/40 glass rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="title-elegant text-3xl md:text-5xl font-bold text-gray-800"
                    >
                        {value.toString().padStart(2, '0')}
                    </motion.span>
                </AnimatePresence>

                {/* Decorative divider for flip effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-[1px] bg-black/5" />
                </div>
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mt-3 font-semibold">
                {label}
            </span>
        </div>
    );
};

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex space-x-3 md:space-x-6">
            <FlipUnit value={timeLeft.days} label="Days" />
            <FlipUnit value={timeLeft.hours} label="Hours" />
            <FlipUnit value={timeLeft.minutes} label="Mins" />
            <FlipUnit value={timeLeft.seconds} label="Secs" />
        </div>
    );
};

export default Countdown;
