import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Phone, Code2 } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef();
   const form = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/ylokhande2003", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-lokhande-34a313227/", label: "LinkedIn" },
    { icon: Code2, href: "https://leetcode.com/u/yashlokhande610/", label: "LeetCode" },
  ];

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_7q5pyeb",
         "template_t1qz5bp",
         form.current,
         "LekNACnhzoD69gCyA"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
     e.target.reset();
   };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or looking for a dedicated developer? I'd
            love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Contact info and social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground">
            <a
              href="mailto:yashlokhande20@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              yashlokhande20@gmail.com
            </a>
            <a
              href="tel:+917775058622"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91-7775058622
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Pune, Maharashtra, India
            </span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
