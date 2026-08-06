'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './homeBoxList.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';

const SecureImage = '/assets/images/secure.png';
const VolumeImage = '/assets/images/volume.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 15
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.2
        }
    }
};

export default function HomeBoxList() {
    return (
        <div className={styles.homeBoxList}>
            <div className='container'>
                <motion.div
                    className={styles.box}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={styles.text}>
                        <motion.div variants={itemVariants}>
                            <ButtonText text="withdrawals" />
                        </motion.div>
                        <motion.h2 variants={itemVariants}>
                            Fast & Secure
                            <span>
                                Withdrawals
                            </span>
                        </motion.h2>
                        <motion.p variants={itemVariants}>
                            Access your funds quickly with reliable withdrawals and secure payment methods designed for a smooth
                            trading experience.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Button text="learn more" primary />
                        </motion.div>
                    </div>
                    <motion.div className={styles.imageAlignment} variants={imageVariants}>
                        <img src={SecureImage} alt="SecureImage" />
                    </motion.div>
                </motion.div>
                <motion.div
                    className={styles.box}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={styles.text}>
                        <motion.div variants={itemVariants}>
                            <ButtonText text="trade and win" />
                        </motion.div>
                        <motion.h2 variants={itemVariants}>
                            Trade volume, <br /> unlock<span> prizes</span>
                        </motion.h2>
                        <motion.p variants={itemVariants}>
                            Turn every trade into an opportunity to earn more. Participate in our exclusive trading competitions, climb the leaderboard,
                            and compete for cash prizes, luxury rewards, and exclusive trading benefits.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Button text="learn more" primary />
                        </motion.div>
                    </div>
                    <motion.div className={styles.imageAlignment} variants={imageVariants}>
                        <img src={VolumeImage} alt="VolumeImage" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

