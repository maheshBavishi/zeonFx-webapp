"use client";
import { motion } from 'framer-motion';
import styles from './laptopAnimation.module.scss';
import Button from '@/components/button';
const LaptopFrame = '/assets/images/laptop-f.png';
const MobileFrame = '/assets/images/mobile-f.png';

export default function LaptopAnimation() {
    return (
        <div className={styles.laptopAnimation}>
            <div className='container'>
                <div className={styles.center}>
                    <motion.div
                        className={styles.imageCenter}
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={LaptopFrame} alt="LaptopFrame" />
                    </motion.div>
                    <motion.div
                        className={styles.mobile}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <img src={MobileFrame} alt='MobileFrame' />
                    </motion.div>
                </div>
                <div className={styles.btnCenter}>
                    <Button text="LAUNCH WEB TERMINAL" primary />
                    <Button text="DOWNLOAD MT5" outline />
                </div>
            </div>
        </div>
    );
}




