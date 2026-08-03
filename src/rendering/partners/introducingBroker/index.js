'use client';
import React from 'react';
import styles from './introducingBroker.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const BrokerImage = '/assets/images/broker.png';
const True = '/assets/icons/true.svg';

const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const features = [
    "Competitive, transparent payout structures",
    "Real-time tracking and reporting",
    "Dedicated partner support",
    "A product traders actually want to use",
    "Marketing assets and creatives provided",
    "Fast, reliable payouts",
];

export default function IntroducingBroker() {
    return (
        <div className={styles.introducingBroker}>
            <div className='container'>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={imageVariants}
                    >
                        <motion.img
                            src={BrokerImage}
                            alt='BrokerImage'
                            whileHover={{ scale: 1.02, y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemFadeUp}>
                            <ButtonText text='IB' />
                        </motion.div>

                        <motion.h2 variants={itemFadeUp}>
                            Introducing Broker <span> (IB)</span>
                        </motion.h2>

                        <motion.p variants={itemFadeUp}>
                            The IB program is built for partners who introduce and support traders directly. Earn ongoing commission based on the trading activity of the clients you refer, with transparent real-time reporting and a dedicated
                            partner manager. Ideal for trading educators, community leaders, and regional partners.
                        </motion.p>

                        <motion.h3 variants={itemFadeUp}>
                            WHY PARTNER WITH ZEONFX
                        </motion.h3>

                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.icontext}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={True} alt='True' />
                                <span>{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

