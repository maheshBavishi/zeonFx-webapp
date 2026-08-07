'use client';
import React, { useState, useRef, useCallback } from 'react';
import styles from './forexZeonfx.module.scss';
import ButtonText from '@/components/buttonText';

const Spreads = '/assets/images/Spreads.png';
const Access = '/assets/images/access.png';
const Pairs = '/assets/images/pairs.png';
const Commission = '/assets/images/commission.png';
const Execution1 = '/assets/images/execution1.png';
const Leverage = '/assets/images/leverage.png';

const CARDS = [
    { id: 1, title: 'Tight Spreads', img: Spreads, desc: 'Institutional liquidity means you get sharp pricing on every pair, with raw spreads on Raw ECN and Pro VIP.' },
    { id: 2, title: '50+ currency Pairs', img: Pairs, desc: 'Majors, minors, and exotics from EUR/USD to USD/TRY, all in one account.' },
    { id: 3, title: '24/5 market access', img: Access, desc: 'The forex market never sleeps. Trade from Sunday evening to Friday evening without interruption.' },
    { id: 4, title: 'Zero commission on Standard', img: Commission, desc: 'On the Standard account your cost is built into the spread, so you always know it upfront.' },
    { id: 5, title: 'Fast STP execution', img: Execution1, desc: 'Straight-through routing keeps fills consistent with minimal slippage, even in volatile markets.' },
    { id: 6, title: 'Up to 1:1000 leverage:', img: Leverage, desc: 'Flexible leverage suited to your experience and risk appetite, with clear leverage-risk disclosure.' },
];

const VISIBLE = 4;
const GAP = 20; // px — must match SCSS gap
const EASE = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';

