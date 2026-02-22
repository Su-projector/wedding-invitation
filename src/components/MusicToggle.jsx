import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play blocked by browser"));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <audio
                ref={audioRef}
                loop
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            />
            <button
                onClick={toggleMusic}
                aria-label="Toggle Music"
                className="w-14 h-14 bg-white/80 glass rounded-full flex items-center justify-center text-accent-gold shadow-2xl hover:scale-110 transition-transform active:scale-95 border border-white/50"
            >
                {isPlaying ? (
                    <Music className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
                ) : (
                    <Music2 className="w-6 h-6" />
                )}
            </button>
        </div>
    );
};

export default MusicToggle;
