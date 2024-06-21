"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";

const external = {
  initial: { x: 0, y: 0 },
  animate: { x: 5, y: -5 },
};

const projectVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Projects() {
  return (
    <Section
      sectionName="Projects"
      threshold={0.3}
      className="before:content-['02.']"
      containerClassName="min-h-screen"
    >
      <ul className="flex w-full flex-col gap-10">
        {projects.map((project) => (
          <motion.li
            key={project.title}
            variants={projectVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="group relative flex w-full justify-center lg:grid lg:grid-cols-12 lg:align-middle"
          >
            <Image
              src={project.image}
              alt={project.title}
              quality={95}
              className="hidden w-full rounded-md object-cover lg:relative lg:col-span-7 lg:col-end-8 lg:row-span-full lg:block lg:group-even:col-end-13"
              width="460"
              height="290"
            />
            <Card className="relative h-max shadow-lg lg:col-span-6 lg:col-start-1 lg:row-span-full lg:border-none lg:bg-transparent lg:shadow-none lg:group-odd:col-start-7">
              <CardHeader className="lg:hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  quality={95}
                  className="w-full rounded-md object-cover"
                  width="460"
                  height="290"
                />
              </CardHeader>
              <CardContent className="z-3 lg:pb-0 lg:group-odd:text-end">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="lg:my-6 lg:rounded-lg lg:border lg:bg-card lg:p-6 lg:text-card-foreground">
                  {project.description}
                </CardDescription>
                <div className="mb-4 flex gap-2 text-sm lg:group-odd:justify-end">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant={tag.variant}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4 lg:group-odd:justify-end">
                {project.links.repo && (
                  <motion.a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline" })}
                    initial="initial"
                    animate="initial"
                    whileHover="animate"
                  >
                    Repository
                    <motion.span variants={external}>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "default" })}
                    initial="initial"
                    animate="initial"
                    whileHover="animate"
                  >
                    Live Demo
                    <motion.span variants={external}>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.a>
                )}
              </CardFooter>
            </Card>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
