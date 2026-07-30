'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './faqSection.module.scss';
import ButtonText from '@/components/buttonText';
import PlusIcon from '@/icons/plusIcon';

const FaqImage = '/assets/images/faq.png';


/* ─── FAQ data ───────────────────────────────────────────────── */
const FAQS = [
    {
        q: 'What is forex trading?',
        a: 'Forex (foreign exchange) trading is the buying and selling of currencies on the global market. It is the largest and most liquid financial market in the world, with trillions of dollars traded daily.',
    },
    {
        q: 'How much money do I need to start trading?',
        a: 'You can start trading with as little as $100 on a Standard account. However, we recommend starting with at least $500 to manage risk effectively and have enough margin for multiple positions.',
    },
    {
        q: 'What leverage does ZeonFX offer?',
        a: 'ZeonFX offers leverage up to 1:1000 on Standard accounts. Leverage allows you to control a larger position with a smaller deposit, but it also increases risk. Always use leverage responsibly.',
    },
    {
        q: 'Is my money safe with ZeonFX?',
        a: 'Yes. Client funds are held in segregated accounts with tier-1 banks, completely separate from company operating funds. We are regulated and adhere to strict financial standards.',
    },
    {
        q: 'What trading platforms does ZeonFX support?',
        a: 'ZeonFX supports MetaTrader 4 (MT4) and MetaTrader 5 (MT5) — the industry\'s leading platforms available on desktop, web, iOS, and Android.',
    },
];

/* ─── Answer animation ───────────────────────────────────────── */
const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: { height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3, delay: 0.1 } },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: { height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.15 } },
    },
};

/* ─── Icon rotate (+ → ×) ────────────────────────────────────── */
const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};




/* ─── Component ──────────────────────────────────────────────── */
export default function FaqSection({ data }) {
    const [openIdx, setOpenIdx] = useState(null);

    const badgeText = data?.badgeText || 'faqs';
    const title = data?.title || (
        <>
            Frequently asked <span> questions</span>
        </>
    );
    const faqs = data?.faqs || FAQS;
    const image = data?.image || FaqImage;

    const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

    return (
        <div className={styles.faqSection}>
            <div className="container">
                <div className={styles.grid}>

                    {/* ── Left: FAQ accordion ── */}
                    <div className={styles.items}>
                        <ButtonText text={badgeText} />
                        <h2>
                            {title}
                        </h2>

                        <div className={styles.allFaq}>
                            {faqs.map((faq, i) => {
                                const isOpen = openIdx === i;
                                return (
                                    <div
                                        key={i}
                                        className={`${styles.faq} ${isOpen ? styles.faqOpen : ''}`}
                                        onClick={() => toggle(i)}
                                    >
                                        {/* Header row */}
                                        <div className={styles.faqheader}>
                                            <h3>{faq.q}</h3>
                                            <div className={styles.icon}>
                                                <motion.div
                                                    variants={iconVariants}
                                                    animate={isOpen ? 'open' : 'closed'}
                                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                >
                                                    <PlusIcon />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Answer — AnimatePresence for exit animation */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    className={styles.faqAnswer}
                                                    variants={answerVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <p>{faq.a}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Right: image + infinite animation ── */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.img}
                            animate={{
                                y: [0, -18, 0],
                                rotate: [0, 1.5, 0, -1.5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                            }}
                        >
                            <img src={image} alt="FAQ illustration" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
