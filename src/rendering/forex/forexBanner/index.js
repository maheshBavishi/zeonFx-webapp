"use client";

import React from 'react';
import styles from './forexBanner.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const CoinImage = '/assets/images/round-coin.png';

// ── Variants ──────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.16, delayChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUpSlow = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const buttonsFade = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageFade = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
};

// ──────────────────────────────────────────────────────────

export default function ForexBanner() {
    // 3D tilt motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Map normalized mouse position (-0.5 to 0.5) → tilt degrees (±18deg)
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
        stiffness: 120, damping: 20, mass: 0.5,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), {
        stiffness: 120, damping: 20, mass: 0.5,
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className={styles.forexBanner}>
            <div className='container'>
                <div className={styles.grid}>

                    {/* Left content — staggered entrance */}
                    <motion.div
                        className={styles.items}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeUp}>
                            <ButtonText text="forex trading" />
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            50+ currency pairs. <br />
                            Raw pricing. <br />
                            A market that <span> never </span> sleeps.
                        </motion.h1>

                        <motion.p variants={fadeUpSlow}>
                            Trade the world's most liquid market 24 hours a day, five days a week. Over 50 major, minor, and
                            exotic pairs with competitive spreads, fast execution, and zero commission on Standard.
                        </motion.p>

                        <motion.div className={styles.buttonAlignment} variants={buttonsFade}>
                            <Button text="OPEN LIVE ACCOUNT" primary />
                            <Button text="TRY DEMO" outline />
                        </motion.div>
                    </motion.div>

                    {/* Right image — fade in + 3D mouse tilt + infinite rotation */}
                    <motion.div
                        className={styles.items}
                        variants={imageFade}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className={styles.image}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: 800, cursor: 'grab' }}
                        >
                            <motion.img
                                src={CoinImage}
                                alt="CoinImage"
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: 'preserve-3d',
                                    willChange: 'transform',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 18,
                                    ease: 'linear',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
