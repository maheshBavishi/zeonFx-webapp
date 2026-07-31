'use client'
import React from 'react'
import styles from './accountHero.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
import { motion } from 'framer-motion';
const Commodities = '/assets/video/accounthero.mp4';
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
export default function AccountHero() {
    return (
        <div className={styles.metalsBanner}>
            {/* Video fades in independently */}
            <motion.video
                src={Commodities}
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
                            <ButtonText text="Crypto CFDs" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 variants={fadeUp}>
                            One account.  <br />
                            One <span> clear </span> choice.
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={fadeUpSlow}>
                            Every accounts gets the same fast STP execution, negative balance protection, and segregated funds. The difference is pricing and service, so you pick
                            what fits how you trade.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className={styles.buttonAlignment}
                            variants={buttonsFade}
                        >
                            <Button primary text="OPEN LIVE ACCOUNT" />
                            <Button outline text="TRY DEMO" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
