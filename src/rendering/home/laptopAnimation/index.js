"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './laptopAnimation.module.scss';
import Button from '@/components/button';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

export const laptopFrames = Array.from({ length: 37 }, (_, i) =>
    `/assets/images/laptop/ezgif-frame-${String(i + 1).padStart(3, '0')}.webp`
);

export default function LaptopAnimation() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const requestRef = useRef(null);

    // 1. Preload all images so there is zero flickering
    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            try {
                const loadedImages = await Promise.all(
                    laptopFrames.map((src) => {
                        return new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = src;
                            img.onload = () => resolve(img);
                            img.onerror = reject;
                        });
                    })
                );
                if (!isMounted) return;
                imagesRef.current = loadedImages;
                setImagesLoaded(true);

                // Draw first frame immediately once loaded
                if (canvasRef.current && loadedImages[0]) {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    canvas.width = loadedImages[0].width;
                    canvas.height = loadedImages[0].height;
                    ctx.drawImage(loadedImages[0], 0, 0);
                }
            } catch (err) {
                console.error("Failed to load laptop frames:", err);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    // 2. Setup scroll tracking for the sticky container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Tight spring — responds quickly to scroll with no lag
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        mass: 0.3,
        restDelta: 0.0001
    });

    // 3. Map smoothed scroll progress (0 to 1) to frame index (0 to 36)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, 36]);

    // Smoothly fade in the buttons near the end of the scroll
    const buttonOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1]);
    const buttonY = useTransform(smoothProgress, [0.75, 0.95], [20, 0]);

    // Helper function to safely draw frames without out-of-bound errors
    const drawFrame = (index) => {
        if (!canvasRef.current || !imagesRef.current.length) return;
        const clampedIndex = Math.min(36, Math.max(0, index));
        const img = imagesRef.current[clampedIndex];
        if (img) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        }
    };

    // 4. Update canvas butter-smoothly using requestAnimationFrame & clamped index
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!imagesLoaded) return;

        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }

        requestRef.current = requestAnimationFrame(() => {
            // Math.floor gives smoother step-by-step frame progression
            const index = Math.floor(latest);
            drawFrame(index);
        });
    });

    return (
        <div className={styles.laptopAnimation} ref={containerRef}>
            <div className={styles.stickyContainer}>
                <div className='container'>
                    <div className={styles.canvasContainer}>
                        <canvas ref={canvasRef} />
                    </div>
                    <motion.div
                        className={styles.buttonCenter}
                        style={{ opacity: buttonOpacity, y: buttonY }}
                    >
                        <Button text="LAUNCH WEB TERMINAL" primary />
                        <Button text="DOWNLOAD MT5" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

