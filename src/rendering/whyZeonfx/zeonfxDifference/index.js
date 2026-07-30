"use client";

import React from 'react';
import styles from './zeonfxDifference.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const Spreads = '/assets/images/Spreads.png';
const Execution = '/assets/images/execution.png';
const Verify = '/assets/icons/verify.png';

const cards = [
    {
        title: 'Tight Spreads',
        desc: 'Institutional liquidity keeps your cost of trading low, with raw pricing on the Raw ECN and Pro VIP accounts.',
        image: Spreads,
        alt: 'Spreads',
    },
    {
        title: 'Fast STP execution',
        desc: 'Orders route straight through to liquidity providers, so fills stay consistent even when markets move fast.',
        image: Execution,
        alt: 'Execution',
    },
    {
        title: 'Smart tools',
        desc: 'Trade Guard behaviour controls and AI-assisted analysis are part of the account, not a paid add-on.',
        image: Verify,
        alt: 'Verify',
    },
];

// ── Variants ──────────────────────────────────────────────

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
};

// ──────────────────────────────────────────────────────────

export default function ZeonfxDifference() {
    return (
        <div className={styles.zeonfxDifference}>
            <div className='container'>

                {/* Tag */}
                <motion.div
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <ButtonText text="difference" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    The ZeonFX <span> Difference </span>
                </motion.h2>

                {/* Cards grid — staggered */}
                <motion.div
                    className={styles.grid}
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 16px 48px rgba(20, 158, 245, 0.14)',
                                transition: { duration: 0.3, ease: 'easeOut' },
                            }}
                        >
                            <div className={styles.inner}>
                                <motion.div className={styles.text} variants={imageVariants}>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </motion.div>
                                <motion.div
                                    className={styles.image}
                                    variants={imageVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.35, ease: 'easeOut' },
                                    }}
                                >
                                    <img src={card.image} alt={card.alt} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
