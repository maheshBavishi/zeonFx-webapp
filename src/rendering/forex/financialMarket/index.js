'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './financialMarket.module.scss';
import ButtonText from '@/components/buttonText';

const EarthImage = '/assets/images/earth.png';

/* ─── Animation Variants ─────────────────────────────────────── */

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

const fadeSlideUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeSlideLeft = {
    hidden: { opacity: 0, x: -40, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.75, rotate: -12, filter: 'blur(12px)' },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: 'blur(0px)',
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
    },
};

const floatTransition = {
    duration: 6,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
};

const glowPulse = {
    opacity: [0.4, 0.9, 0.4],
    scale: [1, 1.12, 1],
};

const glowTransition = {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
};

/* ─── Component ──────────────────────────────────────────────── */

export default function FinancialMarket() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    return (
        <div className={styles.financialMarket} ref={sectionRef}>
            <div className="container">
                <div className={styles.grid}>

                    {/* ── Left: Text Content ── */}
                    <motion.div
                        className={styles.items}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {/* Badge */}
                        <motion.div variants={fadeSlideLeft}>
                            <ButtonText text="what is forex trading" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 variants={fadeSlideUp}>
                            The world's <span>largest </span>
                            financial market.
                        </motion.h2>

                        {/* Paragraphs */}
                        <motion.p variants={fadeSlideUp}>
                            Forex, or foreign exchange, is the global marketplace for trading
                            national currencies. With trillions changing hands every day, it
                            dwarfs every other financial market on the planet.
                        </motion.p>

                        <motion.p variants={fadeSlideUp}>
                            Because forex is decentralised, it runs 24 hours a day from Sunday
                            evening to Friday evening. That gives you the flexibility to trade
                            around your own schedule, from anywhere.
                        </motion.p>
                    </motion.div>

                    {/* ── Right: Earth Image ── */}
                    <div className={styles.items}>
                        <div className={styles.img}>

                            {/* Ambient glow behind globe */}
                            <motion.div
                                className={styles.glow}
                                animate={glowPulse}
                                transition={glowTransition}
                            />

                            {/* Globe — entrance + continuous float + hover tilt */}
                            <motion.img
                                src={EarthImage}
                                alt="Earth Globe"
                                variants={imageVariants}
                                initial="hidden"
                                animate={isInView ? ['visible', 'float'] : 'hidden'}
                                whileHover={{
                                    scale: 1.06,
                                    rotate: 4,
                                    filter: 'drop-shadow(0 0 40px rgba(99,179,237,0.6))',
                                    transition: { duration: 0.5, ease: 'easeOut' },
                                }}
                                style={{ display: 'block', width: '100%', cursor: 'pointer' }}
                                // Idle floating after entrance
                                transition={floatTransition}
                                // Overlay float on top of entrance variant after it finishes
                                {...(isInView && {
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        filter: 'blur(0px)',
                                        y: [0, -18, 0],
                                    },
                                    transition: {
                                        opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                                        scale: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                                        rotate: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                                        filter: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                                        y: {
                                            delay: 1.1,
                                            duration: 6,
                                            repeat: Infinity,
                                            repeatType: 'mirror',
                                            ease: 'easeInOut',
                                        },
                                    },
                                })}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
