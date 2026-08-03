import React from 'react'
import styles from './riskWarning.module.scss';
import ButtonText from '@/components/buttonText';
export default function RiskWarning() {
    return (
        <div className={styles.riskWarning}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="risk warning" />
                </div>
                <p>
                    Social Trading and  investments carry the same market risk as trading yourself, and you can lose money. Past performance of any trader or manager is not a reliable indicator of future results. Only allocate capital you can afford to put at risk, and review each trader's risk profile before you copy
                    or invest.
                </p>
            </div>
        </div>
    )
}
