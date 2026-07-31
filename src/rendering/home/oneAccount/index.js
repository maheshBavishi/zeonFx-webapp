"use client";

import styles from './oneAccount.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';


export default function OneAccount() {
    return (
        <div className={styles.oneAccount}>
            <div className={styles.svgline}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="84" viewBox="0 0 1920 84" fill="none">
                    <path d="M0 0H340L428.5 83H1502.5L1585.5 0L1920 1" stroke="white" strokeOpacity="0.2" />
                    <path d="M0 0H340L428.5 83H1502.5L1585.5 0L1920 1" stroke="url(#paint0_linear_6283_1041)" />
                    <defs>
                        <linearGradient id="paint0_linear_6283_1041" x1="0" y1="41.5" x2="1920" y2="41.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#046FC9" stopOpacity="0" />
                            <stop offset="0.3" stopColor="#046FC9" />
                            <stop offset="0.7" stopColor="#046FC9" />
                            <stop offset="1" stopColor="#046FC9" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='container'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <ButtonText text="Account" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            One Account. <span> Unlimited </span> Potential.
                        </motion.h2>

                        <motion.div
                            className={styles.box}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className={styles.innerBox}>
                                <div className={styles.header}>
                                    <h3>
                                        Standard
                                    </h3>
                                    <p>
                                        The simplest way to start
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.body}>
                                    <div className={styles.text}>
                                        <p>
                                            Minimum Deposit:
                                        </p>
                                        <span>
                                            $10
                                        </span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>
                                            Spreads
                                        </p>
                                        <span>
                                            From 0.10 Pips
                                        </span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>
                                            Commission
                                        </p>
                                        <span>
                                            0
                                        </span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>
                                            Leverage
                                        </p>
                                        <span>
                                            up to 1:1000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.buttonAlignment}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button text="Open Account" primary />
                        </motion.div>
                    </div>
                    <div className={styles.items}>
                        <motion.video
                            src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785485593/upscaled-video_1_oevujc.mp4'
                            alt="Account"
                            loop
                            muted
                            autoPlay
                            playsInline
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                        ></motion.video>
                    </div>
                </div>
            </div>
        </div>
    )
}
