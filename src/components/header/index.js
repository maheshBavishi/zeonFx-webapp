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
    { name: 'Tools', href: '/tools' },
    { name: 'Partners', href: '/partners' },
    { name: 'Company', href: '/company' },
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

const marketLinks = [
    { name: 'Forex', img: '/assets/images/h-forex.png' },
    { name: 'Indices', img: '/assets/images/h-Indices.png' },
    { name: 'Metals', img: '/assets/images/h-metals.png' },
    { name: 'Commodities & \nEnergy', img: '/assets/images/h-Commodities.png' },
    { name: 'Crypto CFDs', img: '/assets/images/h-Crypto.png' },
    { name: 'Stocks', img: '/assets/images/h-Stocks.png' },
];

const tradingLinks = [
    { name: 'Account', img: '/assets/images/h-account.png' },
    { name: 'Deposit &\nWithdrawals', img: '/assets/images/h-account.png' },
];

const platformLinks = [
    { name: 'MetaTrader 5', img: '/assets/images/h-MetaTrader.png' },
    { name: 'Web Terminal', img: '/assets/images/h-web.png' },
];

const toolsLinks = [
    { name: 'Calculator', img: '/assets/images/h-Calculator.png' },
    { name: 'Economic Calendar', img: '/assets/images/h-Economic.png' },
    { name: 'News & Sentiment', img: '/assets/images/h-News.png' },
    { name: 'Trade Guard', img: '/assets/images/h-TradeGuard.png' },
];

const DropdownMenu = ({ links }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.dropdown}>
                <div className={styles.dropdownLeft}>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href="#"
                            onMouseEnter={() => setHoveredIndex(index)}
                            className={hoveredIndex === index ? styles.active : ''}
                        >
                            {link.name.split('\n').map((text, i) => (
                                <React.Fragment key={i}>
                                    {text}
                                    {i === 0 && link.name.includes('\n') && <br />}
                                </React.Fragment>
                            ))}
                        </Link>
                    ))}
                </div>
                <div className={styles.dropdownRight}>
                    {links.map((link, index) => (
                        <img
                            key={index}
                            src={link.img}
                            alt={link.name.replace('\n', '')}
                            className={`${styles.hoverImg} ${hoveredIndex === index ? styles.visible : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ item }) => {
    return (
        <div className={styles.menuItem}>
            <FlipLink href={item.href}>{item.name}</FlipLink>
            {item.name === 'Markets' && <DropdownMenu links={marketLinks} />}
            {item.name === 'Trading' && <DropdownMenu links={tradingLinks} />}
            {item.name === 'Platform' && <DropdownMenu links={platformLinks} />}
            {item.name === 'Tools' && <DropdownMenu links={toolsLinks} />}
        </div>
    );
};

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
                        <img src={Logo} alt='Logo' className={styles.logoImg} />
                    </Link>
                    <div className={styles.menu}>
                        {menuItems.map((item) => (
                            <MenuItem key={item.name} item={item} />
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


