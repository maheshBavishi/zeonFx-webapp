import React from "react";
import Blog from "@/rendering/blog";
import { graphcms } from "@/graphql/graphQLClient";
import { GetAllBlogs, GetAllBlogCategories } from "@/graphql/graphql";

export const metadata = {
  title: "ZeonFX Blog | Market Analysis, Trading Education & Platform Guides",
  description: "The ZeonFX blog: daily and weekly market analysis, trading education, platform guides, and company news. Sharpen your edge with insights from the ZeonFX team.",
  keywords: "forex blog, market analysis, trading education, MT5 guides, zeonfx blog",
};

export default async function Page({ searchParams }) {
    const params = await searchParams;
    const parsedPage = Number(params?.page);
    const currentPage = parsedPage > 0 ? parsedPage : 1;
    const category = params?.category;

    const filters = {
        ...(category && category !== "all" && {
            blog_categories: {
                slug: {
                    in: [category],
                },
            },
        }),
        ...(params?.search && {
            title: {
                contains: params.search,
            },
        }),
    };

    // On page 1 with all categories, fetch 13 blogs (5 for banner + 8 for all blogs grid)
    const isFirstPageAll = currentPage === 1 && (!category || category === "all");
    const pageSize = isFirstPageAll ? 13 : 8;

    const variables = {
        pagination: {
            page: currentPage,
            pageSize: pageSize,
        },
        ...(Object.keys(filters).length > 0 && { filters }),
    };

    const Data = await graphcms.request(GetAllBlogs, variables);
    const CategoriesData = await graphcms.request(GetAllBlogCategories, {
        pagination: {
            page: 1,
            pageSize: 100,
        },
    });

    return (
        <div>
            <Blog
                Blogs={Data?.blog?.data || []}
                paginationData={Data?.blog?.meta?.pagination || {}}
                Categories={CategoriesData?.blogCategories?.data || CategoriesData?.blog_categories?.data || []}
                selectedCategory={category || "all"}
                currentPage={currentPage}
            />
        </div>
    );
}


