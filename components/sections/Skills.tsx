"use client";
import { skills } from "@/lib/data";
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
              <div className="w-[80%] sm:w-[90%] md:w-full flex justify-center">
                <Carousel
                  plugins={[plugin]}
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
                        className="basis-1/3 md:basis-1/5"
                      >
                        <div className="flex flex-col items-center gap-2">
                    
                          
                              <skill.icon
                                className="h-6 w-6 sm:h-10 sm:w-10"
                                style={{ fill: skill.color }}
                              />
                              <span className="hidden text-center leading-5 sm:block sm:text-sm md:font-medium lg:text-base">
                                {skill.label}
                              </span>

                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
