"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./allBlogs.module.scss";
import BlogCard from "@/components/blogCard";
import Pagination from "@/components/pagination";

export default function AllBlogs({ blogs = [], paginationData = {}, categories = [], selectedCategorySlug = "all", currentPage = 1 }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Format categories list with "All Categories" option
  const formattedCategories = [
    { id: "all", name: "All Categories", slug: "all" },
    ...categories.map((c) => ({
      id: c.id,
      name: c.attributes?.name || "",
      slug: c.attributes?.slug || "",
    })),
  ];

  // Find active category
  const activeCategory = formattedCategories.find((cat) => cat.slug === selectedCategorySlug) || formattedCategories[0];

  // Update URL query params on category selection
  const handleSelectCategory = (categorySlug) => {
    setIsOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (categorySlug && categorySlug !== "all") {
      params.set("category", categorySlug);
    } else {
      params.delete("category");
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  // Update URL query params on page change
  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const totalCount = (selectedCategorySlug === 'all' && currentPage === 1)
    ? Math.max((paginationData?.total || 0) - 5, 0)
    : (paginationData?.total || 0);

  const totalPages = (blogs && blogs.length > 0 && totalCount > 0)
    ? (Math.ceil(totalCount / 8) || paginationData?.pageCount || 0)
    : 0;

  return (
    <div className={styles.allBlogs}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>All Blogs</h2>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button type="button" className={styles.dropdownToggle} onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen}>
              <span>{activeCategory.name}</span>
              <motion.div className={styles.iconWrapper} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  {formattedCategories.map((category) => (
                    <li key={category.id || category.slug}>
                      <button
                        type="button"
                        className={`${styles.dropdownItem} ${activeCategory.slug === category.slug ? styles.active : ""}`}
                        onClick={() => handleSelectCategory(category.slug)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.grid}>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => <BlogCard key={blog.id || index} blog={blog} index={index} />)
          ) : (
            <div style={{ color: "#8E8E8E", gridColumn: "1 / -1", textAlign: "center", padding: "40px 0" }}>No blogs found for this category.</div>
          )}
        </div>

        {blogs && blogs.length > 0 && totalPages > 0 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
}
