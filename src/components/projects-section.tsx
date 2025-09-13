import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Link from "next/link";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";
import Image from 'next/image'
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex flex-col gap-10 items-center justify-center h-fit py-20 text-center bg-gray-200 dark:bg-gray-900">

      <h2 className="text-5xl font-bold">Projects</h2>

      <Accordion
        type="single"
        collapsible
        className="w-full px-10 md:px-30 lg:px-50"
        defaultValue="item-1"
      >
        {projects.map((project) => (
          <AccordionItem key={project.value} value={project.value}>
            <AccordionTrigger className="text-xl hover:no-underline">
              {project.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row gap-8 items-start text-left">
                {/* Columna de la Imagen */}
                <div className="w-full md:w-1/3">
                  <Image
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>

                {/* Columna de la Información */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tecnologías Usadas */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex gap-4 mt-4">
                    <Button asChild>
                      <Link href={project.liveLink} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={project.githubLink} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Código Fuente
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </section>
  );
};