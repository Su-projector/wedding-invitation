import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
    {
        id: 1,
        title: "First Meet",
        date: "September 12, 2021",
        description: "It all started with a simple 'hello' at a local coffee shop. Little did we know, it was the beginning of our forever.",
        image: "https://unsplash.com/photos/a-man-kneeling-down-next-to-a-woman-wmfPbCKxBjE",
    },
    {
        id: 2,
        title: "The Proposal",
        date: "February 14, 2023",
        description: "Under the starlit sky by the lake, James got down on one knee. Sarah said 'Yes!' before he could even finish the question.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
        id: 3,
        title: "The Engagement",
        date: "July 05, 2024",
        description: "Surrounded by family and friends, we celebrated our commitment to each other with a beautiful garden party.",
        image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
        id: 4,
        title: "Our Wedding",
        date: "June 20, 2026",
        description: "Today, we start our new chapter together as Mr. & Mrs. We're so happy to share this day with you!",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=400",
    }
];

const Milestone = ({ milestone, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center justify-center w-full mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Photo Column */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 flex justify-center px-4 mb-8 md:mb-0"
            >
                <div className="relative group">
                    <div className="absolute inset-0 bg-accent-gold rounded-full scale-105 opacity-20 blur-lg group-hover:scale-110 transition-transform duration-500" />
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10">
                        <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Spacing / Center Line for Desktop */}
            <div className="hidden md:flex flex-col items-center justify-center w-20 relative">
                <div className="w-4 h-4 rounded-full bg-accent-gold z-20 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                <div className="absolute top-0 bottom-[-96px] w-[2px] bg-gradient-to-b from-accent-gold/50 via-accent-gold/20 to-transparent" />
            </div>

            {/* Text Column */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`w-full md:w-1/2 px-4 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}
            >
                <span className="text-accent-gold font-semibold uppercase tracking-widest text-xs mb-2 block">
                    {milestone.date}
                </span>
                <h3 className="title-elegant text-3xl md:text-4xl text-gray-800 mb-4">
                    {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                    {milestone.description}
                </p>
            </motion.div>
        </div>
    );
};

const Journey = () => {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Labels */}
            <div className="absolute top-20 right-[-10%] text-[15rem] font-bold text-gray-50 pointer-events-none select-none -z-0">
                JOURNEY
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-gold uppercase tracking-[0.4em] text-sm mb-4 block font-medium"
                    >
                        The Story of Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="title-elegant text-5xl md:text-6xl text-gray-800"
                    >
                        Our Journey
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="h-[2px] bg-accent-gold mx-auto mt-8"
                    />
                </div>

                <div className="max-w-6xl mx-auto flex flex-col relative">
                    {/* Vertical line that extends through all milestones */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-0 w-[1px] bg-accent-gold/10 hidden md:block" />

                    {milestones.map((ms, index) => (
                        <Milestone key={ms.id} milestone={ms} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
