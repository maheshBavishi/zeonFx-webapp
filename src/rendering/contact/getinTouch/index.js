'use client';
import React from 'react';
import styles from './getinTouch.module.scss';
import Button from '@/components/button';
import { motion } from 'framer-motion';

const CallIcon = '/assets/icons/call.svg';
const MailIcon = '/assets/icons/mail.svg';
const LocationIcon = '/assets/icons/location.svg';

const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const leftColumnVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const formVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const fieldFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function GetinTouch() {
    return (
        <div className={styles.getinTouch}>
            <div className='container'>
                <motion.div
                    className={styles.box}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={boxVariants}
                >
                    <motion.div
                        className={styles.items}
                        variants={leftColumnVariants}
                    >
                        <motion.h2 variants={itemFadeUp}>
                            Get in <span> Touch</span>
                        </motion.h2>

                        <div>
                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={CallIcon} alt='CallIcon' />
                                <span> +1 758 572 5128</span>
                            </motion.div>

                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={MailIcon} alt='MailIcon' />
                                <span> support@zeonfx.com</span>
                            </motion.div>

                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={LocationIcon} alt='LocationIcon' />
                                <div>
                                    <h3>
                                        Registered office:
                                    </h3>
                                    <p>
                                        Ground Floor, The Sotheby Building,
                                        Rodney Village, Rodney Bay, Gros Islet,
                                        Saint Lucia.
                                    </p>
                                    <br />
                                    <br />
                                    <h3>
                                        Physical office:
                                    </h3>
                                    <p>
                                        Office 4, 25 Corinth Hilltop, Corinth,
                                        Gros-Islet, Saint Lucia.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        variants={formVariants}
                    >
                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>
                                NAME
                            </label>
                            <input type='text' />
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>
                                EMAIL
                            </label>
                            <input type='text' />
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>
                                TOPIC
                            </label>
                            <input type='text' />
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>
                                MESSAGE
                            </label>
                            <textarea></textarea>
                        </motion.div>

                        <motion.div variants={fieldFadeUp}>
                            <Button text="SEND MESSAGE" primary />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

