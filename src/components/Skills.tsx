
import { Database, Globe, Server, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Shadcn UI", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Socket.io", level: 75 },
        { name: "JWT Authentication", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Postman", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const quickSkills = [
    { name: "Real-time Communication", icon: <Zap className="h-5 w-5" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-5 w-5" /> },
    { name: "API Development", icon: <Server className="h-5 w-5" /> },
    { name: "Database Design", icon: <Database className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="text-primary">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-2">{skill.icon}</div>
                <span className="text-sm font-medium text-center text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
