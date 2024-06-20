"use client";

import { skills } from "@/lib/data";
import { Badge } from "../ui/badge";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const skillVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <Section ref={ref} sectionName="About" className="before:content-['01.']">
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="mb-4 tracking-tight">
            I&apos;m a passionate full stack developer that likes creating
            Responsive and User-friendly web applications. My journey began with
            Python, evolving from simple projects to complex games. With a solid
            foundation in Java and experience in multiple projects, I now apply
            the software engineering principles gained from university to
            develop full stack web applications.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Education</h3>
          <p className="mb-4 tracking-tight">
            I hold a Bachelors of Science in Computer Science from Royal
            Holloway University of London, where I gained a strong foundation in
            software development and computer science principles.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Personal Interests</h3>
          <p className="mb-4 tracking-tight">
            Beyond coding, I have a keen interest in the latest tech
            innovations. To maintain a healthy balance, I regularly hit the gym
            and enjoy sports such as football, basketball, MMA, boxing, and
            American football.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="flex flex-col gap-4">
            {skills.map((skillCategory) => {
              return (
                <div
                  className="flex flex-col gap-2"
                  key={skillCategory.category}
                >
                  <h4 className="font-medium">{skillCategory.category}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, index) => (
                      <motion.li
                        key={skill.label}
                        variants={skillVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                          margin: "0px 0px 50px 0px",
                        }}
                        custom={index}
                      >
                        <Badge
                          variant={"secondary"}
                          className="gap-1 text-sm font-normal"
                        >
                          <skill.icon
                            className="h-4 w-4"
                            style={{ fill: skill.color }}
                          />
                          {skill.label}
                        </Badge>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
