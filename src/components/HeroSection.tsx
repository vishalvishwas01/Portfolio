import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary font-medium text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-foreground">Vishal</span>
            <br />
            <span className="gradient-text">Vishwas</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-muted-foreground font-display mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building scalable web applications with React, Next.js, Node.js, and cloud technologies like AWS.
            MCA student at Amity University with expertise in MERN stack and AI-powered solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button onClick={scrollToProjects} className="hero-button">
              View Projects
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com/vishalvishwas01' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vishalvishwas' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=vishalvishwas7082@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl scale-110" />
            
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glow-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={profileImage}
                alt="Vishal Vishwas"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 card-glow px-4 py-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-primary font-semibold">MCA @ Amity</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
