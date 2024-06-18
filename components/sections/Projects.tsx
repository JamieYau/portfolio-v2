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

const external = {
  initial: { x: 0, y: 0 },
  animate: { x: 5, y: -5 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['02.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">Projects</span>
      </h2>
      <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="shadow-lg">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                className="mb-4 h-48 w-full rounded-md object-cover"
                width="460"
                height="290"
              />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-1 text-sm">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant={tag.variant}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
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
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
