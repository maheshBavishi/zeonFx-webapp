import React from 'react'
import styles from './blogBanner.module.scss';
import ButtonText from '@/components/buttonText';
const CardImage = '/assets/images/card.png';
export default function BlogBanner() {
    return (
        <div className={styles.blogBanner}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="blogs" />
                </div>
                <h2>
                    Insights to sharpen your <span> edge.</span>
                </h2>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        {
                            [...Array(2)].map(() => {
                                return (
                                    <div className={styles.card}>
                                        <img src={CardImage} alt='CardImage' />
                                        <div className={styles.layer}>
                                            <div className={styles.spacing}>
                                                <span>
                                                    By ZeonFx Team  |  May 24, 2026
                                                </span>
                                                <h3>
                                                    Algorithmic Trading vs Manual Trading: What Smart
                                                    Traders ...
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.items}>
                        <div className={styles.card}>
                            <img src={CardImage} alt='CardImage' />
                            <div className={styles.layer}>
                                <div className={styles.spacing}>
                                    <span>
                                        By ZeonFx Team  |  May 24, 2026
                                    </span>
                                    <h3>
                                        Algorithmic Trading vs Manual Trading: What Smart
                                        Traders ...
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        {
                            [...Array(2)].map(() => {
                                return (
                                    <div className={styles.card}>
                                        <img src={CardImage} alt='CardImage' />
                                        <div className={styles.layer}>
                                            <div className={styles.spacing}>
                                                <span>
                                                    By ZeonFx Team  |  May 24, 2026
                                                </span>
                                                <h3>
                                                    Algorithmic Trading vs Manual Trading: What Smart
                                                    Traders ...
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
