"use client";
import styles from './button.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export default function Button({ text, primary, outline }) {
    return (
        <div className={classNames(styles.button, primary ? styles.primary : "", outline ? styles.outline : "")}>
            <motion.button
                aria-label={text}
                whileHover={{
                    scale: 1.05,
                    boxShadow: primary
                        ? "0px 10px 20px rgba(20, 158, 245, 0.4)"
                        : "0px 10px 20px rgba(0, 0, 0, 0.15)",
                    y: -2
                }}
                whileTap={{
                    scale: 0.95,
                    boxShadow: primary
                        ? "0px 2px 5px rgba(20, 158, 245, 0.4)"
                        : "0px 2px 5px rgba(0, 0, 0, 0.15)",
                    y: 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    mass: 0.8
                }}
            >
                {text}
            </motion.button>
        </div>
    )
}
