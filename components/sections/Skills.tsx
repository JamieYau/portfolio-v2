import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen max-w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['02.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">Skills</span>
      </h2>
      <div className="max-w-4xl">
        {skills.map((skillCategory) => (
          <div className="mb-8" key={skillCategory.category}>
            <h3 className="mb-4 text-xl font-semibold">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skillCategory.items.map((skill) => (
                <div className="flex items-center space-x-2" key={skill.label}>
                  <skill.icon
                    className="h-6 w-6"
                    style={{ fill: skill.color }}
                  />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
