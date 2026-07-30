'use client';
import React from 'react';
import styles from './entireEconomy.module.scss';
import ButtonText from '@/components/buttonText';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const EntireImage = '/assets/images/entire.png';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.16, delayChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUpSlow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageWrapperVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function EntireEconomy() {
    // 3D tilt motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
        stiffness: 120, damping: 20, mass: 0.5,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
        stiffness: 120, damping: 20, mass: 0.5,
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className={styles.entireEconomy}>
            <div className='container'>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Left text content */}
                    <div className={styles.items}>
                        <motion.div variants={fadeUp}>
                            <ButtonText text="what is indices trading" />
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            One position, <br />
                            an entire <span> economy.</span>
                        </motion.h2>

                        <motion.p variants={fadeUpSlow}>
                            A stock index tracks the performance of a group of leading companies, so trading an index is a way to take a view on a whole economy or sector at once, rather than a
                            single stock.
                        </motion.p>

                        <motion.p variants={fadeUpSlow}>
                            Index CFDs let you go long or short with leverage, which means you can trade rising and falling markets around major sessions and
                            economic events.
                        </motion.p>
                    </div>

                    {/* Right side image with entrance + infinite floating animation + 3D interactive tilt */}
                    <motion.div className={styles.items} variants={imageWrapperVariants}>
                        <motion.div
                            className={styles.image}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: 1000 }}
                        >
                            <motion.img
                                src={EntireImage}
                                alt='EntireImage'
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: 'preserve-3d',
                                    willChange: 'transform',
                                }}
                                animate={{
                                    y: [-12, 12, -12],
                                    rotate: [-1.5, 1.5, -1.5],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
