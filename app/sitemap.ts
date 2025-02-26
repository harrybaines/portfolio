import { getBlogPosts, getWorkProjects } from "@/lib/mdx-utils";

export const baseUrl = "https://www.harrybaines.net";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const projects = getWorkProjects().map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  const routes = ["", "/blog", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
