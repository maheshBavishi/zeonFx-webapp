import React from 'react'
import styles from './tradingOpportunities.module.scss';
export default function TradingOpportunities() {
    return (
        <div className={styles.tradingOpportunities}>
            <div className='container'>
                <div className={styles.grid}>
                    <div className={styles.items}></div>
                    <div className={styles.items}></div>
                </div>
            </div>
        </div>
    )
}
