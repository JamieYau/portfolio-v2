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
import { AspectRatio } from "../ui/aspect-ratio";

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
            <div className="group z-10 hidden lg:relative lg:col-span-7 lg:col-end-8 lg:row-span-full lg:block lg:group-even:col-end-13">
              <AspectRatio
                ratio={3 / 2}
                className="before:absolute before:inset-0 before:z-20 before:rounded-lg before:opacity-100 before:mix-blend-multiply before:brightness-[40%] before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 before:dark:bg-primary"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1340px) 652px, calc(38.57vw + 143px)"
                  className="rounded-lg border object-cover"
                />
              </AspectRatio>
            </div>
            <Card className="relative h-max shadow-lg lg:col-span-6 lg:col-start-1 lg:row-span-full lg:border-none lg:bg-transparent lg:shadow-none lg:group-odd:col-start-7">
              <CardHeader className="lg:hidden">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 380px) calc(90vw - 51px), calc(31.67vw + 159px)"
                    className="rounded-lg border object-cover"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="z-0 lg:pb-0 lg:group-odd:text-end">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="relative z-30 my-6 text-start lg:rounded-lg lg:border lg:bg-muted lg:p-6 lg:text-muted-foreground">
                  {project.description}
                </CardDescription>
                <div className="mb-4 flex flex-wrap gap-2 text-sm lg:group-odd:justify-end">
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
