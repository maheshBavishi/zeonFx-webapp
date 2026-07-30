'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './startTrading.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';

const UserIcon = '/assets/images/user.png';
const SecIcon = '/assets/images/sec.png';
const ThreeIcon = '/assets/images/three.png';
const fourIcon = '/assets/images/four.png';
const TownImage = '/assets/images/town.png';

const stepsData = [
    {
        id: "01",
        title: "Register",
        description: "Create your ZeonFX account online. It takes only a few minutes.",
        icon: UserIcon
    },
    {
        id: "02",
        title: "Verify",
        description: "Submit your ID and proof of address. Verification is handled quickly.",
        icon: SecIcon
    },
    {
        id: "03",
        title: "Fund",
        description: "Deposit by card, bank transfer, e-wallet, or crypto. Funding clears fast.",
        icon: ThreeIcon
    },
    {
        id: "04",
        title: "Trade",
        description: "Log in to MT5 or the ZeonFX Web Terminal, pick your market, and start trading.",
        icon: fourIcon
    }
];

export default function StartTrading() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % stepsData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.startTrading}>
            <div className={styles.townImage}>
                <img src={TownImage} alt="TownImage" />
            </div>
            <div className='container'>
                <div className={styles.sectionheader}>
                    <div>
                        <ButtonText text="get started" />
                        <h2>
                            Start Trading in  4 <span> Simple </span> Steps
                        </h2>
                        <div className={styles.btnAlignment}>
                            <Button text="Open Live account" primary />
                            <Button text="Try Demo" />
                        </div>
                    </div>
                    <div className={styles.img}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeStep}
                                src={stepsData[activeStep].icon}
                                alt={`Step ${stepsData[activeStep].id}`}
                                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.85, y: -15 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.grid}>
                    {stepsData.map((step, index) => {
                        const isActive = activeStep === index;
                        return (
                            <div className={styles.items} key={step.id} onClick={() => setActiveStep(index)}>
                                <motion.div
                                    className={`${styles.inner} ${isActive ? styles.active : ''}`}
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1.02 : 1,
                                        y: isActive ? -1 : 0,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div>
                                        <span>STEP</span>
                                        <h3>{step.id}</h3>
                                    </div>
                                    <div>
                                        <h4>{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}


