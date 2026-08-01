"use client";

import React from 'react';
import styles from './standardAccount.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const ROWS = [
    { feature: 'Money at risk', demo: 'None (virtual)', standard: 'Your real capital' },
    { feature: 'Market conditions', demo: 'Live prices', standard: 'Live prices' },
    { feature: 'Emotions', demo: 'Low pressure', standard: 'Real pressure' },
    { feature: 'Best for', demo: 'Learning and testing', standard: 'Real trading and results' },
];

export default function StandardAccount() {
    // Header stagger variants
    const headerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.1
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Table container variants
    const tableContainerVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
                delayChildren: 0.25
            }
        }
    };

    // Row animation variants
    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className={styles.standardAccount}>
            <div className='container'>
                <motion.div
                    variants={headerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className={styles.center} variants={fadeUp}>
                        <ButtonText text="The difference" />
                    </motion.div>

                    <motion.h2 variants={fadeUp}>
                        Demo <span> vs </span> Standard Account
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        A demo is the right place to learn mechanics and test ideas. It cannot fully replicate the psychology of trading real money, so treat a smooth demo as a start, not a
                        guarantee. Past demo performance is not indicative of future live results.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.tableWrap}
                    variants={tableContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>DEMO</th>
                                <th>STANDARD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row, i) => (
                                <motion.tr key={i} variants={rowVariants}>
                                    <td>{row.feature}</td>
                                    <td>{row.demo}</td>
                                    <td>{row.standard}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.div
                    className={styles.bottomText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p>
                        Spreads shown are indicative and may vary with market conditions. Leverage shown
                        is the maximum available and depends on account type and instrument.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}


