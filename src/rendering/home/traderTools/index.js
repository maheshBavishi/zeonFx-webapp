import styles from './traderTools.module.scss';
import ButtonText from '@/components/buttonText';
const Tools = '/assets/video/Tools.mp4';
const Calculator = '/assets/images/Calculator.png';
const Economic = '/assets/images/Economic.png';
const News = '/assets/images/News.png';
const Analysis = '/assets/images/Analysis.png';
export default function TraderTools() {
    return (
        <div className={styles.traderTools}>
            <video src={Tools} alt="Tools" loop playsInline autoPlay muted></video>
            <div className={styles.contentAlignment}>
                <div className='container'>
                    <div className={styles.grid}>
                        <div className={styles.items}>
                            <div className={styles.box}>
                                <div className={styles.inner}>
                                    <div className={styles.centeralignment}>
                                        <img src={Calculator} alt='Calculator' />
                                    </div>
                                    <h3>
                                        Trading Calculator
                                    </h3>
                                    <p>
                                        Estimate pip value, margin requirements, and potential profit or loss
                                        before you trade.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.inner}>
                                    <div className={styles.centeralignment}>
                                        <img src={Economic} alt='Economic' />
                                    </div>
                                    <h3>
                                        Economic Calendar
                                    </h3>
                                    <p>
                                        Track key economic events
                                        and market-moving announcements in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.centerText}>
                                <div className={styles.centerButton}>
                                    <ButtonText text="tools" />
                                </div>
                                <h2>
                                    Empower Every <span> Trading </span> Decision
                                </h2>
                                <p>
                                    A toolkit for data-driven trading. The Trading Calculator estimates pip value, required margin, and profit or loss before you commit. The Economic Calendar tracks central bank
                                    decisions and market-moving releases with impact ratings.
                                </p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.box}>
                                <div className={styles.inner}>
                                    <div className={styles.centeralignment}>
                                        <img src={News} alt='News' />
                                    </div>
                                    <h3>
                                        Market News & Sentiment
                                    </h3>
                                    <p>
                                        Stay informed with live market news and sentiment to identify trading
                                        opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.inner}>
                                    <div className={styles.centeralignment}>
                                        <img src={Analysis} alt='Analysis' />
                                    </div>
                                    <h3>
                                        AI Technical Analysis
                                    </h3>
                                    <p>
                                        Receive AI-powered chart insights and technical analysis to.
                                        support smarter trading decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
