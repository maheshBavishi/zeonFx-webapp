"use client";

import React, { useState, useEffect } from 'react';
import styles from './experienceInstitutional.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const cards = [
    {
        icon: '/assets/icons/deep.svg',
        alt: 'DeepIcon',
        title: 'Deep liquidity:',
        desc: 'Aggregated liquidity for competitive pricing across all six asset classes.',
    },
    {
        icon: '/assets/icons/Low.svg',
        alt: 'LowIcon',
        title: 'Low latency engine:',
        desc: 'Order routing tuned for speed, so you get the price you see.',
    },
    {
        icon: '/assets/icons/protection.svg',
        alt: 'ProtectionIcon',
        title: 'Negative balance protection:',
        desc: 'Your account can never fall below zero, whatever the market does.',
    },
    {
        icon: '/assets/icons/Segregated.svg',
        alt: 'SegregatedIcon',
        title: 'Segregated client funds:',
        desc: 'Your money is held separately from company operating capital.',
    },
    {
        icon: '/assets/icons/markets.svg',
        alt: 'MarketsIcon',
        title: '100+ markets:',
        desc: 'Forex, indices, metals, commodities, stocks, and crypto CFDs from one login.',
    },
    {
        icon: '/assets/icons/funding.svg',
        alt: 'FundingIcon',
        title: 'Instant funding:',
        desc: 'Fund by card, bank, e-wallet, or crypto, credited fast.',
    },
    {
        icon: '/assets/icons/withdrawal.svg',
        alt: 'WithdrawalIcon',
        title: '0% withdrawal fee:',
        desc: 'Withdraw your profits with no commission charged by ZeonFX.',
    },
    {
        icon: '/assets/icons/support.svg',
        alt: 'SupportIcon',
        title: '24/5 support:',
        desc: 'A support team on hand around the clock through the trading week.',
    },
];


const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

// ──────────────────────────────────────────────────────────

export default function ExperienceInstitutional() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [manualHover, setManualHover] = useState(null);

    useEffect(() => {
        if (manualHover !== null) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [manualHover]);

    const highlightedIndex = manualHover !== null ? manualHover : activeIndex;

    return (
        <motion.div
            className={styles.experienceInstitutional}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className='container'>
                <div className={styles.grid}>

                    <div className={styles.items}>
                        <motion.div
                            className={styles.stickySection}
                            variants={headingVariants}
                        >
                            <ButtonText text="difference" />
                            <h2>
                                Experience Institutional
                                Grade <span> Trading </span> Conditions
                            </h2>
                        </motion.div>
                    </div>

                    <div className={styles.items}>
                        {cards.map((card, i) => {
                            const isActive = highlightedIndex === i;

                            return (
                                <motion.div
                                    key={i}
                                    className={styles.iconGrid}
                                    variants={cardVariants}
                                    animate={isActive ? 'hover' : 'rest'}
                                    initial="rest"
                                    onHoverStart={() => setManualHover(i)}
                                    onHoverEnd={() => {
                                        setManualHover(null);
                                        setActiveIndex(i);
                                    }}
                                >
                                    <motion.div
                                        className={styles.icon}
                                        variants={{
                                            rest: { borderColor: 'rgba(255,255,255,0.10)' },
                                            hover: {
                                                borderColor: '#149EF5',
                                                transition: { duration: 0.35, ease: 'easeOut' },
                                            },
                                        }}
                                    >
                                        <motion.img
                                            src={card.icon}
                                            alt={card.alt}
                                            variants={{
                                                rest: {
                                                    filter: 'brightness(1) drop-shadow(0 0 0px transparent)',
                                                    scale: 1,
                                                },
                                                hover: {
                                                    filter: 'brightness(1.3) drop-shadow(0 0 8px rgba(20,158,245,0.55))',
                                                    scale: 1.12,
                                                    transition: { duration: 0.35, ease: 'easeOut' },
                                                },
                                            }}
                                        />
                                    </motion.div>

                                    <motion.div
                                        className={styles.textbox}
                                        variants={{
                                            rest: {
                                                scale: 1,
                                                boxShadow: '0 0 0px transparent',
                                            },
                                            hover: {
                                                scale: 1.025,
                                                boxShadow: '0 8px 32px rgba(20, 158, 245, 0.12)',
                                                transition: { duration: 0.35, ease: 'easeOut' },
                                            },
                                        }}
                                    >
                                        <div className={styles.inner}>
                                            <motion.h3
                                                variants={{
                                                    rest: { color: '#FFFFFF', x: 0 },
                                                    hover: {
                                                        color: '#149EF5',
                                                        x: 4,
                                                        transition: { duration: 0.3, ease: 'easeOut' },
                                                    },
                                                }}
                                            >
                                                {card.title}
                                            </motion.h3>
                                            <motion.p
                                                variants={{
                                                    rest: { opacity: 0.7, y: 0 },
                                                    hover: {
                                                        opacity: 1,
                                                        y: -2,
                                                        transition: { duration: 0.3, ease: 'easeOut' },
                                                    },
                                                }}
                                            >
                                                {card.desc}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
