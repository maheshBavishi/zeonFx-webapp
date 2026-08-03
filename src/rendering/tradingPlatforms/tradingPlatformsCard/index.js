'use client';
import React from 'react';
import styles from './tradingPlatformsCard.module.scss';
import Button from '@/components/button';
import { motion } from 'framer-motion';

const MetaTrader = '/assets/images/MetaTrader.png';
const Webterminal = '/assets/images/webterminal.png';
const IPhone = '/assets/images/iPhone.png';
const True = '/assets/icons/true.svg';
const Window = '/assets/icons/window.svg';
const Macos = '/assets/icons/macos.svg';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const iconListVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const iconTextVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TradingPlatformsCard() {
    return (
        <div className={styles.tradingPlatformsCard}>
            <div className='container'>
                <div className={styles.allCard}>
                    {/* Card 1: MetaTrader 5 */}
                    <motion.div
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.grid}>
                            <div className={styles.leftAlignment}>
                                <motion.h2 variants={fadeUp}>
                                    MetaTrader <span> 5</span>
                                </motion.h2>
                                <motion.p variants={fadeUp}>
                                    MetaTrader 5 is the world's most widely used trading platform, and the professional standard for serious traders. It offers advanced charting with more than 80 indicators, depth of market, and full support for Expert Advisors and algorithmic trading. Run it on Windows, Mac,
                                    iOS, and Android, all connected to your one ZeonFX account.
                                </motion.p>
                                <motion.div className={styles.allIconAlignment} variants={iconListVariants}>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            80+ indicators
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            EAs & algo trading
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Depth of market
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Desktop + mobile
                                        </span>
                                    </motion.div>
                                </motion.div>
                                <motion.div className={styles.twoBtnAlignment} variants={fadeUp}>
                                    <img src={Window} alt='Window' />
                                    <img src={Macos} alt='Macos' />
                                </motion.div>
                            </div>
                            <motion.div className={styles.img} variants={imageVariants}>
                                <motion.img
                                    src={MetaTrader}
                                    alt='MetaTrader'
                                    animate={{ y: [-6, 6, -6] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card 2: ZeonFX Web Terminal */}
                    <motion.div
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.grid}>
                            <div className={styles.leftAlignment}>
                                <motion.h2 variants={fadeUp}>
                                    ZeonFX <span> Web</span> Terminal
                                </motion.h2>
                                <motion.p variants={fadeUp}>
                                    The ZeonFX Web Terminal runs in any modern browser with nothing to install. It features a multi-chart layout so you can watch several markets at once, TradingView charts built in, and one-click trading. It shares the same login as your MT5 account,
                                    so you can switch between them freely.
                                </motion.p>
                                <motion.div className={styles.allIconAlignment} variants={iconListVariants}>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Multi-chart layout
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            TradingView charts
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            One-click trading
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Same login as MT5
                                        </span>
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={fadeUp}>
                                    <Button text="LAUNCH TERMINAL" />
                                </motion.div>
                            </div>
                            <motion.div className={styles.img} variants={imageVariants}>
                                <motion.img
                                    src={Webterminal}
                                    alt='Webterminal'
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card 3: MT5 Mobile App */}
                    <motion.div
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.grid}>
                            <div className={styles.leftAlignment}>
                                <motion.h2 variants={fadeUp}>
                                    <span> MT5</span> Mobile App
                                </motion.h2>
                                <motion.p variants={fadeUp}>
                                    Trade anywhere with MetaTrader 5 on Android and iOS. Get full access to charts, indicators, and one-tap order
                                    execution from your phone, fully synced with your account.
                                </motion.p>
                                <motion.div className={styles.allIconAlignment} variants={iconListVariants}>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Trade Anywhere
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Real-Time Market Data
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Advanced Charting Tools
                                        </span>
                                    </motion.div>
                                    <motion.div className={styles.iconText} variants={iconTextVariants}>
                                        <img src={True} alt='True' />
                                        <span>
                                            Instant Order Execution
                                        </span>
                                    </motion.div>
                                </motion.div>
                                <motion.div className={styles.twoBtnAlignment} variants={fadeUp}>
                                    <img src={Window} alt='Window' />
                                    <img src={Macos} alt='Macos' />
                                </motion.div>
                            </div>
                            <motion.div className={styles.img} variants={imageVariants}>
                                <motion.img
                                    src={IPhone}
                                    alt='IPhone'
                                    animate={{ y: [-7, 7, -7] }}
                                    transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
