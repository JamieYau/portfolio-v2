"use client";
import { skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['02.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">Skills</span>
      </h2>
      <div>
        {skills.map((skillCategory) => {
          // Create a new Autoplay instance for each carousel
          const plugin = Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnFocusIn: false,
          });

          return (
            <div
              className="mb-8 flex flex-col items-center"
              key={skillCategory.category}
            >
              <div className="mb-8 w-full text-start">
                <h3 className="text-2xl font-bold">{skillCategory.category}</h3>
              </div>
              <Carousel
                plugins={[plugin]} // Use the unique plugin instance here
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl"
              >
                <CarouselContent>
                  {skillCategory.items.map((skill) => (
                    <CarouselItem
                      key={skill.label}
                      className="sm:basis-1/4 md:basis-1/5"
                    >
                      <div>
                        <Card>
                          <CardContent className="flex aspect-square flex-col items-center justify-center px-5 py-6 gap-2">
                            <skill.icon
                              className="h-6 w-6 lg:h-10 lg:w-10"
                              style={{ fill: skill.color }}
                            />
                            <span className="font-medium leading-5 text-center">{skill.label}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          );
        })}
      </div>
    </section>
  );
}
