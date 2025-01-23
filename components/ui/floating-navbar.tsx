"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";
import { SectionName } from "@/lib/data";

export const FloatingNav = ({
  navItems,
  className,
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // const { scrollYProgress } = useScroll();

  // const [visible, setVisible] = useState(true);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;

  //     if (scrollYProgress.get() < 0.03) {
  //       setVisible(true);
  //     } else {
  //       if (direction < 0) {
  //         setVisible(true);
  //       } else {
  //         setVisible(false);
  //       }
  //     }
  //   }
  // });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center rounded-full border border-transparent bg-background/[0.9] px-5 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2]",
          className,
        )}
      >
        <ul className="flex max-w-fit items-center justify-center gap-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <li key={`link=${idx}`} className="relative">
              <Link
                href={navItem.link}
                className={cn(
                  clsx(
                    "flex items-center px-2 py-1 text-sm text-muted-foreground hover:text-foreground",
                    {
                      "text-foreground": activeSection === navItem.name,
                    },
                  ),
                )}
                onClick={() => {
                  setActiveSection(navItem.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {navItem.name}
                {navItem.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-muted"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};
