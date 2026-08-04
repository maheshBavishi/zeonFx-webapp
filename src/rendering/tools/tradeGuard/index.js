'use client'
import React from 'react'
import styles from './tradeGuard.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const Trading = '/assets/images/Trading.png';
const Loss = '/assets/images/Loss.png';
const Timer = '/assets/images/Timer.png';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function TradeGuard() {
    return (
        <div className={styles.tradeGuard}>
            <div className='container'>
                <motion.div 
                    className={styles.sectiontitle}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <ButtonText text="trade guard" />
                    <h2>
                        Risk Management <br />
                        Made <span> Simple</span>
                    </h2>
                    <p>
                        Trade Guard is a set of behaviour controls that protect you from emotional trading. Trading Lock pauses all new orders instantly. The Daily Loss Limit lets you cap your daily loss and enforces it. The Cool-Down Timer steps in after consecutive losses and asks you to take a break.
                        Discipline is a skill, and Trade Guard makes it easier to keep.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.inner}>
                            <div className={styles.text}>
                                <h3>
                                    Trading Lock
                                </h3>
                                <p>
                                    Pause all new orders in a tap
                                </p>
                            </div>
                            <div className={styles.img}>
                                <img src={Trading} alt='Trading' />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.inner}>
                            <div className={styles.text}>
                                <h3>
                                    Daily Loss Limit
                                </h3>
                                <p>
                                    Set a hard cap and we enforce it
                                </p>
                            </div>
                            <div className={styles.img}>
                                <img src={Loss} alt='Loss' />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.inner}>
                            <div className={styles.text}>
                                <h3>
                                    Cool-Down Timer
                                </h3>
                                <p>
                                    Enforce a break after a losing streak
                                </p>
                            </div>
                            <div className={styles.img}>
                                <img src={Timer} alt='Timer' />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
