'use client';
import React, { useState, useEffect } from 'react';
import styles from './pagination.module.scss';

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
    const [pageInput, setPageInput] = useState(currentPage);

    useEffect(() => {
        setPageInput(currentPage);
    }, [currentPage]);

    if (totalPages <= 0) return null;

    const getPageNumbers = (current, total) => {
        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }
        if (current <= 4) {
            return [1, 2, 3, 4, '...', total];
        }
        if (current >= total - 3) {
            return [1, '...', total - 3, total - 2, total - 1, total];
        }
        return [1, '...', current - 1, current, current + 1, '...', total];
    };

    const handlePageSubmit = () => {
        const val = parseInt(pageInput, 10);
        if (!isNaN(val) && val >= 1 && val <= totalPages) {
            onPageChange(val);
        } else {
            setPageInput(currentPage);
        }
    };

    return (
        <div className={styles.pagination}>
            <div className={styles.pages}>
                <button
                    type="button"
                    className={styles.arrow}
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    aria-label="Previous Page"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {getPageNumbers(currentPage, totalPages).map((page, idx) => {
                    if (page === '...') {
                        return (
                            <span key={`dots-${idx}`} className={styles.dots}>
                                ...
                            </span>
                        );
                    }
                    return (
                        <button
                            key={page}
                            type="button"
                            className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    type="button"
                    className={styles.arrow}
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    aria-label="Next Page"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 8H12.5M12.5 8L8.5 4M3.5 8L8.5 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className={styles.goTo}>
                <span>Go To</span>
                <input
                    type="number"
                    value={pageInput}
                    onChange={(e) => setPageInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handlePageSubmit();
                        }
                    }}
                    onBlur={handlePageSubmit}
                    min={1}
                    max={totalPages}
                />
            </div>
        </div>
    );
}
