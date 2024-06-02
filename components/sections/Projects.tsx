import Image from "next/image";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen max-w-full flex-col pt-24"
    >
      <h2 className="mb-8 text-[clamp(26px,5vw,2em)] font-semibold">
        <span className="mr-2 text-primary">02.</span>Projects
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="shadow-lg">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                className="mb-4 h-48 w-full rounded-md object-cover"
                width="460"
                height="290"
              />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-1 text-sm">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant={tag.variant}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Repository
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
