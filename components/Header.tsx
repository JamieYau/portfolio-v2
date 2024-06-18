"use client";
import { ModeToggle } from "./ui/toggle-mode";
import { navItems } from "@/lib/data";
import { FloatingNav } from "./ui/floating-navbar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <FloatingNav navItems={navItems} />
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
