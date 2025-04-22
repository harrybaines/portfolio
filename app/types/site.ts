export type SiteConfig = {
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    email: string;
    youtube: string;
  };
  career: {
    startDate: Date;
  };
  keyProjects: {
    title: string;
    description: string;
    url: string;
  }[];
};
