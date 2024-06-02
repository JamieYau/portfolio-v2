export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-full flex-col pt-24"
    >
      <h2 className="text-[clamp(26px,5vw,2em)] font-semibold">
        <span className="mr-2 text-primary">01.</span>About Me
      </h2>
      <div className="max-w-4xl">
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
