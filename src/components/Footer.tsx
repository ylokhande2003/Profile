import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-muted-foreground text-sm flex items-center gap-1"
        >
          © {new Date().getFullYear()} Yash Lokhande. Crafted with{" "}
          <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-muted-foreground text-sm"
        >
          Designed & Built by{" "}
          <span className="text-gradient font-medium">YL</span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
