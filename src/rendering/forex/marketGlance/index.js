'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketGlance.module.scss';
import ButtonText from '@/components/buttonText';
const Usd = '/assets/icons/usd.svg';
const Dolor = '/assets/icons/dolor.svg';
const Vec2 = '/assets/icons/vec2.svg';
const Vec3 = '/assets/icons/vec3.svg';
const Vec4 = '/assets/icons/vec4.svg';
const Vec5 = '/assets/icons/vec5.svg';
const Vec6 = '/assets/icons/vec6.svg';

/* ─── Table data ─────────────────────────────────────────────── */
const ROWS = [
    { pair: 'EUR/USD', flag: Usd, desc: 'Euro / US Dollar', spread: '0.0', leverage: '1:1000' },
    { pair: 'GBP/USD', flag: Usd, desc: 'British Pound / US Dollar', spread: '0.1', leverage: '1:1000' },
    { pair: 'USD/JPY', flag: Usd, desc: 'US Dollar / Japanese Yen', spread: '0.1', leverage: '1:1000' },
    { pair: 'AUD/USD', flag: Usd, desc: 'Australian Dollar / US Dollar', spread: '0.2', leverage: '1:1000' },
    { pair: 'USD/CAD', flag: Usd, desc: 'US Dollar / Canadian Dollar', spread: '0.2', leverage: '1:1000' },
    { pair: 'USD/CHF', flag: Usd, desc: 'US Dollar / Swiss Franc', spread: '0.2', leverage: '1:1000' },
    { pair: 'EUR/GBP', flag: Usd, desc: 'Euro / British Pound', spread: '0.3', leverage: '1:1000' },
];

export default function MarketGlance() {
    return (
        <div className={styles.marketGlance}>
            <div className="container">
                <div className={styles.relativeSection}>
                    {/* Dolor — top-left: float up-down */}
                    <div className={styles.dolorIcon}>
                        <motion.img
                            src={Dolor} alt="Dolor"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Vec4 — top-right: slow spin */}
                    <div className={styles.vec4}>
                        <motion.img
                            src={Vec4} alt="Vec4"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Vec5 — bottom-left: swing left-right */}
                    <div className={styles.vec5}>
                        <motion.img
                            src={Vec5} alt="Vec5"
                            animate={{ x: [0, 8, 0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Vec6 — bottom-right: pulse scale + opacity */}
                    <div className={styles.vec6}>
                        <motion.img
                            src={Vec6} alt="Vec6"
                            animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                    {/* ── Header ── */}
                    <div className={styles.center}>
                        <ButtonText text="instruments table" />
                    </div>
                    <h2>
                        Markets at a <span> Glance</span>
                    </h2>

                    {/* ── Table ── */}
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Instrument</th>
                                    <th>Description</th>
                                    <th className={styles.number}>Min.<br /> Spread</th>
                                    <th className={styles.number}>Leverage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ROWS.map((row, i) => (
                                    <tr key={i} className={i % 2 === 1 ? styles.rowAlt : ''}>
                                        <td>
                                            <div className={styles.instrument}>
                                                <img src={row.flag} alt={row.flag} />
                                                <span>{row.pair}</span>
                                            </div>
                                        </td>
                                        <td className={styles.desc}>{row.desc}</td>
                                        <td className={styles.number}>{row.spread}</td>
                                        <td className={styles.number}>{row.leverage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Vec2 — left of table: float slow */}
                        <div className={styles.leftCenter}>
                            <motion.img
                                src={Vec2} alt="Vec2"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>

                        {/* Vec3 — right of table: float offset phase */}
                        <div className={styles.rightCenter}>
                            <motion.img
                                src={Vec3} alt="Vec3"
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                            />
                        </div>
                    </div>

                    <div className={styles.bottomText}>
                        <p>
                            Spreads shown are indicative and may vary with market conditions. Leverage
                            shown is the maximum available and depends on account type and instrument.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
