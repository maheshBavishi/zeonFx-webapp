"use client";
import styles from './herobanner.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';
const HeroVideo = '/assets/video/hero.mp4';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
};

export default function Herobanner() {
    return (
        <div className={styles.herobanner}>
            <div className={styles.video}>
                <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785730521/5804767_Coll_wavebreak_Entrepreneur_1920x1080_cc0msp.mp4' alt={HeroVideo} loop muted autoPlay />
            </div>
            <div className={styles.contentAlignment}>
                <motion.div
                    className='container'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <ButtonText text="Multi Asset Broker" />
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                        Trade Forex & CFDs with <span> Confidence</span>
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        Access global markets with competitive spreads, fast execution,
                        and institutional-grade platforms. One account, every market.
                    </motion.p>
                    <motion.div variants={itemVariants} className={styles.buttonAlignment}>
                        <Button text="OPEN LIVE ACCOUNT" primary />
                        <Button text="TRY DEMO" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
