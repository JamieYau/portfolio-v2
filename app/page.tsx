import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <div className="m-auto flex max-w-4xl flex-col items-center 2xl:max-w-7xl">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
