import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Pause, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import farm from '../assets/farm.mp4';

const FarmVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Use the imported farm video (Vite will handle the correct path in both dev and production)
    const videoSources = [
        farm, // Local file imported at the top
    ];

    const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let mounted = true;

        const handlePlay = () => mounted && setIsPlaying(true);
        const handlePause = () => mounted && setIsPlaying(false);
        const handleError = () => {
            console.error("Video failed to load from source:", videoSources[currentSourceIndex]);
            if (currentSourceIndex < videoSources.length - 1) {
                setCurrentSourceIndex(prev => prev + 1);
            } else {
                setHasError(true);
            }
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('error', handleError);

        // Prepare the video source then attempt to play.
        video.preload = 'metadata';
        video.muted = true;

        // Ensure the correct source is loaded into the element (avoids racey remounts)
        if (video.src !== videoSources[currentSourceIndex]) {
            try {
                video.src = videoSources[currentSourceIndex];
                // load explicitly to make sure the browser knows about the new source
                video.load();
            } catch (e) {
                // keep going; load may throw in some environments
            }
        }

        const playAttempt = video.play();
        if (playAttempt && typeof playAttempt.then === 'function') {
            playAttempt.then(() => {
                if (mounted) setIsPlaying(true);
            }).catch(err => {
                // Ignore AbortError which occurs when play() is interrupted by a subsequent pause()
                if (err && err.name === 'AbortError') return;
                console.log('Autoplay blocked or play failed:', err);
                if (mounted) setIsPlaying(false);
            });
        }

        return () => {
            mounted = false;
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('error', handleError);
        };
    }, [currentSourceIndex]);

    const togglePlay = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleRetry = () => {
        setHasError(false);
        setCurrentSourceIndex(0);
    };

    return (
        <section id="process" className="section-padding bg-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-leaf font-bold tracking-widest uppercase text-sm"
                    >
                        Live From Our Farm
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-earth mt-4"
                    >
                        Our <span className="text-leaf">Farm To Home</span> Story
                    </motion.h2>
                    <p className="mt-6 text-earth/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Transparency is at our core. Watch our happy cows and the hygienic
                        process that brings fresh milk to your doorstep.
                    </p>
                </div>

                <div className="relative group max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-earth/10 aspect-video border-4 md:border-8 border-white group"
                    >
                        {hasError ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/10 backdrop-blur-md p-10 text-center">
                                <RefreshCw className="w-12 h-12 text-leaf mb-4 animate-spin" />
                                <h3 className="text-earth font-bold text-xl mb-2">Could not load video</h3>
                                <p className="text-earth/60 mb-6">Please check your internet connection or click retry.</p>
                                <button
                                    onClick={handleRetry}
                                    className="px-8 py-3 bg-leaf text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                                >
                                    Retry Loading
                                </button>
                            </div>
                        ) : (
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover cursor-pointer"
                                key={videoSources[currentSourceIndex]}
                                loop
                                muted
                                playsInline
                                autoPlay
                                crossOrigin="anonymous"
                                poster="https://images.unsplash.com/photo-1543323344-935df603417a?q=80&w=2070&auto=format&fit=crop"
                                onClick={togglePlay}
                                onLoadedData={() => setHasError(false)}
                            >
                                <source src={videoSources[currentSourceIndex]} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Control Overlays */}
                        {!hasError && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                                {/* Center Play/Pause Indicator (Only shows when paused or on hover) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isPlaying ? 0 : 1 }}
                                        whileHover={{ opacity: 1, scale: 1.1 }}
                                        onClick={togglePlay}
                                        className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl z-20 transition-opacity"
                                    >
                                        {isPlaying ? (
                                            <Pause className="text-white fill-white w-8 h-8" />
                                        ) : (
                                            <Play className="text-white fill-white w-8 h-8 ml-1" />
                                        )}
                                    </motion.button>
                                </div>

                                {/* Mute/Unmute Label */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    onClick={toggleMute}
                                    className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl z-20 hover:bg-white/40 transition-all"
                                >
                                    {isMuted ? <VolumeX className="text-white w-6 h-6" /> : <Volume2 className="text-white w-6 h-6" />}
                                </motion.button>

                                {/* Bottom Info (Desktop Only) */}
                                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 hidden md:block z-10 pointer-events-none">
                                    <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/10">
                                        <div className="bg-leaf p-2 rounded-xl">
                                            <Info className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">100% Traditional Approach</p>
                                            <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Nature-First Milking Process</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {[
                        { num: "01", label: "Happy Cows", sub: "Organic feeding" },
                        { num: "02", label: "Zero Stress", sub: "Gentle milking" },
                        { num: "03", label: "Fast Chilling", sub: "Preserves freshness" },
                        { num: "04", label: "Daily Route", sub: "Direct to you" }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="bg-white/50 border border-white p-6 rounded-[2rem] text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="text-leaf font-bold text-xs uppercase tracking-tighter block mb-2">{item.num}</span>
                            <p className="text-earth font-bold text-lg mb-1">{item.label}</p>
                            <p className="text-earth/50 text-xs font-semibold">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FarmVideo;
