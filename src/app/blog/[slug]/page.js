import React from "react";
import BlogDetails from "@/rendering/blogDetails";
import { graphcms } from "@/graphql/graphQLClient";
import { GetBlogBySlug, GetAllBlogs } from "@/graphql/graphql";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) return {};

  try {
    const Data = await graphcms.request(GetBlogBySlug, {
      filters: { slug: { eq: slug } },
    });
    const blog = Data?.blog?.data?.[0]?.attributes;
    if (!blog) return {};

    const seo = blog.SEO;
    return {
      title: seo?.title || blog.title,
      description: seo?.description || blog.shortDescription,
      keywords: seo?.keywords,
    };
  } catch {
    return {};
  }
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  let blog = null;
  try {
    const Data = await graphcms.request(GetBlogBySlug, {
      filters: {
        slug: {
          eq: slug,
        },
      },
    });
    blog = Data?.blog?.data?.[0];

    if (!blog) {
      const fallbackData = await graphcms.request(GetBlogBySlug, {
        filters: {
          slug: {
            in: [slug],
          },
        },
      });
      blog = fallbackData?.blog?.data?.[0];
    }
  } catch (err) {
    console.error("Error fetching blog details:", err);
  }

  if (!blog) {
    notFound();
  }

  // Fetch dynamic similar blogs (latest blogs excluding currently opened blog)
  let similarBlogs = [];
  try {
    const RecentData = await graphcms.request(GetAllBlogs, {
      pagination: { page: 1, pageSize: 5 },
    });
    const allRecent = RecentData?.blog?.data || [];
    similarBlogs = allRecent
      .filter((b) => b?.attributes?.slug !== slug && b?.id !== blog.id)
      .slice(0, 4);
  } catch (err) {
    console.error("Error fetching similar blogs:", err);
  }

  return (
    <div>
      <BlogDetails blog={blog} similarBlogs={similarBlogs} />
    </div>
  );
}
