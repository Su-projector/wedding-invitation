import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Venue = () => {
    return (
        <section id="venue" className="py-24 bg-primary-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mb-4"
                    >
                        <MapPin className="text-accent-gold w-8 h-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="title-elegant text-5xl md:text-6xl text-gray-800"
                    >
                        Venue
                    </motion.h2>
                    <div className="w-24 h-px bg-accent-gold mt-8" />
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Map Embed (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative min-h-[450px] order-2 lg:order-1"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1645564556455!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Info Card (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2"
                    >
                        <h3 className="title-elegant text-3xl text-gray-800 mb-8">The Grand Ballroom</h3>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-accent-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1 tracking-wide uppercase text-xs">Address</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        123 Celebration Plaza, Suite 500<br />
                                        Old Town, New York 10001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center shrink-0">
                                    <Navigation className="text-accent-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1 tracking-wide uppercase text-xs">Date & Time</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Saturday, June 20, 2026<br />
                                        Reception at 06:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="https://goo.gl/maps/example"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 bg-linear-to-r from-accent-gold to-yellow-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
                                >
                                    <Navigation className="w-5 h-5" />
                                    <span>Get Directions</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
