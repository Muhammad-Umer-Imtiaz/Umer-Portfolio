
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities or collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">umerimtiaz998@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+923181504251</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Connect With Me</h3>
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

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Available for Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I'm currently open to internship opportunities, freelance projects, and entry-level 
                  full-stack developer positions. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Project discussion, opportunity, etc." required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full hover:scale-105 transition-transform">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
