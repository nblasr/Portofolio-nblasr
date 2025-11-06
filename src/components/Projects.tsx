import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with React and TypeScript, featuring real-time data updates and responsive design.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Beta",
      description: "Full-stack application with user authentication, database integration, and RESTful API architecture.",
      tags: ["Node.js", "React", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Gamma",
      description: "Innovative solution using modern technologies to solve real-world problems with clean and efficient code.",
      tags: ["Python", "JavaScript", "API"],
      github: "#",
      demo: "#"
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
              Here are some of my recent works that showcase my skills and passion for development
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
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
              <a href="https://github.com/nblasr" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;