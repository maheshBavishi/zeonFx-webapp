'use client';
import React from 'react';
import styles from './ourStory.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const Story = '/assets/images/stoy.png';

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
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function OurStory() {
    return (
        <div className={styles.ourStory}>
            <div className='container'>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={imageVariants}
                    >
                        <img
                            src={Story}
                            alt='Story'
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
                            <ButtonText text="about us" />
                        </motion.div>

                        <div>
                            <motion.div className={styles.content} variants={itemFadeUp}>
                                <h3>
                                    Our <span> Story</span>
                                </h3>
                                <p>
                                    ZeonFX was built by people who believed trading could be better. Tighter pricing, faster execution, and tools that actually help traders make better decisions. We set out to combine the reliability of established platforms like MetaTrader 5 with a modern browser terminal, transparent pricing, and behaviour tools that put traders
                                    in control.
                                </p>
                            </motion.div>

                            <motion.div className={styles.content} variants={itemFadeUp}>
                                <h3>
                                    Mission and <span> Values</span>
                                </h3>
                                <p>
                                    Our mission is to give traders the technology, pricing, and support they need to trade with confidence. We do that by keeping our approach
                                    client-first, our pricing transparent, and our platform fast and dependable.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

