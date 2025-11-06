import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "RESTful APIs", "Database Design"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Agile", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive set of technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx}
                className="space-y-4 p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth card-shadow hover:glow-effect"
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-primary/10 text-foreground border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;