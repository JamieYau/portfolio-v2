"use client";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TypewriterEffect } from "../ui/typewriter-effect";

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
        className="flex flex-col items-start px-8"
      >
        <TypewriterEffect
          words={intro}
          className="font-medium text-primary"
          cursorClassName="bg-primary"
          hideCursorAfterTyping={true}
        />
        <TypewriterEffect
          words={name}
          className="text-[clamp(40px,8vw,5em)] leading-tight"
          delay={introTypingDuration * 1000 + 500} // Adjust delay to match the timing of the first line
        />
        <h3 className="text-[clamp(30px,6vw,4em)] font-semibold leading-tight">
          <Highlight> Full Stack Developer</Highlight>
        </h3>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil
          asperiores quis, iure magni aut omnis labore qui iste architecto
          pariatur doloremque, commodi incidunt a natus libero non accusantium
          animi.
        </p>
      </HeroHighlight>
    </section>
  );
}
