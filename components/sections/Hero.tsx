"use client";
import ArrowIcon from "../icons/ArrowIcon";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import ShinyButton from "../ui/magicui/shiny-button";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  const intro = [
    { text: "Hi," },
    { text: "my" },
    { text: "name" },
    { text: "is" },
  ];
  const name = [{ text: "Jamie" }, { text: "Yau" }];

  const introTypingDuration = intro.reduce(
    (total, word) => total + word.text.length * 0.1,
    0.3,
  );

  return (
    <section className="m-0 h-screen min-w-full">
      <HeroHighlight
        containerClassName="flex flex-col justify-center"
        className="flex h-full flex-col items-start justify-center px-8"
      >
        <div className="flex-grow"></div>
        <div>
          <h3 className="flex">
            <TypewriterEffect
              words={intro}
              className="font-medium text-primary"
              cursorClassName="bg-primary"
              hideCursorAfterTyping={true}
            />
          </h3>
          <h1 className="flex">
            <TypewriterEffect
              words={name}
              className="text-[clamp(40px,8vw,5em)] leading-tight"
              delay={introTypingDuration * 1000 + 500} // Adjust delay to match the timing of the first line
            />
          </h1>
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              delay: 3,
            }}
          >
            <Highlight className="text-[clamp(30px,5vw,4em)] font-semibold leading-tight">
              Full Stack Developer
            </Highlight>
          </motion.h2>
          <motion.p
            // reveals content from left to right
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 5,
            }}
            className="mt-4 max-w-lg text-muted-foreground"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            nihil asperiores quis, iure magni aut omnis labore qui iste
            architecto pariatur doloremque, commodi incidunt a natus libero non
            accusantium animi.
          </motion.p>
        </div>
        <div className="flex w-full flex-grow items-end justify-center pb-8">
          <ShinyButton>
            <ArrowIcon />
          </ShinyButton>
        </div>
      </HeroHighlight>
    </section>
  );
}
