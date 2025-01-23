"use client";
import { ModeToggle } from "./ui/toggle-mode";
import { navItems } from "@/lib/data";
import { FloatingNav } from "./ui/floating-navbar";
import { motion } from "motion/react";
import { useActiveSectionContext } from "@/context/active-section-provider";

export default function Header() {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  // Create a mutable copy of navItems
  const mutableNavItems = navItems.map((item) => ({ ...item }));

  return (
    <>
      <FloatingNav
        navItems={mutableNavItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed right-10 top-12 z-50 hidden sm:block"
      >
        <ModeToggle />
      </motion.div>
    </>
  );
}
