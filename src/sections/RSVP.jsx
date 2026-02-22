import React from 'react';
import { motion } from 'framer-motion';
import QRCode from "react-qr-code";
import { MessageSquare, Share2, Heart } from 'lucide-react';

const RSVP = () => {
    const weddingUrl = window.location.href;
    const whatsappMessage = `You're invited to Sarah & James's Wedding! View the invitation here: ${weddingUrl}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background labels */}
            <div className="absolute bottom-10 left-[-5%] text-[12rem] font-bold text-gray-50 pointer-events-none select-none -z-0">
                RSVP
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border-2 border-accent-gold/10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <Heart className="w-16 h-16 text-accent-rose mx-auto mb-6 fill-accent-rose rotate-[-10deg]" />
                        <h2 className="title-elegant text-5xl md:text-6xl text-gray-800 mb-6">Will You Join Us?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto italic">
                            "We're so excited to share our special day with you. Your presence is the greatest gift we could ask for."
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
                        {/* WhatsApp Share */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center p-8 bg-primary/20 rounded-3xl"
                        >
                            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                                <MessageSquare className="w-8 h-8 text-[#25D366]" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-widest text-sm">Join the Conversation</h3>
                            <p className="text-sm text-gray-500 mb-8">Share the invitation with your friends and family or join our wedding group.</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl hover:scale-105 active:scale-95 w-full justify-center"
                            >
                                <Share2 className="w-5 h-5" />
                                <span>Share via WhatsApp</span>
                            </a>
                        </motion.div>

                        {/* QR Code */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center p-8 bg-accent-gold/5 rounded-3xl"
                        >
                            <div className="bg-white p-4 rounded-2xl shadow-inner mb-6">
                                <QRCode value={weddingUrl} size={150} fgColor="#d4af37" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 uppercase tracking-widest text-sm">Scan to Invite</h3>
                            <p className="text-xs text-gray-400">Share this QR code with guests</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
