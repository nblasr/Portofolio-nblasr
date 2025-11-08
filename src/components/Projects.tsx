import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ECommerce-NaFi",
      description:
        "A digital e-commerce platform built with C#, HTML, CSS, and JavaScript. Designed to provide a smooth online shopping experience with modern UI and efficient backend logic.",
      tags: ["C#", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/nblasr/ECommerce-NaFi"
    },
    {
      title: "Portofolio-nblasr",
      description:
        "A personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my projects, technical skills, and contact information in a clean and modern layout.",
      tags: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      github: "https://github.com/nblasr/Portofolio-nblasr"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are some of my recent works that highlight my technical skills, creativity, and passion for software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth card-shadow hover:glow-effect group overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-smooth">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 transition-smooth"
              asChild
            >
              <a
                href="https://github.com/nblasr"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
