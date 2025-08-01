import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "BlogBreeze - AI-Powered Blogging Platform",
      description:
        "A modern blog website powered by the MERN stack and integrated with Google's Gemini API for AI-generated blog content. Admins can create, manage, and delete blog posts, with secure authentication and media storage via ImageKit.io. Users can interact by commenting on blogs in real time.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Tailwind CSS",
        "Axios",
        "Gemini API",
        "ImageKit.io",
        "useContext",
      ],
      status: "Completed",
      features: [
        "Generate blog posts using Gemini AI API",
        "Admin panel to create and delete blogs",
        "JWT-based user authentication",
        "Image uploads via ImageKit.io",
        "Commenting system on blog posts",
        "Fully responsive UI using Tailwind CSS",
      ],
      demoLink: "https://blogbreeze-ecru.vercel.app/",
      githubLink: "https://github.com/Muhammad-Umer-Imtiaz/Blog_Website",
      image: "", // not used anymore
    },
    {
      title: "Chatty - Real-time Chat Application",
      description:
        "Chatty is a real-time one-to-one chat application I developed using Socket.io, focused on fast and reliable communication. It features live user presence, image sharing, and persistent chat history. The UI is fully responsive, delivering a smooth experience across devices.",
      technologies: [
        "React",
        "Socket.io",
        "Node.js",
        "Express",
        "axios",
        "jwt",
        "MongoDB",
        "Tailwind CSS",
      ],
      status: "Completed",
      features: [
        "Instant one-to-one real-time messaging using Socket.io",
        "Online/offline user detection",
        "Message history stored in MongoDB",
        "Image sharing in chat",
        "Responsive UI for both mobile and desktop",
      ],
      demoLink: "https://chatty-one-theta.vercel.app/",
      githubLink: "https://github.com/Muhammad-Umer-Imtiaz/Full-Stack-Chat-Webiste",
      image: "chatty.png",
    },
    {
      title: "Ez Auctions - Online Auction System",
      description:
        "An advanced auction platform built with the MERN stack, designed to support dynamic bidding with robust admin control. The backend includes secure user authentication, bid management, and role-based access, with responsive UI and admin dashboards.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Tailwind CSS",
        "Axios",
        "chart.js",
      ],
      status: "Completed",
      features: [
        "Auction creation, editing, and deletion",
        "User authentication, profiles, and role-based access",
        "Admin dashboard with charts and insights",
        "Admin controls to manage/delete users and auctions",
        "Bid history tracking",
      ],
      demoLink: "https://ezauctions.vercel.app/",
      githubLink: "https://github.com/Muhammad-Umer-Imtiaz/Online_Auction_System_Frontend",
      image: "ezauctions.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development and software
            engineering
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* IMAGE OR VIDEO */}
                <div className="bg-muted/50 flex items-center justify-center p-4">
                  {project.title === "BlogBreeze - AI-Powered Blogging Platform" ? (
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/Pjm4K6XlyfE?si=ihQfu7rEMxjjiRYC"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  ) : (
                    <img
                      src={`/${project.image}`}
                      alt={project.title}
                      className="rounded-lg object-cover w-full max-h-72"
                    />
                  )}
                </div>

                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className="hover:scale-105 transition-transform"
                          asChild
                        >
                          <a href={project.demoLink} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-105 transition-transform"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
