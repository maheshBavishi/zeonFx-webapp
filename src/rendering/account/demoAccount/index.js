"use client";

import React from 'react';
import styles from './demoAccount.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';

const TrueIcon = '/assets/icons/true.svg';

const benefitsList = [
    'Live market prices and conditions',
    'Virtual funds you set and can reset',
    'Full access to MT5 and the Web Terminal',
    'All six asset classes',
    'No time pressure and no deposit required'
];

export default function DemoAccount() {
    // Card main entrance container variants
    const cardVariants = {
        hidden: { opacity: 0, y: 45, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.14,
                delayChildren: 0.15
            }
        }
    };

    // Stagger item fade up
    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Stagger container for benefits list
    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Benefits list item animation
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className={styles.demoAccount}>
            <div className='container'>
                <motion.div
                    className={styles.box}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={styles.boxHeader}>
                        <motion.div variants={fadeUp}>
                            <ButtonText text="Try demo" />
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            Demo Account
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Practice on the real platform with virtual funds. A ZeonFX demo mirrors live market conditions so you can test strategies, learn MT5 and the Web Terminal, and build confidence before you
                            fund a live account. No deposit, no risk to your money.
                        </motion.p>
                    </div>

                    <div className={styles.boxBody}>
                        <div>
                            <motion.h3 variants={fadeUp}>
                                Benefits of demo account
                            </motion.h3>

                            <motion.div
                                className={styles.allIcongrid}
                                variants={listContainerVariants}
                            >
                                {benefitsList.map((text, i) => (
                                    <motion.div
                                        key={i}
                                        className={styles.grid}
                                        variants={listItemVariants}
                                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                    >
                                        <img src={TrueIcon} alt='TrueIcon' />
                                        <span>{text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button text="OPEN A FREE DEMO ACCOUNT" primary />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

