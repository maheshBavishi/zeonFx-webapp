'use client'
import { motion } from 'framer-motion';
import styles from './betterTrading.module.scss';
import Button from '@/components/button';
import ButtonText from '@/components/buttonText';
import TapIcon from '@/icons/tapIcon';
import HandIcon from '@/icons/handIcon';
import CupIcon from '@/icons/cupIcon';

const Bottom = '/assets/video/Bottom.mp4';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 15
        }
    }
};

export default function BetterTrading() {
    return (
        <div className={styles.betterTrading}>
            <video src={Bottom} alt="Bottom" autoPlay loop muted playsInline></video>
            <div className={styles.contentAlignment}>
                <div className='container'>
                    <motion.div
                        className={styles.topAlignment}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className={styles.center} variants={itemVariants}>
                            <ButtonText text="About ZeonFX" />
                        </motion.div>
                        <motion.h2 variants={itemVariants}>
                            A better trading <br />
                            experience, built for <span> you.</span>
                        </motion.h2>
                        <motion.div className={styles.allContnetAlignment} variants={itemVariants}>
                            <div className={styles.iconText}>
                                <TapIcon />
                                <span>
                                    Client-first
                                </span>
                            </div>
                            <div className={styles.iconText}>
                                <HandIcon />
                                <span>
                                    Transparent
                                </span>
                            </div>
                            <div className={styles.iconText}>
                                <CupIcon />
                                <span>
                                    Innovative
                                </span>
                            </div>
                        </motion.div>
                        <motion.p variants={itemVariants}>
                            ZeonFX is a next-generation broker built for traders who want more speed, more control, and more opportunity. Our approach is client-first, our pricing is transparent, and our technology is built to keep you trading without friction. Learn more about who
                            we are and how we operate.
                        </motion.p>
                        <motion.div className={styles.buttonCenter} variants={itemVariants}>
                            <Button text="About ZeonFX" primary />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

