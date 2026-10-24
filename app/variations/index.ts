import type { ComponentType } from "react";
import Editorial from "./01-editorial";
import Ivory from "./02-ivory";
import Index from "./03-index";
import Sidebar from "./04-sidebar";
import Column from "./05-column";
import Bento from "./06-bento";
import Showcase from "./07-showcase";
import Spec from "./08-spec";
import Journal from "./09-journal";
import Rails from "./10-rails";

export type Variation = { slug: string; name: string; Component: ComponentType };

/** Every landing page design. Browse them at /v/01 … /v/10. */
export const variations: Variation[] = [
  { slug: "01", name: "Editorial", Component: Editorial },
  { slug: "02", name: "Ivory", Component: Ivory },
  { slug: "03", name: "Index", Component: Index },
  { slug: "04", name: "Sidebar", Component: Sidebar },
  { slug: "05", name: "Column", Component: Column },
  { slug: "06", name: "Bento", Component: Bento },
  { slug: "07", name: "Showcase", Component: Showcase },
  { slug: "08", name: "Spec", Component: Spec },
  { slug: "09", name: "Journal", Component: Journal },
  { slug: "10", name: "Rails", Component: Rails },
];

/** The design served at "/". */
export const DEFAULT_VARIATION = "01";

export const getVariation = (slug: string) => variations.find((v) => v.slug === slug);
