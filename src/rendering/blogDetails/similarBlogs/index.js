'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './similarBlogs.module.scss';
import BlogCard from '@/components/blogCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        },
    },
};

const cardItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.215, 0.61, 0.355, 1],
        },
    },
};

export default function SimilarBlogs() {
    return (
        <div className={styles.similarBlogs}>
            <div className='container'>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={titleVariants}
                >
                    Similar Blogs
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {[...Array(4)].map((_, index) => (
                        <motion.div key={index} variants={cardItemVariants}>
                            <BlogCard />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

