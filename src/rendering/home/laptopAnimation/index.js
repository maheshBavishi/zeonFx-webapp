"use client";

import React, { useEffect, useRef } from 'react';
import styles from './laptopAnimation.module.scss';
import Button from '@/components/button';

const TOTAL_FRAMES = 35;

const getFramePath = (index) => {
    const frameNum = String(index).padStart(3, '0');
    return `/assets/images/laptop/ezgif-frame-${frameNum}.webp`;
};

export default function LaptopAnimation() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const targetFrameRef = useRef(1);
    const currentFrameRef = useRef(1);
    const animationFrameIdRef = useRef(null);

    // Render frame to canvas with crisp quality
    const drawFrame = (frameIndex) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imagesRef.current[frameIndex - 1];
        if (img && img.complete && img.naturalWidth > 0) {
            if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        }
    };

    // Preload all 35 webp images into memory and pre-decode for GPU acceleration
    useEffect(() => {
        const loadedImages = [];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            if (img.decode) {
                img.decode().catch(() => {});
            }
            loadedImages.push(img);
        }
        imagesRef.current = loadedImages;

        // Draw initial frame as soon as image 1 loads
        loadedImages[0].onload = () => {
            drawFrame(1);
        };
        if (loadedImages[0].complete) {
            drawFrame(1);
        }
    }, []);

    // Scroll listener calculates target frame index
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScroll = rect.height - windowHeight;

            if (totalScroll <= 0) return;

            const currentScroll = -rect.top;
            const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
            
            // Map 0..1 progress to frame 1..35
            targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Continuous Lerp (Linear Interpolation) loop for ultra-smooth 60fps motion
    useEffect(() => {
        let lastRenderedIndex = -1;

        const renderLoop = () => {
            // Lerp physics: smoothly interpolate current frame toward target frame
            const diff = targetFrameRef.current - currentFrameRef.current;
            currentFrameRef.current += diff * 0.14; // smooth easing factor

            const indexToDraw = Math.min(
                TOTAL_FRAMES,
                Math.max(1, Math.round(currentFrameRef.current))
            );

            if (indexToDraw !== lastRenderedIndex) {
                drawFrame(indexToDraw);
                lastRenderedIndex = indexToDraw;
            }

            animationFrameIdRef.current = requestAnimationFrame(renderLoop);
        };

        animationFrameIdRef.current = requestAnimationFrame(renderLoop);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.laptopAnimation} ref={containerRef}>
            <div className={styles.stickyContainer}>
                <div className="container">
                    <div className={styles.laptopWrapper}>
                        <canvas
                            ref={canvasRef}
                            className={styles.canvasFrame}
                        />
                    </div>

                    <div className={styles.buttonCenter}>
                        <Button text="LAUNCH WEB TERMINAL" primary />
                        <Button text="DOWNLOAD MT5" />
                    </div>
                </div>
            </div>
        </div>
    );
}




