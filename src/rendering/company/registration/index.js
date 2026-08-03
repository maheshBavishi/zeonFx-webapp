'use client';
import React from 'react';
import styles from './registration.module.scss';
import { motion } from 'framer-motion';

const Key = '/assets/images/key.png';
const True = '/assets/icons/true.svg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const features = [
    "Client-first approach in everything we build",
    "Transparent and fair trading conditions",
    "Innovative technology, from the Web Terminal to Trade Guard",
    "A genuine commitment to trader success",
];

export default function Registration() {
    return (
        <div className={styles.registration}>
            <div className='container'>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemFadeUp}>
                            Company & <span> Registration</span>
                        </motion.h2>

                        <motion.p variants={itemFadeUp}>
                            ZeonFX Limited is registered in Saint Lucia, Registration Number 2026-00156. Registered office: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia. ZeonFX Limited operates as an execution-only broker and does not provide
                            investment advice.
                        </motion.p>

                        <motion.h3 variants={itemFadeUp}>
                            What We stand for
                        </motion.h3>

                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.icontext}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={True} alt='True' />
                                <span>{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className={styles.img}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={imageVariants}
                    >
                        <img src={Key} alt='Key' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

