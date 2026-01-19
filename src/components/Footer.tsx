import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by{' '}
              <span className="text-foreground font-medium">Vishal Vishwas</span>
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
