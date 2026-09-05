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
      title: "UpTroop — AI-Powered B2B SaaS Enterprise Learning Platform",
      description:
        "Multi-tenant B2B SaaS platform serving 4–10 enterprise clients. Re-architected the Slack & Microsoft Teams bot infrastructure from single-tenant to schema-based multi-tenancy with dynamic credential resolution and per-client Azure Blob Storage partitioning — zero cross-tenant data exposure. Engineered an end-to-end AI content pipeline integrating 6+ third-party REST APIs (avatar generation, multilingual TTS, video generation) with async processing, cutting trainer content production time by ~60%. Improved PostgreSQL API response times by 30% (800ms → 560ms) via query profiling and composite indexing.",
      tags: ["Java", "Spring Boot", "React.js", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "Azure"],
      color: "from-blue-500/20 to-purple-500/20",
      type: "Enterprise SaaS Platform",
    },
  ];

  const personalProjects = [
    {
      title: "Tweetertube",
      description:
        "MERN stack social platform with tweets, video subscriptions, nested comments, and personalised feeds. MongoDB aggregation pipelines with compound indexing handle 50K+ document reads at sub-100ms response times. Secure REST API layer with JWT auth, RBAC, and rate limiting — containerised with Docker and deployed via CI/CD.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
      color: "from-orange-500/20 to-red-500/20",
      githublink: "https://github.com/ylokhande2003/Tweetertube",
      link: "https://tweetertube.netlify.app/",
    },
    {
      title: "Spring Boot E-Commerce REST API",
      description:
        "Scalable RESTful e-commerce API with product, order, inventory, and user management modules using clean MVC architecture and Hibernate/JPA. JWT auth with Spring Security, role-based access for customer/admin/vendor, and OAuth 2.0 login. Packaged with Maven, containerised with Docker, deployed to AWS EC2. 80%+ test coverage with JUnit & Mockito, Swagger/OpenAPI documentation.",
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "Docker", "AWS EC2"],
      color: "from-purple-500/20 to-violet-500/20",
      githublink: "https://github.com/ylokhande2003/springboot-ecommerce",
      link: "https://github.com/ylokhande2003/springboot-ecommerce",
    },
    {
      title: "Atmayoga - Yoga & Wellness Platform",
      description:
        "A yoga and wellness website offering guided yoga, exercise, and meditation plans for users of different age groups. Includes separate login dashboards for users and admins with personalized plans based on age, physique, and health.",
      tags: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL", "Xampp"],
      color: "from-teal-500/20 to-cyan-500/20",
      githublink: "https://github.com/ylokhande2003/Atmayog",
      link: "http://atmayoga.free.nf/?i=1",
    },
    {
      title: "Animal Safety",
      description:
        "A web platform focused on animal welfare, including animal shelters, food, medication, and adoption services. Provides medication recommendations based on animal type, physical condition, and health needs.",
      tags: ["HTML", "CSS", "JavaScript", "Web Development"],
      color: "from-green-500/20 to-emerald-500/20",
      githublink: "https://github.com/ylokhande2003/Animal_safety",
      link: "https://github.com/ylokhande2003/Animal_safety",
    },
    {
      title: "Movie Library",
      description:
        "A React.js based movie listing application that displays movies with a clean UI. The project focuses on frontend performance, reusable components, and modern UI design.",
      tags: ["React.js", "JavaScript", "API", "Netlify"],
      color: "from-blue-500/20 to-indigo-500/20",
      githublink: "https://github.com/ylokhande2003/Movie_Frontend",
      link: "https://movie-listshow.netlify.app/",
    },
  ];


  const experience = [
    {
      role: "Associate Software Developer (Full-Time)",
      company: "CoReCo Technologies Pvt Ltd · Pune, India",
      period: "Feb 2025 – Present",
      bullets: [
        "Developed and maintained multiple Java Spring Boot microservices for a multi-tenant B2B SaaS platform serving 4–10 active enterprise clients — designed REST API contracts and business logic layers.",
        "Re-architected the Slack & Microsoft Teams bot infrastructure to a schema-based multi-tenant architecture with dynamic credential resolution and per-client Azure Blob Storage partitioning.",
        "Engineered an end-to-end AI content pipeline integrating 6+ third-party REST APIs with async processing — reduced enterprise trainer content production time by ~60%.",
        "Built and optimised React.js/Next.js modules with TypeScript, Zustand & Redux Toolkit, maintaining Lighthouse scores above 85 and sub-200ms UI interactions.",
        "Improved PostgreSQL API response times by 30% (800ms → 560ms) across 3 high-traffic endpoints via query profiling and composite indexing.",
        "Implemented JWT authentication and RBAC across Spring Boot & Node.js APIs; wrote JUnit tests and ran JMeter load tests at 500 concurrent users, resolving 3 production-blocking bottlenecks.",
      ],
      color: "from-violet-500/20 to-pink-500/20",
    },
    {
      role: "Software Engineering Intern",
      company: "CoReCo Technologies Pvt Ltd · Pune, India",
      period: "Jul 2024 – Jan 2025",
      bullets: [
        "Designed and implemented JWT-based authentication and RBAC in Spring Boot, establishing the API security layer used across all platform endpoints.",
        "Shipped a reusable React.js + Ant Design + Tailwind CSS component library, adopted across 4+ platform modules — reducing UI development time for the team.",
        "Architected initial Slack & Microsoft Teams bot REST integrations that became the foundation for the multi-tenant architecture shipped in the full-time role.",
        "Delivered REST API integrations for AI content features: multimedia slide generation, quiz engine, Markdown editor, and initial LLM-based content hooks.",
        "Debugged and resolved 15+ critical bugs in production REST APIs and frontend validation flows, unblocking QA sign-off on two major release milestones.",
      ],
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
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground leading-relaxed text-sm flex gap-2"
                          >
                            <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
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
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </a>
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
