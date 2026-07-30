import styles from './snapshot.module.scss';
import ButtonText from '@/components/buttonText';
export default function Snapshot() {
    return (
        <div className={styles.snapshot}>
            <div className='container'>
                <div className={styles.topAlignment}>
                    <div className={styles.center}>
                        <ButtonText text="platform snapshot" />
                    </div>
                    <h2>
                        Technology That
                        <span> Powers </span> Your Trades
                    </h2>
                </div>
            </div>
        </div>
    )
}
