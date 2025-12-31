import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Server, GitBranch, Layers } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      title: "Programming Languages",
      description: "Core languages for building robust applications and solving complex problems",
      tools: ["JavaScript", "TypeScript", "Java", "C", "C++", "PHP"],
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Creating responsive, interactive, and visually appealing user interfaces",
      tools: ["React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable server-side applications and RESTful APIs",
      tools: ["Node.js", "Express.js", "Java Spring Boot", "REST APIs"],
    },
    {
      icon: Database,
      title: "Databases",
      description: "Managing and optimizing data storage solutions for applications",
      tools: ["MySQL", "MongoDB", "MSSQL","PostgreSQL"],
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Collaborative development and code management workflows",
      tools: ["Git", "GitHub", "CI/CD Pipelines"],
    },
    {
      icon: Layers,
      title: "Cloud & DevOps",
      description: "Deployment, monitoring, and environment management",
      tools: ["Azure", "Render", "Netlify", "Xampp"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Technical Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl hover-lift group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
