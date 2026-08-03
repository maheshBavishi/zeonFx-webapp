'use client';
import React from 'react';
import styles from './confidence.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const Leaderboard = '/assets/images/leaderboard.png';

const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const contentContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2
        }
    }
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function Confidence() {
    return (
        <div className={styles.confidence}>
            <div className='container'>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={Leaderboard}
                            alt='Leaderboard'
                            whileHover={{ scale: 1.02, y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={contentContainerVariants}
                    >
                        <motion.div variants={itemFadeUp}>
                            <ButtonText text="social trading" />
                        </motion.div>

                        <motion.h2 variants={itemFadeUp}>
                            Follow the Best.<br />
                            <span> Trade </span> with Confidence.
                        </motion.h2>

                        <motion.p variants={itemFadeUp}>
                            Social Trading lets you browse a list of traders ranked by performance and risk, then automatically replicate their positions in your own account. You decide how much to allocate and can set your own limits. When they trade,
                            you trade, in proportion to your allocation.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

