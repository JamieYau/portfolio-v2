import { BadgeVariant } from "@/components/ui/badge";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiWebpack,
  SiJest,
  SiPostcss,
  SiTailwindcss,
  SiShadcnui,
  SiEslint,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiJquery,
  SiVercel,
  SiRailway,
  SiSubversion,
} from "react-icons/si";
import ChakraIcon from "@/components/icons/ChakraIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import ViteIcon from "@/components/icons/ViteIcon";
import VitestIcon from "@/components/icons/VitestIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";

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

export const skills = [
  {
    category: "Frontend",
    items: [
      { icon: HTMLIcon, label: "HTML5", color: "#E34F26" },
      { icon: CSSIcon, label: "CSS3", color: "#1572B6" },
      { icon: JavascriptIcon, label: "JavaScript", color: "#F7DF1E" },
      { icon: TypescriptIcon, label: "TypeScript", color: "#3178C6" },
      { icon: FaReact, label: "React", color: "#61DAFB" },
      { icon: SiJquery, label: "jQuery", color: "#0769AD" },
      { icon: SiPostcss, label: "PostCSS", color: "#DD3A0A" },
      { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
      { icon: ChakraIcon, label: "Chakra UI", color: "currentColor" },
      { icon: SiShadcnui, label: "Shadcn UI", color: "currentColor" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: FaNodeJs, label: "Node.js", color: "#339933" },
      { icon: SiExpress, label: "Express", color: "currentColor" },
      { icon: FaDatabase, label: "SQL", color: "#4479A1" },
      { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
      { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
      { icon: PythonIcon, label: "Python", color: "currentColor" },
      { icon: JavaIcon, label: "Java", color: "currentColor" },
    ],
  },
  {
    category: "Other",
    items: [
      { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
      { icon: ViteIcon, label: "Vite", color: "#646CFF" },
      { icon: SiWebpack, label: "Webpack", color: "#8DD6F9" },
      { icon: SiJest, label: "Jest", color: "#C21325" },
      { icon: VitestIcon, label: "Vitest", color: "#6E9F18" },
      { icon: SiEslint, label: "ESLint", color: "#4B32C3" },
      { icon: SiVercel, label: "Vercel", color: "currentColor" },
      { icon: SiRailway, label: "Railway", color: "currentColor" },
      { icon: FaGitAlt, label: "Git", color: "#F05032" },
      { icon: SiSubversion, label: "SVN", color: "#809CC9" },
    ],
  },
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
