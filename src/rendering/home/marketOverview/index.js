"use client";

import styles from './marketOverview.module.scss';
import ButtonText from '@/components/buttonText';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const CoinImage = '/assets/images/coin.png';

export default function MarketOverview() {
    return (
        <div className={styles.marketOverview}>
            <div className='container'>
                <ButtonText text="markets overview" />
                <h2>
                    Trade the <span> World's </span> Markets
                </h2>
                <div className={styles.firstgrid}>
                    <motion.div
                        className={classNames(styles.box, styles.first)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785484999/0726_4_1_gachnt.mp4' alt="Indices" loop muted autoPlay playsInline></video>
                        <div className={styles.textstyle}>
                            <h3>
                                Indices
                            </h3>
                            <p>
                                Trade whole economies in one position. US30, NAS100, SPX500, DAX40,
                                FTSE100, and more, with competitive spreads and precise execution.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className={classNames(styles.box, styles.sec)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <motion.img
                            src={CoinImage}
                            alt="CoinImage"

                        />
                        <div className={styles.textstyle}>
                            <h3>
                                Forex
                            </h3>
                            <p>
                                Trade 50+ currency pairs across majors, minors, and exotics with tight spreads and deep liquidity. The world's
                                largest market, open 24 hours a day, five days a week.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className={styles.secgrid}>
                    <motion.div
                        className={styles.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.sectext}>
                            <h3>
                                Metals
                            </h3>
                            <p>
                                Gold and silver as both speculative and defensive instruments. Trade XAU/USD, XAG/USD, platinum,
                                and palladium with pricing that reflects the real market.
                            </p>
                        </div>
                        <div className={styles.metalVideo}>
                            <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785484968/0726_4_ybkni3.mp4' alt="Metals" loop muted autoPlay playsInline></video>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className={styles.sectext}>
                            <h3>
                                Commodities & Energy
                            </h3>
                            <p>
                                Direct exposure to WTI Crude, Brent Crude, and natural gas, plus agricultural commodities, with the
                                tools to act when markets move on supply and demand.
                            </p>
                        </div>
                        <div className={styles.commodities}>
                            <video src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785479975/0731_2_sx372h.mp4' alt="Commodities" loop muted autoPlay playsInline></video>
                        </div>
                    </motion.div>
                </div>
                <div className={styles.lastgrid}>
                    <motion.div
                        className={classNames(styles.box, styles.CryptoText)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <video className={styles.Crypto} src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785479511/0731_1_deapee.mp4' alt="Crypto" loop autoPlay muted playsInline></video>
                        <div className={styles.textstyle}>
                            <h3>
                                Crypto CFDs
                            </h3>
                            <p>
                                Price exposure to Bitcoin, Ethereum, and 20+ crypto CFDs around the
                                clock. No exchange account, no wallet, no custody risk.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className={classNames(styles.box, styles.stockText)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 0 20px rgba(20, 158, 245, 0.35)',
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <video className={styles.Stocks} src='https://res.cloudinary.com/izyjnpsh/video/upload/v1785478675/0731_2_jcvrf6.mp4' alt="Stocks" loop autoPlay muted playsInline></video>
                        <div className={styles.textstyle}>
                            <h3>
                                Stocks
                            </h3>
                            <p>
                                Go long or short on the world's biggest companies as CFDs with leverage. Trade
                                Apple, Tesla, Amazon, and more without owning a single share.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