export default function ForexZeonfx({ data }) {
    const trackRef = useRef(null);
    const viewportRef = useRef(null);
    const isDragging = useRef(false);
    const startPointer = useRef(0);        // pageX / clientX at drag start
    const startTranslate = useRef(0);        // translateX value at drag start
    const liveTranslate = useRef(0);        // current translateX (always up to date)

    const cards = data?.cards || CARDS;
    const badgeText = data?.badgeText || 'Why zeonfx';
    const title = data?.title || (
        <>
            Why trade <span> Forex </span> with ZeonFX
        </>
    );

    const [idx, setIdx] = useState(0);
    const [maxIdx, setMaxIdx] = useState(Math.max(0, cards.length - VISIBLE));

    /* ── Step = one card width + one gap ─────────────────────── */
    const getStep = useCallback(() => {
        const track = trackRef.current;
        if (!track || !track.children[0]) return 0;
        return track.children[0].offsetWidth + GAP;
    }, []);

    /* ── Apply translateX to the DOM directly (no re-render) ─── */
    const setTranslate = useCallback((x, animated) => {
        const track = trackRef.current;
        if (!track) return;
        track.style.transition = animated ? EASE : 'none';
        track.style.transform = `translateX(${x}px)`;
        liveTranslate.current = x;
    }, []);

    const updateMeasurements = useCallback(() => {
        const vp = viewportRef.current;
        const track = trackRef.current;
        if (!vp || !track || !track.children[0]) return;

        const step = track.children[0].offsetWidth + GAP;
        const visibleCards = Math.max(1, Math.round((vp.clientWidth + GAP) / step));
        const newMax = Math.max(0, cards.length - visibleCards);

        setMaxIdx(newMax);
        setIdx((prev) => {
            const clamped = Math.min(prev, newMax);
            setTranslate(-(clamped * step), false);
            return clamped;
        });
    }, [cards.length, setTranslate]);

    React.useEffect(() => {
        updateMeasurements();
        window.addEventListener('resize', updateMeasurements);
        return () => window.removeEventListener('resize', updateMeasurements);
    }, [updateMeasurements]);

    /* ── Snap to nearest card with smooth animation ───────────── */
    const snapToNearest = useCallback((currentX, deltaX = 0) => {
        const step = getStep();
        let nearest = Math.round(-currentX / step);

        if (nearest === idx) {
            if (deltaX < -40) nearest = idx + 1;
            if (deltaX > 40) nearest = idx - 1;
        }

        const clamped = Math.max(0, Math.min(maxIdx, nearest));
        setIdx(clamped);
        setTranslate(-(clamped * step), true /* animated */);
    }, [getStep, maxIdx, setTranslate, idx]);

    /* ── Jump to exact index (arrow / dot) ────────────────────── */
    const goToIdx = useCallback((newIdx) => {
        const clamped = Math.max(0, Math.min(maxIdx, newIdx));
        setIdx(clamped);
        setTranslate(-(clamped * getStep()), true /* animated */);
    }, [getStep, maxIdx, setTranslate]);

    /* ── Rubber-band clamp ────────────────────────────────────── */
    const clampWithBand = (x) => {
        const min = -(maxIdx * getStep());
        const max = 0;
        if (x > max) return max + (x - max) * 0.25;   // rubber pull at start
        if (x < min) return min + (x - min) * 0.25;   // rubber pull at end
        return x;
    };

    /* ══════════════════════════════════════════════════════════ */
    /*  MOUSE DRAG                                                */
    /* ══════════════════════════════════════════════════════════ */
    const onMouseDown = (e) => {
        isDragging.current = true;
        startPointer.current = e.pageX;
        startTranslate.current = liveTranslate.current;
        setTranslate(liveTranslate.current, false /* instant */);
        e.preventDefault(); // block text selection
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        const delta = e.pageX - startPointer.current;
        setTranslate(clampWithBand(startTranslate.current + delta), false);
    };

    const onMouseUp = (e) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const delta = e.pageX - startPointer.current;
        snapToNearest(liveTranslate.current, delta);
    };

    const onMouseLeave = (e) => {
        if (isDragging.current) {
            isDragging.current = false;
            const delta = e.pageX - startPointer.current;
            snapToNearest(liveTranslate.current, delta);
        }
    };

    /* ══════════════════════════════════════════════════════════ */
    /*  TOUCH SWIPE                                               */
    /* ══════════════════════════════════════════════════════════ */
    const onTouchStart = (e) => {
        startPointer.current = e.touches[0].clientX;
        startTranslate.current = liveTranslate.current;
        setTranslate(liveTranslate.current, false /* instant */);
    };

    const onTouchMove = (e) => {
        const delta = e.touches[0].clientX - startPointer.current;
        setTranslate(clampWithBand(startTranslate.current + delta), false);
    };

    const onTouchEnd = (e) => {
        const delta = e.changedTouches[0].clientX - startPointer.current;
        snapToNearest(liveTranslate.current, delta);
    };

    /* ══════════════════════════════════════════════════════════ */
    return (
        <div className={styles.forexZeonfx}>
            <div className="container">

                {/* ── Header ── */}
                <div className={styles.center}>
                    <ButtonText text={badgeText} />
                </div>
                <h2>
                    {title}
                </h2>

                {/* ── Slider ── */}
                <div className={styles.sliderOuter}>

                    {/* Left arrow */}
                    <button
                        className={`${styles.arrow} ${styles.arrowLeft} ${idx === 0 ? styles.arrowDisabled : ''}`}
                        onClick={() => goToIdx(idx - 1)}
                        disabled={idx === 0}
                        aria-label="Previous"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Viewport */}
                    <div
                        className={styles.viewport}
                        ref={viewportRef}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseLeave}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Track — driven purely by CSS transform */}
                        <div className={styles.track} ref={trackRef}>
                            {cards.map((card) => (
                                <div key={card.id} className={styles.box}>
                                    <div className={styles.inner}>
                                        <div className={styles.text}>
                                            <h3>{card.title}</h3>
                                            <p>{card.desc}</p>
                                        </div>
                                        <div className={styles.image}>
                                            <img src={card.img} alt={card.title} draggable={false} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right arrow */}
                    <button
                        className={`${styles.arrow} ${styles.arrowRight} ${idx === maxIdx ? styles.arrowDisabled : ''}`}
                        onClick={() => goToIdx(idx + 1)}
                        disabled={idx === maxIdx}
                        aria-label="Next"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className={styles.dots}>
                        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${idx === i ? styles.dotActive : ''}`}
                                onClick={() => goToIdx(i)}
                                aria-label={`Go to position ${i + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
