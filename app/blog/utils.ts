import { formatDate, getMDXData, type BaseMetadata } from "@/lib/utils";
import path from "path";

export type BlogMetadata = BaseMetadata & {
  summary: string;
};

export type BlogPost = {
  metadata: BlogMetadata;
  slug: string;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  return getMDXData<BlogMetadata>(
    path.join(process.cwd(), "app", "blog", "posts")
  );
}

export { formatDate };
