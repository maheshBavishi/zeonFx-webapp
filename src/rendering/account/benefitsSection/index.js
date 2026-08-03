"use client";

import styles from './benefitsSection.module.scss';
import ButtonText from '@/components/buttonText';
import { motion } from 'framer-motion';

const BENEFITS_DATA = [
  {
    title: '$10',
    desc: 'Low $10 entry point, ideal for new and cautious traders.'
  },
  {
    title: 'Zero',
    desc: 'Zero commission, with your cost built into the spread.'
  },
  {
    title: 'STP',
    desc: 'Same fast STP execution and fund safety as higher tiers.'
  },
  {
    title: '0.01',
    desc: '0.01 minimum lot, so you can size positions carefully.'
  },
  {
    title: 'Negative',
    desc: 'Negative balance protection and Trade Guard included.'
  },
  {
    title: 'Six',
    desc: 'Trade all six asset classes from one login.'
  }
];

export default function BenefitsSectionindex() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.center}>
          <ButtonText text="benefits" />
        </div>
        <h2>
          Why <span> This</span> Account?
        </h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {BENEFITS_DATA.map((item, i) => (
            <motion.div
              key={i}
              className={styles.items}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.inner}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

