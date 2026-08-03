'use client';
import { motion } from 'framer-motion';
import styles from './blogCard.module.scss';
const CardImage = '/assets/images/card.png';

export default function BlogCard({ index }) {
    return (
        <motion.div
            className={styles.card}
            key={index}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className={styles.inner}>
                <div className={styles.img}>
                    <img src={CardImage} alt='CardImage' />
                </div>
                <div className={styles.details}>
                    <button>
                        Crypto
                    </button>
                    <span>
                        By ZeonFx Team  |  May 24, 2026
                    </span>
                    <h3>
                        Algorithmic Trading vs Manual Trading: What Smart Traders Choose Today
                    </h3>
                    <a>
                        Read More →
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

