'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './startTrading.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import classNames from 'classnames';

const defaultUserIcon = '/assets/images/user.png';
const defaultSecIcon = '/assets/images/sec.png';
const defaultThreeIcon = '/assets/images/three.png';
const defaultFourIcon = '/assets/images/four.png';
const defaultTownImage = '/assets/images/town.png';

const defaultStepsData = [
    {
        id: "01",
        title: "Register",
        description: "Create your ZeonFX account online. It takes only a few minutes.",
        icon: defaultUserIcon
    },
    {
        id: "02",
        title: "Verify",
        description: "Submit your ID and proof of address. Verification is handled quickly.",
        icon: defaultSecIcon
    },
    {
        id: "03",
        title: "Fund",
        description: "Deposit by card, bank transfer, e-wallet, or crypto. Funding clears fast.",
        icon: defaultThreeIcon
    },
    {
        id: "04",
        title: "Trade",
        description: "Log in to MT5 or the ZeonFX Web Terminal, pick your market, and start trading.",
        icon: defaultFourIcon
    }
];

export default function StartTrading({
    badgeText = "get started",
    title = (
        <>
            Start Trading in  4 <span> Simple </span> Steps
        </>
    ),
    townImage = defaultTownImage,
    primaryBtnText = "Open Live account",
    secondaryBtnText = "Try Demo",
    stepsData = defaultStepsData,
    fullWidthTitle = false,
    titleMaxWidth,
    onPrimaryClick,
    onSecondaryClick,
    bgchange
}) {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (!stepsData || stepsData.length === 0) return;
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % stepsData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [stepsData]);

    const currentStep = stepsData && stepsData[activeStep] ? stepsData[activeStep] : null;

    return (
        <div className={ classNames(styles.startTrading , bgchange ? styles.bgchange : "") }>
            {townImage && (
                <div className={styles.townImage}>
                    <img src={townImage} alt="TownImage" />
                </div>
            )}
            <div className='container'>
                <div className={styles.sectionheader}>
                    <div>
                        {badgeText && <ButtonText text={badgeText} />}
                        {title && (
                            <h2
                                className={fullWidthTitle ? styles.fullWidth : ''}
                                style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}
                            >
                                {title}
                            </h2>
                        )}
                        <div className={styles.btnAlignment}>
                            {primaryBtnText && (
                                <a aria-label={primaryBtnText} href='https://client.zeonfx.com/en/register' target='_blank'>
                                    <Button text={primaryBtnText} primary onClick={onPrimaryClick} />
                                </a>
                            )}
                            {secondaryBtnText && (
                                <a aria-label={secondaryBtnText} href='https://client.zeonfx.com/en/register' target='_blank'>
                                    <Button text={secondaryBtnText} onClick={onSecondaryClick} />
                                </a>
                            )}
                        </div>
                    </div>
                    {currentStep && currentStep.icon && (
                        <div className={styles.img}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeStep}
                                    src={currentStep.icon}
                                    alt={`Step ${currentStep.id}`}
                                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.85, y: -15 }}
                                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                />
                            </AnimatePresence>
                        </div>
                    )}
                </div>
                {stepsData && stepsData.length > 0 && (
                    <div className={styles.grid}>
                        {stepsData.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <div className={styles.items} key={step.id || index} onClick={() => setActiveStep(index)}>
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
                )}
            </div>
        </div>
    )
}



