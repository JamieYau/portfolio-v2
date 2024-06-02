import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between px-24">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
