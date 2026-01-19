import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import DataVine from '@/assets/DataVine.png';
import BridgeTalk from '@/assets/BridgeTalk.png';
import FileWhisper from '@/assets/FileWhisper.png';
import TaskManager from '@/assets/TaskManager.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Datavine Custom Form Builder',
    description: 'A MERN stack form builder used to create and share custom forms, supporting real-time tracking for hundreds of responses through public access links.',
    image: DataVine,
    tags: ['Next.js 15', 'MongoDB', 'Tailwind', 'Material UI', 'NextAuth', 'Razorpay'],
    liveUrl: 'https://datavine.gleeze.com',
    githubUrl: 'https://github.com/vishalvishwas01/Datavine',
    highlights: [
      'Structured backend with 5+ API routes and optimized Mongoose models',
      'Integrated Google OAuth and Razorpay payment with 100% order verification',
      'Reduced form creation time by 40% through UI improvements'
    ],
  },
  {
    id: 2,
    title: 'BridgeTalk Multilingual Chat',
    description: 'A real-time chat application with automatic multi-language translation for 6+ languages, enabling seamless interaction between users globally.',
    image: BridgeTalk,
    tags: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://bridgetalk.gleeze.com',
    githubUrl: 'https://github.com/vishalvishwas01/BridgeTalk',
    highlights: [
      'Secure authentication, Firestore storage, and media sharing',
      'Validated with 1,000+ message exchanges, achieving under 2s delivery',
      'Cross-platform compatibility across 3+ browsers'
    ],
  },
  {
    id: 3,
    title: 'File Whisper AI Dashboard',
    description: 'A full-stack AI dashboard for document interaction, enabling users to chat with PDF/DOCX files with over 95% response accuracy using Hugging Face AI API.',
    image: FileWhisper,
    tags: ['React', 'AWS Lambda', 'AWS S3', 'JWT', 'Google OAuth'],
    liveUrl: 'https://filewhisper.gleeze.com',
    githubUrl: 'https://github.com/vishalvishwas01/FileWhisperPublic',
    highlights: [
      'Secured access for 10+ users via JWT and Google OAuth',
      'File upload with progress tracking, supporting up to 10MB',
      'Increased session duration from 1 to 3+ minutes'
    ],
  },
  {
    id: 4,
    title: 'Multi Task Manager',
    description: 'Multi Task Manager, a web application built to simplify and streamline daily task management through an intuitive and responsive interface.',
    image: TaskManager,
    tags: ['React', 'Tailwind CSS', 'shadcn', 'Vercel', 'Restful API', 'Node.js', 'MongoDB'],
    liveUrl: 'https://task-manager-privated.vercel.app/',
    githubUrl: 'https://github.com/vishalvishwas01/TaskManager',
    highlights: [
      'User authentication system with personalized task management Perform Create, Read, Update, and Delete operations Update task status',
      'Due dates View a detailed history of completed and edited tasks All tasks are securely stored and accessed by username for data isolation',
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <motion.div
                    className="grid lg:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Project Image */}
                    <div className="project-card overflow-hidden rounded-2xl">
                      <div className="relative aspect-video overflow-hidden w-full h-full">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="project-card-image"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                      <motion.span
                        className="text-primary font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        Project {String(index + 1).padStart(2, '0')}
                      </motion.span>
                      
                      <motion.h3
                        className="text-3xl md:text-4xl font-display font-bold text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-muted-foreground text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Highlights */}
                      <motion.ul
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.65 }}
                      >
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </motion.ul>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hero-button inline-flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hero-button-outline inline-flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
