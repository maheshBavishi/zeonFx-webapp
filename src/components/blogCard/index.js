"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blogCard.module.scss";

const DEFAULT_IMAGE = "/assets/images/card.png";

export default function BlogCard({ blog, loading, index }) {
  if (loading) {
    return (
      <div className={styles.card} key={index}>
        <div className={styles.inner}>
          <div className={`${styles.img} ${styles.skeleton}`} />
          <div className={styles.details}>
            <div className={`${styles.skeletonCategory} ${styles.skeleton}`} />
            <div className={`${styles.skeletonDate} ${styles.skeleton}`} />
            <div className={`${styles.skeletonTitle} ${styles.skeleton}`} />
            <div className={`${styles.skeletonTitleShort} ${styles.skeleton}`} />
            <div className={`${styles.skeletonLink} ${styles.skeleton}`} />
          </div>
        </div>
      </div>
    );
  }

  const attributes = blog?.attributes;
  const title = attributes?.title || "";
  const slug = attributes?.slug || "";

  // Category extraction
  const categoryData = attributes?.blog_categories?.data;
  const categoryName = Array.isArray(categoryData) && categoryData.length > 0 ? categoryData[0]?.attributes?.name || "" : "";

  // Date formatting
  const rawDate = attributes?.publishedAt || attributes?.createdAt;
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase()
    : "";

  // Image URL resolution
  const rawImageUrl = attributes?.coverImage?.data?.attributes?.url;
  const imageUrl = rawImageUrl
    ? rawImageUrl.startsWith("http")
      ? rawImageUrl
      : `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL || ""}${rawImageUrl}`
    : DEFAULT_IMAGE;

  return (
    <Link href={slug ? `/blog/${slug}` : "/blog"} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
      <motion.div
        className={styles.card}
        key={blog?.id || index}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.inner}>
          <div className={styles.img}>
            <img src={imageUrl} alt={title} />
          </div>
          <div className={styles.details}>
            {categoryName && <button type="button">{categoryName}</button>}
            <span>BY ZEONFX TEAM | {formattedDate}</span>
            <h3>{title}</h3>
            <span className={styles.readMore}>Read More →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

