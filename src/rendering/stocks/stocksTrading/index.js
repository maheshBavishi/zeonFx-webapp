"use client";

import React from 'react';
import styles from './stocksTrading.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const VisaImage = '/assets/images/visa.png';

export default function StocksTrading() {
    // Stagger animation container for left content
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.16,
                delayChildren: 0.1,
            }
        }
    };

    // Entrance animation for content items
    const itemVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Initial entrance reveal for image container
    const imageRevealVariants = {
        hidden: { opacity: 0, scale: 0.92, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div className={styles.stocksTrading}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={itemVariants}>
                            <ButtonText text="what is Stocks trading" />
                        </motion.div>

                        <motion.h2 variants={itemVariants}>
                            Trade shares without
                            owning <span> shares.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants}>
                            Stock CFDs let you trade the price of a company's shares without owning the underlying stock. That means you can go long or short, use leverage, and trade around earnings
                            and news.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            You get exposure to the world's biggest brands from one account, without the friction of a traditional
                            share-dealing broker.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        variants={imageRevealVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className={styles.imageWrapper}>
                            {/* Ambient glowing backdrop behind floating image */}
                            <motion.div
                                className={styles.ambientGlow}
                                animate={{
                                    opacity: [0.35, 0.65, 0.35],
                                    scale: [0.95, 1.08, 0.95]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Infinite Floating & Gentle Tilt Animation */}
                            <motion.div
                                className={styles.floatingImage}
                                animate={{
                                    y: [-12, 12, -12],
                                    rotate: [-1.2, 1.2, -1.2],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }}
                            >
                                <img src={VisaImage} alt="Visa Stocks Trading" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

