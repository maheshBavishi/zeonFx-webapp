import styles from './buttonText.module.scss';
export default function ButtonText({ text }) {
    return (
        <div className={styles.buttonText}>
            <button aria-label={text}>
                {text}
            </button>
        </div>
    )
}
