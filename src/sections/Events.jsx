import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, GlassWater, Music } from 'lucide-react';

const EventCard = ({ event }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div className="perspective-1000 w-full h-[400px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={handleClick}>
            <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    scale: isClicked ? 1.05 : 1
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden glass rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                        {event.icon}
                    </div>
                    <h3 className="title-elegant text-3xl text-gray-800 mb-2">{event.name}</h3>
                    <p className="text-accent-gold font-medium uppercase tracking-widest text-xs">
                        Hover for Details
                    </p>
                    <div className="absolute top-4 right-4 text-accent-gold/20">
                        <Sparkles className="w-8 h-8" />
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden glass rounded-3xl p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] bg-white/40">
                    <h3 className="title-elegant text-2xl text-gray-800 mb-6 border-b border-accent-gold/20 pb-2 w-full">
                        {event.name}
                    </h3>

                    <div className="space-y-4 w-full">
                        <div className="flex items-center space-x-4 text-gray-700">
                            <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-5 h-5 text-accent-gold" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-tighter text-gray-400">Date</p>
                                <p className="font-medium text-sm">{event.date}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-700">
                            <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-accent-gold" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-tighter text-gray-400">Time</p>
                                <p className="font-medium text-sm">{event.time}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-700">
                            <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-accent-gold" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-tighter text-gray-400">Venue</p>
                                <p className="font-medium text-sm leading-tight">{event.venue}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-8 px-6 py-2 bg-accent-gold text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors shadow-lg"
                    >
                        View Map
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const Events = () => {
    const eventList = [
        {
            id: 1,
            name: "The Ceremony",
            icon: <Sparkles className="w-10 h-10 text-accent-gold" />,
            date: "Saturday, June 20, 2026",
            time: "04:00 PM - 05:30 PM",
            venue: "St. Mary's Cathedral, Old Town",
        },
        {
            id: 2,
            name: "Cocktail Hour",
            icon: <GlassWater className="w-10 h-10 text-accent-gold" />,
            date: "Saturday, June 20, 2026",
            time: "06:00 PM - 07:00 PM",
            venue: "The Grand Hall Garden",
        },
        {
            id: 3,
            name: "Dinner & Dance",
            icon: <Music className="w-10 h-10 text-accent-gold" />,
            date: "Saturday, June 20, 2026",
            time: "07:30 PM - Midnight",
            venue: "The Grand Ballroom, Plaza Hotel",
        }
    ];

    return (
        <section className="py-24 bg-primary-light relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute top-40 left-[-5%] w-64 h-64 bg-accent-rose/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-[-5%] w-96 h-96 bg-accent-gold/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-gold uppercase tracking-[0.4em] text-sm mb-4 block font-medium"
                    >
                        Join Us For
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="title-elegant text-5xl md:text-6xl text-gray-800"
                    >
                        Wedding Events
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-24 h-[1px] bg-accent-gold mx-auto mt-8 origin-center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {eventList.map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: event.id * 0.1 }}
                        >
                            <EventCard event={event} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
