import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Decorative Divider Component
const Divider = () => (
    <div className="flex items-center justify-center space-x-4 my-8">
        <div className="h-px w-12 md:w-24 bg-accent-gold/40" />
        <div className="w-2 h-2 rounded-full border border-accent-gold rotate-45" />
        <div className="h-px w-12 md:w-24 bg-accent-gold/40" />
    </div>
);

const photos = [
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", width: 800, height: 1200 },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", width: 1200, height: 800 },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", width: 1000, height: 1500 },
    { src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=800", width: 1200, height: 900 },
    { src: "https://images.unsplash.com/photo-1519225497288-44cf9a2e293a?auto=format&fit=crop&q=80&w=800", width: 800, height: 1000 },
    { src: "https://images.unsplash.com/photo-1465495910484-c4b24d77bb71?auto=format&fit=crop&q=80&w=800", width: 1200, height: 800 },
    { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800", width: 1000, height: 1400 },
    { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", width: 1200, height: 800 },
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-gold uppercase tracking-[0.5em] text-xs mb-4 block font-semibold"
                    >
                        Capturing Moments
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="title-elegant text-5xl md:text-6xl text-gray-800"
                    >
                        Memories
                    </motion.h2>
                    <Divider />
                </div>

                {/* Masonry Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-7xl mx-auto"
                >
                    <PhotoAlbum
                        layout="masonry"
                        photos={photos}
                        columns={(containerWidth) => {
                            if (containerWidth < 640) return 2;
                            if (containerWidth < 1024) return 3;
                            return 4;
                        }}
                        spacing={16}
                        onClick={({ index }) => setIndex(index)}
                        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                            <div
                                style={wrapperStyle}
                                className="overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
                                    {renderDefaultPhoto({ wrapped: true })}
                                </div>
                                <div className="absolute inset-0 bg-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                        View
                                    </span>
                                </div>
                            </div>
                        )}
                    />
                </motion.div>

                {/* Lightbox Integration */}
                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    // Custom styles for premium look
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                />
            </div>
        </section>
    );
};

export default Gallery;
