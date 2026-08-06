"use client";

import React from 'react';
import styles from './whyZeonfxHero.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';
const whyZeonfxHeroVideo = '/assets/video/whyZeonfxHero.mp4';
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUpSlow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

const buttonsFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};


export default function WhyZeonfxHero() {
    return (
        <div className={styles.whyZeonfxHero}>
            {/* Video fades in independently */}
            <motion.video
                src={whyZeonfxHeroVideo}
                autoPlay
                loop
                muted
                playsInline
                variants={fadeIn}
                initial="hidden"
                animate="visible"
            />

            <div className={styles.contentAlignment}>
                <div className='container'>
                    {/* Staggered content block */}
                    <motion.div
                        className={styles.content}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Tag */}
                        <motion.div variants={fadeUp}>
                            <ButtonText text="Multi Asset Broker" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 variants={fadeUp}>
                            Why Traders Choose <span> ZeonFX.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={fadeUpSlow}>
                            Modern platforms, transparent pricing, and tools built to keep you disciplined. Everything a serious trader
                            needs, in one account, with none of the noise.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className={styles.buttonAlignment}
                            variants={buttonsFade}
                        >
                            <a aria-label='OPEN LIVE ACCOUNT' href='https://client.zeonfx.com/en/register' target='_blank'>
                                <Button text="OPEN LIVE ACCOUNT" primary />
                            </a>
                            <a aria-label='TRY DEMO' href='https://client.zeonfx.com/en/register' target='_blank'>
                                <Button text="TRY DEMO" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
