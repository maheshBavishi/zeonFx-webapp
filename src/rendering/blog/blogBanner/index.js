import React from 'react';
import Link from 'next/link';
import styles from './blogBanner.module.scss';
import ButtonText from '@/components/buttonText';

const DEFAULT_IMAGE = '/assets/images/card.png';

export default function BlogBanner({ blogs = [] }) {
    const getImageUrl = (coverImage) => {
        const url = coverImage?.data?.attributes?.url;
        if (!url) return DEFAULT_IMAGE;
        if (url.startsWith('http')) return url;
        return `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL || ''}${url}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'MAY 24, 2026';
        try {
            return new Date(dateString)
                .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                .toUpperCase();
        } catch {
            return 'MAY 24, 2026';
        }
    };

    const renderCard = (blog, keyId) => {
        if (!blog) return null;

        const attributes = blog?.attributes || {};
        const title = attributes.title || '';
        const slug = attributes.slug || '';
        const date = formatDate(attributes.publishedAt || attributes.createdAt);
        const imgUrl = getImageUrl(attributes.coverImage);

        return (
            <Link key={blog?.id || keyId} href={slug ? `/blog/${slug}` : '/blog'} style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>
                <div className={styles.card} style={{ cursor: 'pointer' }}>
                    <img src={imgUrl} alt={title} />
                    <div className={styles.layer}>
                        <div className={styles.spacing}>
                            <span>BY ZEONFX TEAM | {date}</span>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };


    if (!blogs || blogs.length === 0) {
        return null;
    }

    // Dynamic distribution of available blogs across the banner layout
    let leftBlogs = [];
    let centerBlog = null;
    let rightBlogs = [];

    if (blogs.length === 1) {
        centerBlog = blogs[0];
    } else if (blogs.length === 2) {
        leftBlogs = [blogs[0]];
        centerBlog = blogs[1];
    } else if (blogs.length === 3) {
        leftBlogs = [blogs[0]];
        centerBlog = blogs[1];
        rightBlogs = [blogs[2]];
    } else if (blogs.length === 4) {
        leftBlogs = [blogs[0], blogs[1]];
        centerBlog = blogs[2];
        rightBlogs = [blogs[3]];
    } else {
        leftBlogs = [blogs[0], blogs[1]];
        centerBlog = blogs[2];
        rightBlogs = [blogs[3], blogs[4]];
    }

    return (
        <div className={styles.blogBanner}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="blogs" />
                </div>
                <h2>
                    Insights to sharpen your <span> edge.</span>
                </h2>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        {leftBlogs.map((blog, idx) => renderCard(blog, `left-${idx}`))}
                    </div>
                    {centerBlog && (
                        <div className={styles.items}>
                            {renderCard(centerBlog, 'center')}
                        </div>
                    )}
                    <div className={styles.items}>
                        {rightBlogs.map((blog, idx) => renderCard(blog, `right-${idx}`))}
                    </div>
                </div>
            </div>
        </div>
    );
}



