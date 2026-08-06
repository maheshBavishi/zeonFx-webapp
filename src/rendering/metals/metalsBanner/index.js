'use client'

import styles from './metalsBanner.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';

const MetalsHero = '/assets/video/metalshero.mp4';

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

export default function MetalsBanner() {
    return (
        <div className={styles.metalsBanner}>
            <motion.video
                src={MetalsHero}
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
                            <ButtonText text="metals trading" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 variants={fadeUp}>
                            Gold and Silver, <br />
                            Priced the Way the <br />
                            Market   <span> Really</span> Moves.
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={fadeUpSlow}>
                            Trade XAU/USD, XAG/USD, platinum, and palladium with pricing that reflects the real market. Precious metals belong in every trader's toolkit
                            as both a speculative and a defensive instrument.
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
    )
}
