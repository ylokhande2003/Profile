import { motion } from "framer-motion";
import { ArrowDown, Phone, Mail, MapPin, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-primary/50 rounded-lg"
        animate={{ y: [20, -20, 20], rotate: [0, -180, -360] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary/60"
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full backdrop-blur-sm bg-primary/5">
            🏆 Best Employee Award — CoReCo Technologies, 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Hi, I'm</span>
          <br />
          <span className="text-gradient">Yash Lokhande</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-primary/90 font-medium mb-4 tracking-wide"
        >
          Full Stack Developer · MERN Stack · Java Spring Boot · Microservices
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 font-body"
        >
          Results-driven Full Stack Developer with 2 years of experience building
          scalable web applications across the MERN stack and Java Spring Boot
          ecosystems — from multi-tenant microservices to AI-powered content
          pipelines serving enterprise clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Pune, Maharashtra, India
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +91-7775058622
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            yashlokhande20@gmail.com
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover-lift glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/Yash_Lokhande_FullStack_Resume-1.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.a
            href="https://github.com/ylokhande2003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yash-lokhande-34a313227/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
