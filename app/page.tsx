import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between px-24">
      <section className="mx-0 my-auto flex h-screen min-w-full flex-col items-start justify-center">
        <h1 className="text-primary">Hi, my name is</h1>
        <h2 className="text-[clamp(40px,8vw,5em)] font-semibold leading-tight text-foreground">
          Jamie Yau
        </h2>
        <h3 className="text-[clamp(40px,8vw,5em)] font-semibold leading-tight text-muted-foreground">
          Full Stack Developer
        </h3>
        <p className="max-w-lg text-muted-foreground mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil
          asperiores quis, iure magni aut omnis labore qui iste architecto
          pariatur doloremque, commodi incidunt a natus libero non accusantium
          animi.
        </p>
      </section>
    </main>
  );
}
