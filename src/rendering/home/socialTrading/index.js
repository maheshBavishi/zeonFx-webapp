'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './socialTrading.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';


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

export default function SocialTrading() {
    return (
        <div className={styles.socialTrading}>
            <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785485064/Social_Trading_dgcndi.mp4' alt="SocialTradingVideo" loop muted autoPlay playsInline></video>
            <div className={styles.blur}></div>
            <div className={styles.contentAlignment}>
                <motion.div
                    className='container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className={styles.center} variants={itemVariants}>
                        <ButtonText text="Social trading" />
                    </motion.div>
                    <motion.h2 variants={itemVariants}>
                        Follow top traders live.
                        You set the <span> risk </span> limits.
                    </motion.h2>
                    <motion.p variants={itemVariants}>
                        Copy top-performing traders in real time and share returns in proportion to your investment. You stay in control of your risk settings at all times. Social Trading carry the same market risk as trading yourself, and past performance
                        is not a guide to future results.
                    </motion.p>
                    <motion.div className={styles.buttonCenter} variants={itemVariants}>
                        <Button primary text="Explore social trading" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
