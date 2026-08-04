import { gql } from "graphql-request";

export const GetAllBlogs = gql`
  query Blog($filters: BlogsFiltersInput, $pagination: PaginationArg) {
    blog(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          title
          slug
          shortDescription
          createdAt
          publishedAt
          updatedAt
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
          blog_categories {
            data {
              id
              attributes {
                name
                slug
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const GetAllBlogCategories = gql`
  query BlogCategory($pagination: PaginationArg) {
    blogCategories(pagination: $pagination) {
      data {
        id
        attributes {
          name
          slug
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GetBlogBySlug = gql`
  query Blog($filters: BlogsFiltersInput) {
    blog(filters: $filters) {
      data {
        id
        attributes {
          slug
          title
          shortDescription
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
          blogDetails
          Blog_FAQ {
            id
            question
            answer
          }
          Author {
            id
            name
            authorProfile {
              data {
                attributes {
                  url
                }
              }
            }
            biography
            autherPosition
          }
          SEO {
            id
            title
            description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            faqSchema
          }
          blog_categories {
            data {
              attributes {
                name
                slug
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

