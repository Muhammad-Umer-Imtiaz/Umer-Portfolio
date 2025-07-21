import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and committed to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Muhammad Umer Imtiaz, a Computer Science graduate from 
              FUUAST Islamabad. With a strong foundation in software development and a passion for 
              creating innovative solutions, I specialize in full-stack web development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in programming has led me to work on various projects, from healthcare 
              management systems to real-time communication platforms. I believe in writing clean, 
              efficient code and creating user-friendly applications that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="font-medium">BSCS Graduate</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">FUUAST Islamabad</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Graduated 2025</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">Federal Urdu University of Arts, Science & Technology</p>
                  <p className="text-muted-foreground">Islamabad, Pakistan</p>
                  <p className="text-sm text-muted-foreground">Graduated • 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Focus Areas</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">• Full-Stack Web Development</p>
                  <p className="text-muted-foreground">• Real-time Communication Systems</p>
                  <p className="text-muted-foreground">• Database Management</p>
                  <p className="text-muted-foreground">• System Architecture</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
