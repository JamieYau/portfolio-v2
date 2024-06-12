"use client";

import { Tabs } from "../ui/tabs";

export default function About() {
  const tabs = [
    {
      title: "About Me",
      value: "aboutMe",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 p-10 text-xl font-bold text-white md:text-4xl">
          <p>About Me tab</p>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Education tab</p>
        </div>
      ),
    },
    {
      title: "Hobbies",
      value: "hobbies",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Hobbies tab</p>
        </div>
      ),
    },
  ];
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['01.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">About Me</span>
      </h2>
      <div className="h-[40rem] relative mx-auto flex w-full my-16 max-w-5xl items-start justify-start [perspective:1000px] gap-8">
        <Tabs
          tabs={tabs}
          containerClassName="flex-col justify-center items-start w-max"
          tabClassName="border border-transparent"
          activeTabClassName=""
        />
      </div>
      <div>
        <p className="mb-4 text-lg">
          Hi, I&apos;m
          <span className="font-semi-bold text-primary"> Jamie</span>, a
          passionate full stack developer with a knack for creating efficient
          and scalable web applications. With a background in [Your Background],
          I bring a unique blend of creativity and technical expertise to every
          project.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Skills & Expertise</h3>
        <ul className="mb-4 list-inside list-disc">
          <li>React.js, Next.js, and other modern JavaScript frameworks</li>
          <li>CSS, Tailwind CSS, and responsive design</li>
          <li>Node.js, Express, and RESTful API development</li>
          <li>Database management with MongoDB and SQL</li>
          <li>Version control with Git and GitHub</li>
        </ul>
        <h3 className="mt-8 text-xl font-semibold">Experience</h3>
        <p className="mb-4">
          I have worked on a variety of projects ranging from small business
          websites to large-scale applications. Notably, I was part of a team
          that developed [Mention a Notable Project], where I was responsible
          for [Your Responsibilities].
        </p>
        <h3 className="mt-8 text-xl font-semibold">Education</h3>
        <p className="mb-4">
          I hold a Bachelors of Science in Computer Science from Royal Holloway
          University of London, where I gained a strong foundation in software
          development and computer science principles.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Personal Interests</h3>
        <p className="mb-4">
          Outside of coding, I enjoy [Mention Hobbies or Interests], which helps
          me stay creative and balanced. I&apos;m also an avid learner, always
          seeking to improve my skills and stay up-to-date with the latest
          industry trends.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Professional Goals</h3>
        <p className="mb-4">
          I&apos;m looking to join a dynamic team where I can contribute my
          skills and grow as a developer. My goal is to build innovative
          solutions that make a positive impact.
        </p>
        <p className="mt-8">
          Feel free to{" "}
          <a href="#contact" className="text-primary hover:underline">
            get in touch
          </a>{" "}
          or explore my{" "}
          <a href="/#projects" className="text-primary hover:underline">
            projects
          </a>{" "}
          to see what I&apos;ve been working on.
        </p>
      </div>
    </section>
  );
}
