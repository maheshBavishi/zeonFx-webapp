import styles from './oneAccount.module.scss';
import ButtonText from '@/components/buttonText';
import Button from '@/components/button';
export default function OneAccount() {
    return (
        <div className={styles.oneAccount}>
            <div className='container'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <ButtonText text="Account" />
                        <h2>
                            One Account. <br />
                            <span> Unlimited </span> Potential.
                        </h2>
                        <div className={styles.box}>
                            <div className={styles.innerBox}>
                                <div className={styles.header}>
                                    <h3>
                                        Standard
                                    </h3>
                                    <p>
                                        The simplest way
                                        to start
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.body}>
                                    <div className={styles.text}>
                                        <p>Minimum Deposit:</p>
                                        <span>$10</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Spreads</p>
                                        <span>From 0.10 Pips</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Commission</p>
                                        <span>0</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Leverage</p>
                                        <span>up to 1:1000</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Minimum Lot</p>
                                        <span>0.01</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Negative balance protection</p>
                                        <span>Yes</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Execution</p>
                                        <span>STP</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Dedicated account manager</p>
                                        <span>Yes</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Swap policy</p>
                                        <span>Standard</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnTopAlignment}>
                            <Button text="Open Account" primary />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.videoAlignment}>
                            <video autoPlay playsInline loop muted src="https://res.cloudinary.com/izyjnpsh/video/upload/v1785485593/upscaled-video_1_oevujc.mp4">

                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
