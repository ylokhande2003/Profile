import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Briefcase } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clientProjects = [
    {
      title: "UpTroop - AI-Powered Training Platform",
      description: "Developed and maintained multiple Java Spring Boot microservices and built core Next.js frontend modules. Managed Azure deployments, CI/CD pipelines, environment configurations, and production monitoring for reliable and scalable releases.",
      tags: ["Next.js", "SQL", "Java Spring Boot", "Azure", "Python"],
      color: "from-blue-500/20 to-purple-500/20",
      type: "Client Project",
    },
  ];

  const personalProjects = [
    {
      title: "Atmayog - Yoga Course Website",
      description: "Developed a user-friendly yoga course website using PHP. Ensured responsive design for optimal user experience on all devices. Managed user accounts and content through an admin panel.",
      tags: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL", "Xampp"],
      color: "from-green-500/20 to-teal-500/20",
      link: "#",
    },
    {
      title: "Tweetertube",
      description: "Built functionalities similar to Twitter and YouTube. Developed CRUD operations and UserContext. Backend deployed on Render and Frontend on Netlify.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
      color: "from-orange-500/20 to-red-500/20",
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Associate Software Engineer",
      company: "CORECO",
      period: "March 2025 – Present",
      description: "Working across the full stack with Java Spring Boot, backend development, and REST API integration. Participating in sprint planning, daily stand-ups, and review meetings. Collaborating with senior developers through code reviews and architectural discussions.",
      color: "from-violet-500/20 to-pink-500/20",
    },
    {
      role: "Software Engineer Intern",
      company: "CORECO",
      period: "July 2024 – Feb 2025",
      description: "Worked on React.js projects, adding new functionalities and improving website responsiveness. Collaborated with senior developers to design and develop software features. Participated in team meetings and contributed ideas for improvements.",
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Experience
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Work <span className="text-gradient">History</span>
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${exp.color} p-1`}
              >
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Portfolio
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {clientProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.color} p-1`}
              >
                <div className="glass-card rounded-3xl p-8 md:p-12">
                  <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full mb-4">
                    {project.type}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm bg-secondary/80 rounded-full text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.color} p-1`}
              >
                <div className="glass-card rounded-3xl p-8 h-full min-h-[320px] flex flex-col justify-between relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
                    animate={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground text-sm">
                        Personal Project
                      </span>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                          backgroundColor:
                            hoveredIndex === index
                              ? "hsl(var(--primary))"
                              : "hsl(var(--primary) / 0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight
                          className={`w-5 h-5 transition-colors ${
                            hoveredIndex === index
                              ? "text-primary-foreground"
                              : "text-primary"
                          }`}
                        />
                      </motion.div>
                    </div>

                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-secondary/80 rounded-full text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    className="absolute bottom-8 right-8 flex gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
