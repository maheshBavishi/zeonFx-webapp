'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './header.module.scss';
import Button from '../button';

const Logo = '/assets/logo/logo.svg';

const menuItems = ['Markets', 'Trading', 'Platform', 'Tools', 'Partners', 'Company'];

function FlipLink({ children }) {
    const DURATION = 0.25;
    const STAGGER = 0.02;

    return (
        <motion.a
            className={styles.flipLink}
            initial="initial"
            whileHover="hovered"
        >
            <div className={styles.flipWrapper}>
                <span className={styles.flipTextPrimary}>
                    {children.split("").map((l, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-110%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: [0.33, 1, 0.68, 1],
                                delay: STAGGER * i,
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </span>
                <span className={styles.flipTextSecondary}>
                    {children.split("").map((l, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: [0.33, 1, 0.68, 1],
                                delay: STAGGER * i,
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </span>
            </div>
        </motion.a>
    );
}

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerDesign}>
                    <img src={Logo} alt='Logo' />
                    <div className={styles.menu}>
                        {menuItems.map((item) => (
                            <FlipLink key={item}>{item}</FlipLink>
                        ))}
                    </div>
                    <div className={styles.buttonAlignment}>
                        <Button text="Open Account" />
                        <Button text="LOGIN" primary />
                    </div>
                </div>
            </div>
        </header>
    )
}

