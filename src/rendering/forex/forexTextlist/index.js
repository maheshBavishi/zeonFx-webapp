"use client";

import React from 'react';
import styles from './forexTextlist.module.scss';
import { motion } from 'framer-motion';

const defaultStats = [
    '50+ Currency pairs',
    'Spreads from 0.0',
    '1:1000 Max leverage',
    '24/5 Market hours.',
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function ForexTextlist({ data = defaultStats }) {
    const listData = data && data.length > 0 ? data : defaultStats;

    return (
        <div className={styles.forexTextlist}>
            <div className='container'>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {listData.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.06,
                                transition: { duration: 0.25, ease: 'easeOut' },
                            }}
                        >
                            <motion.p
                                whileHover={{
                                    color: '#149EF5',
                                    transition: { duration: 0.25 },
                                }}
                            >
                                {stat}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
