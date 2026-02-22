import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Petal = ({ id, color, startX, duration, size }) => {
    return (
        <motion.div
            initial={{
                y: -100,
                x: startX,
                rotate: 0,
                opacity: 0.8
            }}
            animate={{
                y: '110vh',
                x: startX + (Math.random() * 200 - 100),
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: [0.8, 0.6, 0.4, 0]
            }}
            transition={{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * 10
            }}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                position: 'absolute',
                borderRadius: '50% 0 50% 50%',
                filter: 'blur(1px)',
                zIndex: 1,
            }}
            className="shadow-sm"
        />
    );
};

const FallingPetals = () => {
    const petals = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            startX: Math.random() * 100 + 'vw',
            duration: 10 + Math.random() * 20,
            size: 10 + Math.random() * 15,
            color: i % 2 === 0 ? '#fad2e1' : '#fde2e4', // Rose tones
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
            {petals.map(petal => (
                <Petal key={petal.id} {...petal} />
            ))}
        </div>
    );
};

export default FallingPetals;
