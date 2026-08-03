import React from 'react'
import styles from './notice.module.scss';
import ButtonText from '@/components/buttonText';
export default function Notice() {
    return (
        <div className={styles.notice}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text='notice' />
                </div>
                <p>
                    All promotions are optional and subject to their specific terms and conditions. ZeonFX may amend, suspend, or end any promotion at any time. Promotional benefits do not reduce the risk of
                    trading leveraged products.
                </p>
            </div>
        </div>
    )
}
