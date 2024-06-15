"use client";

export default function About() {

  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['01.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">About Me</span>
      </h2>
      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="mb-4">
          I&apos;m a passionate full stack developer that likes creating
          Responsive and User-friendly web applications. My journey began with
          Python, evolving from simple projects to complex games. With a solid
          foundation in Java and experience in multiple projects, I now apply
          the software engineering principles gained from university to develop
          full stack web applications.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Education</h3>
        <p className="mb-4">
          I hold a Bachelors of Science in Computer Science from Royal Holloway
          University of London, where I gained a strong foundation in software
          development and computer science principles.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Personal Interests</h3>
        <p className="mb-4">
          Beyond coding, I have a keen interest in the latest tech innovations.
          To maintain a healthy balance, I regularly hit the gym and enjoy
          sports such as football, basketball, MMA, boxing, and American
          football.
        </p>
      </div>
    </section>
  );
}
