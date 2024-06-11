"use client";
import { ModeToggle } from "./ui/toggle-mode";
import { navItems } from "@/lib/data";
import { FloatingNav } from "./ui/floating-navbar";


export default function Header() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="hidden fixed top-12 right-10 sm:block z-50">
        <ModeToggle />
      </div>
    </>
  );
}
