// import { Tag } from "@/lib/tags";

import { BadgeVariant } from "@/components/ui/badge";

interface Tag {
  name: string;
  variant: BadgeVariant;
}

// Define the structure of a project
export interface Project {
  title: string;
  image: string;
  description: string;
  tags: Tag[];
  links: {
    live: string;
    repo: string;
  };
}

interface NavLink {
  index: string;
  href: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  { index: "01.", href: "#about", label: "About" },
  { index: "02.", href: "#skills", label: "Skills" },
  { index: "03.", href: "#projects", label: "Projects" },
  { index: "04.", href: "#contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    title: "Blog Website",
    image: "/Blog.png",
    description:
      "A website displaying Blogs related to my Software Development journey created from my CMS site",
    tags: [
      { name: "React", variant: "react" },
      { name: "Vite", variant: "vite" },
      { name: "API", variant: "api" },
    ],
    links: {
      live: "https://blog-client-kappa-seven.vercel.app/",
      repo: "https://github.com/JamieYau/blog-client",
    },
  },
];
