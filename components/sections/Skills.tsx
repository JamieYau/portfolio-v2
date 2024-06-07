import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['02.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">Skills</span>
      </h2>
      <div>
        {skills.map((skillCategory) => (
          <Card className="mb-8" key={skillCategory.category}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skillCategory.items.map((skill) => (
                <div className="flex items-center space-x-2" key={skill.label}>
                  <skill.icon
                    className="h-6 w-6 lg:h-10 lg:w-10"
                    style={{ fill: skill.color }}
                  />
                  <span className="">{skill.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
