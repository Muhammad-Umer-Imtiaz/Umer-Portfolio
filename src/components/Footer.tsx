import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Muhammad Umer Imtiaz</h3>
            <p className="text-muted-foreground mb-4">
              Computer Science graduate passionate about creating innovative web solutions and building scalable applications.
            </p>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <a href="https://github.com/Muhammad-Umer-Imtiaz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/muhammad-umer-imtiaz-72a698306/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <a href="mailto:umerimtiaz998@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 umerimtiaz998@gmail.com</p>
              <p>📍 Islamabad, Pakistan</p>
              <p>🎓 FUUAST Islamabad</p>
              <p>💼 Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
            <p className="text-sm text-center text-muted-foreground mb-4 md:mb-0">
              © 2024 Muhammad Umer Imtiaz. All rights reserved.
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
