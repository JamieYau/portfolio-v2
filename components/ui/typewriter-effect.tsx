"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  delay = 0,
  hideCursorAfterTyping = false,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  delay?: number;
  hideCursorAfterTyping?: boolean;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const cursorControls = useAnimation();

  const typingDuration = wordsArray.reduce(
    (total, word) => total + word.text.length * 0.1,
    0.3,
  );

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          },
        );
      }, delay);

      // uses delay for starting cursor blink animation
      setTimeout(() => {
        cursorControls.start({
          opacity: 1,
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          },
        });
      }, delay - 500);

      // Stop cursor animation after typing is done
      if (hideCursorAfterTyping) {
        setTimeout(
          () => {
            cursorControls
              .start({
                visibility: "hidden",
                opacity: 0,
                transition: {
                  duration: 0.001,
                },
              })
              .then(() => cursorControls.stop());
          },
          delay + typingDuration * 1000,
        );
      }
    }
  }, [
    isInView,
    delay,
    animate,
    cursorControls,
    hideCursorAfterTyping,
    typingDuration,
  ]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(`hidden opacity-0`, word.className)}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-center font-bold", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={cursorControls}
        className={cn(
          "inline-block h-3/4 w-[4px] rounded-sm bg-primary",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-foreground`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("my-6 flex space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="lg:text:3xl text-xs font-bold sm:text-base md:text-xl xl:text-5xl"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block h-4 w-[4px] rounded-sm bg-primary sm:h-6 xl:h-12",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
