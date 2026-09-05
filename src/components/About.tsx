import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Trophy } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "500+", label: "Problems Solved on LeetCode" },
    { number: "7.9", label: "CGPA (B.Tech CSE)" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Best Employee Award — 2025",
      description: "Recognised at CoReCo Technologies for full-stack ownership, microservice delivery, and measurable production impact",
    },
    {
      icon: Trophy,
      title: "100 Days Coding Challenge",
      description: "Completed on LinkedIn with consistent daily coding",
    },
    {
      icon: Code,
      title: "500+ Coding Problems",
      description: "Solved across arrays, graphs, DP, trees, SQL & sliding window patterns — strong DSA foundation in Java and JavaScript",
    },
  ];

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
              <div className="glass-card w-full h-full rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <motion.div
                    className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <span className="text-6xl font-heading font-bold text-primary-foreground">
                      YL
                    </span>
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Yash Lokhande
                  </h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    B.Tech in Computer Science Engineering — CGPA 7.9/10
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Marathwada Institute of Technology, Aurangabad (2020-2024)
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              About Me
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passionate about building{" "}
              <span className="text-gradient">scalable solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a results-driven Full Stack Developer with 2 years of experience designing,
              building, and deploying scalable web applications across the MERN stack
              (MongoDB, Express.js, React.js, Node.js) and Java Spring Boot ecosystems.
              I've shipped production-grade features — including a multi-tenant
              microservices platform, an end-to-end AI-powered content pipeline, and
              high-performance REST APIs — for an enterprise B2B SaaS product serving
              multiple clients.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I'm skilled in building responsive React.js and Next.js frontends, designing
              secure JWT-authenticated REST APIs, optimising SQL and NoSQL databases, and
              managing Docker-based CI/CD deployments on cloud infrastructure. I thrive in
              Agile/Scrum teams alongside Product, QA, and UI/UX, and I'm looking for
              full-stack or backend engineering roles at product- or service-based companies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass-card rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
