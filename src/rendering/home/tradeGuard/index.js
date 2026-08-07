"use client";

import styles from './tradeGuard.module.scss';
import ButtonText from '@/components/buttonText';
import TapIcon from '@/icons/tapIcon';
import HandIcon from '@/icons/handIcon';
import CupIcon from '@/icons/cupIcon';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import Link from 'next/link';


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

export default function TradeGuard() {
    return (
        <div className={styles.tradeGuard}>
            <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785485015/0726_nihtbf.mp4' alt="Lock" loop muted autoPlay playsInline></video>
            <div className={styles.relative}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className='container'>
                        <motion.div variants={itemVariants}>
                            <ButtonText text="trade guard" />
                        </motion.div>
                        <motion.h2 variants={itemVariants}>
                            Risk Management
                            Made <span> Simple</span>
                        </motion.h2>
                        <motion.div className={styles.allIconText} variants={containerVariants}>
                            <motion.div className={styles.iconText} variants={itemVariants}>
                                <TapIcon />
                                <span> One tap pauses all new orders.</span>
                            </motion.div>
                            <motion.div className={styles.iconText} variants={itemVariants}>
                                <HandIcon />
                                <span> Set a cap. We stop you at it.</span>
                            </motion.div>
                            <motion.div className={styles.iconText} variants={itemVariants}>
                                <CupIcon />
                                <span> Force a break after a losing streak.</span>
                            </motion.div>
                        </motion.div>
                        <motion.p variants={itemVariants}>
                            Trade Guard is a set of behavior controls built to protect you from your worst trading days. Trading Lock pauses all new orders in one tap so a bad session cannot spiral. The Daily Loss Limit lets you set a hard cap on how much you are willing to lose in a day, and enforces it. The Cool-Down Timer steps in after a losing streak and asks you to take a break before you trade again. Discipline is the edge most traders are missing,
                            so we built it into the account.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Link href='/tools'>
                                <Button primary text="Learn about Trade Guard" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
