"use client";
import styles from './whyZeonfx.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';
const Spreads = '/assets/images/Spreads.png';
const Execution = '/assets/images/execution.png';
const Markets = '/assets/images/markets.png';
const Web = '/assets/images/web.png';
const Safety = '/assets/images/safety.png';
const Protected = '/assets/images/protected.png';

const whyData = [
    {
        title: "Tight Spreads",
        description: "Institutional liquidity with spreads from 0.0 pips on the Raw ECN account. Clear, upfront pricing with no hidden markup.",
        image: Spreads
    },
    {
        title: "Fast STP execution",
        description: "Straight-through processing routed to liquidity providers with low latency and no dealing-desk conflict of interest.",
        image: Execution
    },
    {
        title: "100+ markets",
        description: "Forex, indices, metals, commodities, stocks, and crypto CFDs. Six asset classes from a single account.",
        image: Markets
    },
    {
        title: "MT5 and Web Terminal",
        description: "MetaTrader 5 for power users and the ZeonFX Web Terminal for browser-based multi-chart trading. One login for both.",
        image: Web
    },
    {
        title: "Trader safety",
        description: "Negative balance protection on every account, so your balance can never fall below zero, plus Trade Guard risk controls.",
        image: Safety
    },
    {
        title: "Funds protected:",
        description: "Client funds held in segregated accounts, kept separate from company operating capital.",
        image: Protected
    }
];

export default function WhyZeonfx() {
    return (
        <div className={styles.whyZeonfx}>
            <div className={styles.videosize}>
                <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785406213/0727_2_1_cccprp.mp4' alt="AboutZeonfx" autoPlay muted loop playsInline></video>
            </div>
            <div className='container'>
                <div className={styles.grid}>

                    <div className={styles.items}>
                        <ButtonText text="Why zeonfx" />
                        <h2>
                            Why choose <span> ZeonFX </span>
                        </h2>
                        <div className={styles.allBoxAlignment}>
                            <motion.div
                                style={{ display: 'flex', gap: '24px', width: 'max-content' }}
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            >
                                {[...whyData, ...whyData].map((item, index) => (
                                    <motion.div
                                        className={styles.box}
                                        key={index}
                                        whileHover={{
                                            boxShadow: '0 0 1px rgba(20, 158, 245, 0.4)',
                                            transition: { duration: 0.3, ease: 'easeOut' }
                                        }}
                                    >
                                        <div className={styles.inner}>
                                            <div className={styles.text}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className={styles.image}>
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
