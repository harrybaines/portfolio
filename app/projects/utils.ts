import { formatDate, getMDXData, type BaseMetadata } from "@/lib/utils";
import path from "path";

export type ProjectMetadata = BaseMetadata & {
  tech: string[];
  link?: string;
};

export type Project = {
  metadata: ProjectMetadata;
  slug: string;
  content: string;
};

export function getProjects(): Project[] {
  return getMDXData<ProjectMetadata>(
    path.join(process.cwd(), "app", "projects", "content")
  );
}

export { formatDate };
