
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const Hero = () => {
  const titles = [
    "Computer Science Student",
    "MERN Stack Developer", 
    "Next.js Developer",
    "Full Stack Developer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 sm:pt-8 pt-20">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
              <AvatarImage 
                src="umerPicture.jpg" 
                alt="Muhammad Umer Imtiaz" 
              />
              <AvatarFallback className="text-2xl font-bold">MU</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Muhammad Umer
            <span className="block text-3xl md:text-4xl text-primary mt-2">
              Imtiaz
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              <span 
                key={currentTitleIndex}
                className="inline-block transition-all duration-500 ease-in-out animate-fade-in"
              >
                {titles[currentTitleIndex]}
              </span>
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
           BSCS graduate from FUUAST Islamabad, passionate about creating innovative web solutions and building scalable applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
            <div className="flex gap-4">
  <a href="https://github.com/Muhammad-Umer-Imtiaz" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
      <Github className="h-5 w-5" />
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/muhammad-umer-imtiaz-72a698306/" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>
  <a href="mailto:umerimtiaz998@gmail.com">
    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
      <Mail className="h-5 w-5" />
    </Button>
  </a>
</div>

          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
