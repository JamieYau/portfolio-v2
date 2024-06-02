export default function Hero() {
  return (
    <section className="mx-0 my-auto flex h-screen min-w-full flex-col items-start justify-center">
      <h1 className="font-medium text-primary">Hi, my name is</h1>
      <h2 className="text-[clamp(40px,8vw,5em)] font-semibold leading-tight text-foreground">
        Jamie Yau
      </h2>
      <h3 className="text-[clamp(40px,8vw,5em)] font-semibold leading-tight text-muted-foreground">
        Full Stack Developer
      </h3>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil
        asperiores quis, iure magni aut omnis labore qui iste architecto
        pariatur doloremque, commodi incidunt a natus libero non accusantium
        animi.
      </p>
    </section>
  );
}
