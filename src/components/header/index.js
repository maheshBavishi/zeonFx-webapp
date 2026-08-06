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
    { name: 'Platform', href: '/trading-platforms' },
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
    { name: 'Forex', link: '/forex', img: '/assets/images/h-forex.png' },
    { name: 'Indices', link: '/indices', img: '/assets/images/h-Indices.png' },
    { name: 'Metals', link: '/metals', img: '/assets/images/h-metals.png' },
    { name: 'Commodities & \nEnergy', link: '/commodities', img: '/assets/images/h-Commodities.png' },
    { name: 'Crypto CFDs', link: '/crypto', img: '/assets/images/h-Crypto.png' },
    { name: 'Stocks', link: '/stocks', img: '/assets/images/h-Stocks.png' },
];

const tradingLinks = [
    { name: 'Account', link: '/account', img: '/assets/images/h-account.png' },
    { name: 'Deposit &\nWithdrawals', link: '/deposit-withdraws', img: '/assets/images/h-account.png' },
];

const platformLinks = [
    { name: 'MetaTrader 5', link: '/trading-platforms#MetaTrader5', img: '/assets/images/h-MetaTrader.png' },
    { name: 'Web Terminal', link: '/trading-platforms#WebTerminal', img: '/assets/images/h-web.png' },
];

const toolsLinks = [
    { name: 'Calculator', link: '/tools', img: '/assets/images/h-Calculator.png' },
    { name: 'Economic Calendar', link: '/tools#EconomicCalendar', img: '/assets/images/h-Economic.png' },
    { name: 'News & Sentiment', link: '/tools#marketnews', img: '/assets/images/h-News.png' },
    { name: 'Trade Guard', link: '/tools#TradeGuard', img: '/assets/images/h-TradeGuard.png' },
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
                            href={link.link || '#'}
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

const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MobileMenuItem = ({ item, setMobileMenuOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    let links = [];
    if (item.name === 'Markets') links = marketLinks;
    if (item.name === 'Trading') links = tradingLinks;
    if (item.name === 'Platform') links = platformLinks;
    if (item.name === 'Tools') links = toolsLinks;

    const hasDropdown = links.length > 0;

    return (
        <div className={styles.mobileMenuItem}>
            <div className={styles.mobileMenuHeader} onClick={() => hasDropdown ? setIsOpen(!isOpen) : setMobileMenuOpen(false)}>
                {hasDropdown ? <span>{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
                {hasDropdown && (
                    <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                )}
            </div>
            {hasDropdown && (
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className={styles.mobileDropdown}
                >
                    {links.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.link || '#'}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name.replace(/\n/g, ' ')}
                        </Link>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                        <a aria-label='https://client.zeonfx.com/en/register' href='https://client.zeonfx.com/en/register' target='_blank'>
                            <Button text="register" />
                        </a>
                        <a href='https://client.zeonfx.com/en/login' target='_blank' aria-label='https://client.zeonfx.com/en/login'>
                            <Button text="LOGIN" primary />
                        </a>
                    </div>

                    <div className={styles.mobileMenuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </div>
                </div>
            </div>

            <motion.div
                className={styles.mobileOverlay}
                initial={false}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                    y: mobileMenuOpen ? 0 : -20
                }}
            >
                <div className={styles.mobileMenuContainer}>
                    {menuItems.map((item) => (
                        <MobileMenuItem key={item.name} item={item} setMobileMenuOpen={setMobileMenuOpen} />
                    ))}

                    <div className={styles.mobileButtons}>
                        <a aria-label='https://client.zeonfx.com/en/register' href='https://client.zeonfx.com/en/register' target='_blank'>
                            <Button text="register" />
                        </a>
                        <a href='https://client.zeonfx.com/en/login' target='_blank' aria-label='https://client.zeonfx.com/en/login'>
                            <Button text="LOGIN" primary />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.header>
    );
}


