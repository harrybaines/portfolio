import Link from "next/link";
import type { ComponentProps } from "react";
import { isExternal } from "@/app/content";

/** Next.js Link for internal routes, a plain anchor (new tab) for everything else. */
export function SmartLink({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return <a href={href} {...(newTab && { target: "_blank", rel: "noopener noreferrer" })} {...props} />;
  }
  return <Link href={href} {...props} />;
}
