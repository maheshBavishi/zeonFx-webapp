import React from 'react';
import BlogBanner from './blogBanner';
import AllBlogs from './allBlogs';

export default function Blog({ Blogs, paginationData, Categories, selectedCategory, currentPage }) {
    const isFirstPageAll = currentPage === 1 && (!selectedCategory || selectedCategory === "all");

    // First 5 blogs for banner
    const bannerBlogs = Blogs?.slice(0, 5) || [];

    // From 6th blog onwards for AllBlogs on page 1, or full list for other pages / filtered categories
    const gridBlogs = isFirstPageAll ? (Blogs?.slice(5) || []) : (Blogs || []);

    return (
        <div>
            <BlogBanner blogs={bannerBlogs} />
            <AllBlogs
                blogs={gridBlogs}
                paginationData={paginationData}
                categories={Categories}
                selectedCategorySlug={selectedCategory}
                currentPage={currentPage}
            />
        </div>
    );
}


