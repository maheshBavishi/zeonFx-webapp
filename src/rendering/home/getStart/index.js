'use client'

import { motion } from 'framer-motion';
import styles from './getStart.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20
        }
    }
};

export default function GetStart() {
    return (
        <div className={styles.getStart}>
            <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785485031/CTA-Video_ost9zb.mp4' alt="CtaVideo" autoPlay muted loop playsInline ></video>
            <div className={styles.contentAlignment}>
                <motion.div
                    className='container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className={styles.bottomSpacing}>
                        <motion.div className={styles.center} variants={itemVariants}>
                            <ButtonText text="Start Today" />
                        </motion.div>
                        <motion.h2 variants={itemVariants}>
                            Your Edge Starts, <span>  Here</span>
                        </motion.h2>
                        <motion.p variants={itemVariants}>
                            Open a live account in minutes. Institutional pricing, lightning-fast execution, and
                            funds secured in segregated accounts.
                        </motion.p>
                        <motion.div className={styles.btnAlignment} variants={itemVariants}>
                            <Button text="OPEN LIVE ACCOUNT" primary />
                            <Button text="TRY DEMO" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
