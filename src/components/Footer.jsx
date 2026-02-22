import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const Footer = () => {
    const weddingUrl = window.location.href;
    const currentYear = new Date().getFullYear();
    const weddingDate = "June 20, 2026";

    const whatsappMessage = `You're invited to Sarah & James's wedding! View the details here: ${weddingUrl}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative py-16 px-4 overflow-hidden"
        >
            {/* Glassmorphism Background Container */}
            <div className="max-w-6xl mx-auto glass rounded-[2.5rem] p-10 md:p-16 relative z-10 border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10">
                <div className="flex flex-col items-center text-center">

                    {/* Couple Names & Date */}
                    <div className="mb-12">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="flex justify-center mb-4"
                        >
                            <Heart className="w-8 h-8 text-accent-rose fill-accent-rose" />
                        </motion.div>
                        <h2 className="title-elegant text-4xl md:text-5xl text-gray-800 mb-2">Sarah & James</h2>
                        <p className="text-accent-gold uppercase tracking-[0.3em] text-sm font-semibold">
                            {weddingDate}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl items-center border-t border-accent-gold/10 pt-12">

                    </div>

                    {/* Copyright Section */}
                    <div className="mt-16 pt-8 border-t border-accent-gold/5 w-full">
                        <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                            © {currentYear} Sarah & James Wedding • Made with Love
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-rose/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </motion.footer>
    );
};

export default Footer;
