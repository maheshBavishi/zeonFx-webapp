"use client";

import React, { useRef } from 'react';
import styles from './laptopAnimation.module.scss';
import Button from '@/components/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Screen1 = '/assets/images/screen1.png';
const Screen2 = '/assets/images/screen2.png';
const Laptop = '/assets/images/laptop.png';

export default function LaptopAnimation() {
    const containerRef = useRef(null);

    // Track scroll progress within the fixed section height
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Ultra-smooth spring physics for butter-smooth fade transition
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 24,
        mass: 0.25,
        restDelta: 0.0001
    });

    // Screen 1 is visible by default when entering the section.
    // As user scrolls, Screen 2 smoothly fades in (opacity: 0 -> 1) over a wide scroll range.
    const screen2Opacity = useTransform(smoothProgress, [0.1, 0.85], [0, 1]);


    return (
        <div className={styles.laptopAnimation} ref={containerRef}>
            <div className={styles.stickyContainer}>
                <div className="container">
                    <div className={styles.laptopWrapper}>
                        {/* Laptop display screen container behind frame */}
                        <div className={styles.screenDisplay}>
                            {/* Screen 1: Default active screen */}
                            <img
                                src={Screen1}
                                alt="ZeonFX Web Terminal Screen 1"
                                className={styles.screenImage}
                            />

                            {/* Screen 2: Smooth fade-in overlay */}
                            <motion.img
                                src={Screen2}
                                alt="ZeonFX Web Terminal Screen 2"
                                className={`${styles.screenImage} ${styles.screenOverlay}`}
                                style={{ opacity: screen2Opacity }}
                            />
                        </div>

                        {/* Laptop frame mockup overlay */}
                        <img
                            src={Laptop}
                            alt="ZeonFX Laptop Frame"
                            className={styles.laptopFrame}
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


