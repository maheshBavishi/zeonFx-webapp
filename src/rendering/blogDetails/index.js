import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './blogDetails.module.scss';
import SimilarBlogs from './similarBlogs';

const DEFAULT_IMAGE = '/assets/images/card.png';

export default function BlogDetails({ blog, similarBlogs = [] }) {
    const attributes = blog?.attributes || {};

    // Header info
    const title = attributes.title || 'Untitled Blog';
    const categoryData = attributes.blog_categories?.data;
    const categoryName = Array.isArray(categoryData) && categoryData.length > 0
        ? (categoryData[0]?.attributes?.name || 'Crypto')
        : 'Crypto';

    const authorName = attributes.Author?.name || 'ZeonFx Team';

    const rawDate = attributes.publishedAt || attributes.createdAt;
    const formattedDate = rawDate
        ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
        : 'MAY 24, 2026';

    // Image URL resolution
    const rawImageUrl = attributes.coverImage?.data?.attributes?.url;
    const imageUrl = rawImageUrl
        ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL || ''}${rawImageUrl}`)
        : DEFAULT_IMAGE;

    // Markdown blog details content
    const markdownContent = attributes.blogDetails || attributes.shortDescription || '';

    return (
        <>
            <div className={styles.blogDetails}>
                <div className='container'>
                    <div className={styles.header}>
                        <button className={styles.categoryBtn}>{categoryName}</button>
                        <h1>{title}</h1>
                        <div className={styles.meta}>
                            BY {authorName.toUpperCase()} | {formattedDate}
                        </div>
                    </div>

                    <div className={styles.heroImg}>
                        <img src={imageUrl} alt={title} />
                    </div>

                    <div className={styles.content}>
                        {markdownContent ? (
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        ) : (
                            <p>{attributes.shortDescription}</p>
                        )}
                    </div>
                </div>
            </div>
            <SimilarBlogs similarBlogs={similarBlogs} />
        </>
    );
}



