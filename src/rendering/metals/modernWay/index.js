'use client';
import React from 'react';
import styles from './modernWay.module.scss';
import ButtonText from '@/components/buttonText';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ModernImage = '/assets/images/modern.png';

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

export default function ModernWay() {
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
        <div className={styles.modernWay}>
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
                            <ButtonText text="what is Metals trading" />
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            The oldest store of value, <br />
                            traded the <span> modern </span> way.
                        </motion.h2>

                        <motion.p variants={fadeUpSlow}>
                            Precious metals have been a store of value for centuries, and they remain a core instrument for traders who
                            want both opportunity and a hedge against uncertainty.
                        </motion.p>

                        <motion.p variants={fadeUpSlow}>
                            With ZeonFX you can trade gold and silver as CFDs with leverage, going long
                            or short, without owning or storing the physical metal.
                        </motion.p>
                    </div>

                    {/* Right side image with entrance + infinite floating animation + 3D interactive tilt */}
                    <motion.div className={styles.items} variants={imageWrapperVariants}>
                        <motion.div
                            className={styles.img}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: 1000 }}
                        >
                            <motion.img
                                src={ModernImage}
                                alt='ModernImage'
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

