'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './allBlogs.module.scss';
import BlogCard from '@/components/blogCard';

const categories = [
    'All Categories',
    'Forex Trading',
    'Crypto Analysis',
    'Market Insights',
    'Trading Strategies',
    'Risk Management'
];

export default function AllBlogs() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <div className={styles.allBlogs}>
            <div className='container'>
                <div className={styles.sectionHeader}>
                    <h2>All Blogs</h2>
                    <div className={styles.dropdown} ref={dropdownRef}>
                        <button
                            type="button"
                            className={styles.dropdownToggle}
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-expanded={isOpen}
                        >
                            <span>{selectedCategory}</span>
                            <motion.div
                                className={styles.iconWrapper}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 6L8 10.5L12.5 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.ul
                                    className={styles.dropdownMenu}
                                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {categories.map((category) => (
                                        <li key={category}>
                                            <button
                                                type="button"
                                                className={`${styles.dropdownItem} ${selectedCategory === category ? styles.active : ''
                                                    }`}
                                                onClick={() => handleSelect(category)}
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.grid}>
                    {
                        [...Array(12)].map((_, index) => {
                            return (
                                <BlogCard/>
                               
                            )
                        })
                    }
                </div>
                <div className={styles.pagination}>
                    <div className={styles.pages}>
                        <button
                            type="button"
                            className={styles.arrow}
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            aria-label="Previous Page"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                type="button"
                                className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <span className={styles.dots}>...</span>

                        {[8, 9, 10].map((page) => (
                            <button
                                key={page}
                                type="button"
                                className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            type="button"
                            className={styles.arrow}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            aria-label="Next Page"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.goTo}>
                        <span>Go To</span>
                        <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val >= 1 && val <= totalPages) {
                                    setCurrentPage(val);
                                }
                            }}
                            min={1}
                            max={totalPages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

