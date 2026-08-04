import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_BASE_URL, {
  // cache: "no-store",
  next: { revalidate: 3600 },
});
