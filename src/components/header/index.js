'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './header.module.scss';
import Button from '../button';

const Logo = '/assets/logo/logo.svg';

const menuItems = [
    { name: 'Markets', href: '/' },
    { name: 'Trading', href: '/' },
    { name: 'Platform', href: '/' },
    { name: 'Tools', href: '/' },
    { name: 'Partners', href: '/' },
    { name: 'Company', href: '/' },
];

function FlipLink({ children, href = '#' }) {
    const DURATION = 0.25;
    const STAGGER = 0.02;

    return (
        <Link href={href} passHref legacyBehavior>
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
        </Link>
    );
}

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;
        const diff = latest - previous;

        if (latest > 100 && diff > 8) {
            setHidden(true);
        } else if (diff < -8 || latest <= 100) {
            setHidden(false);
        }

        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        lastScrollY.current = latest;
    });

    return (
        <motion.header
            className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-140%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className='container'>
                <div className={styles.headerDesign}>
                    <Link href="/">
                        <img src={Logo} alt='Logo' style={{ cursor: 'pointer' }} />
                    </Link>
                    <div className={styles.menu}>
                        {menuItems.map((item) => (
                            <FlipLink key={item.name} href={item.href}>
                                {item.name}
                            </FlipLink>
                        ))}
                    </div>
                    <div className={styles.buttonAlignment}>
                        <Button text="Open Account" />
                        <Button text="LOGIN" primary />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}



