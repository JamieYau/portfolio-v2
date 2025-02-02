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
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import ChakraIcon from "@/components/icons/ChakraIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import ViteIcon from "@/components/icons/ViteIcon";
import VitestIcon from "@/components/icons/VitestIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import { IconType } from "react-icons/lib";
import PostmanIcon from "@/components/icons/PostmanIcon";
import AwsIcon from "@/components/icons/AwsIcon";
import NextAuthIcon from "@/components/icons/NextAuthIcon";

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

export const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
] as const;

export type SectionName = (typeof navItems)[number]["name"];

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
      { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
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
      { icon: PostmanIcon, label: "Postman", color: "currentColor" },
    ],
  },
  {
    category: "Other",
    items: [
      { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
      { icon: NextAuthIcon, label: "Next Auth", color: "currentColor" },
      { icon: AwsIcon, label: "AWS", color: "currentColor" },
      { icon: ViteIcon, label: "Vite", color: "#646CFF" },
      { icon: SiWebpack, label: "Webpack", color: "#8DD6F9" },
      { icon: SiJest, label: "Jest", color: "#C21325" },
      { icon: VitestIcon, label: "Vitest", color: "#6E9F18" },
      { icon: SiEslint, label: "ESLint", color: "#4B32C3" },
      { icon: SiVercel, label: "Vercel", color: "currentColor" },
      { icon: SiRailway, label: "Railway", color: "currentColor" },
      { icon: FaGitAlt, label: "Git", color: "#F05032" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Blog Platform",
    image: "/DevBlog.png",
    description:
      "A fully featured blog platform consisting of three separate applications: a client-facing blog site, an admin dashboard, and a RESTful API. The API is built with Node.js and Express, leveraging JWT refresh tokens for secure authentication and MongoDB for data storage. The platform is hosted on AWS.",
    tags: [
      { name: "React", variant: "react" },
      { name: "NodeJs", variant: "node" },
      { name: "Express", variant: "express" },
      { name: "MongoDB", variant: "mongodb" },
      { name: "AWS", variant: "aws" },
    ],
    links: {
      live: "https://blog.jamieyau.com",
      repo: "https://github.com/JamieYau/blog-client",
    },
  },
  {
    title: "TechWave Ecommerce",
    image: "/TechWave.png",
    description:
      "A responsive full-stack e-commerce application built with Next.js, TypeScript, and PostgreSQL. The platform includes product search, filtering, and sorting, user reviews, a shopping cart, Stripe payment integration and user authentication using OAuth.",
    tags: [
      { name: "Next.Js", variant: "nextjs" },
      { name: "TypeScript", variant: "typescript" },
      { name: "PostgreSQL", variant: "postgresql" },
      { name: "OAuth", variant: "oauth" },
      { name: "Stripe", variant: "stripe" },
    ],
    links: {
      live: "https://techwave.jamieyau.com",
      repo: "https://github.com/JamieYau/e-commerce",
    },
  },
];

export interface Social {
  icon?: IconType;
  label: string;
  href: string;
}

export const socials: Social[] = [
  {
    icon: SiGithub,
    label: "Github",
    href: "https://github.com/JamieYau",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jamieyau-dev/",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:jamiekcyau@gmail.com",
  },
];
