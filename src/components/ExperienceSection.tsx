import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, GraduationCap } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Apprentice',
    company: 'Pinnacleway Biz',
    location: 'Gurugram, India',
    duration: 'April 2026 – August 2026',
    description: [
      'Engineered secure authentication (signup/login, admin management) using NestJS, supporting thousands of user records within a 100k+ line enterprise codebase.',
      'Designed and documented 20+ RESTful APIs using Swagger (OpenAPI), applying SQL query optimization and third-party integrations while maintaining complete technical documentation.',
      'Implemented JWT/OAuth 2.0 authentication, automated CI/CD pipelines via GitHub Actions, and integrated real-time WebSocket messaging into testing and deployment cycles across Git/GitLab workflows, while using AI/LLM assistants to improve developer productivity.',
      'Implemented real-time secure messaging with WebSockets and contributed to CI/CD pipelines in a 100k+ line enterprise codebase.',
    ],
    technologies: ['React', 'Nest.Js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Vercel', 'PostgreSQL', 'Storybook', 'swagger.io','gitlab', 'github', 'AI/LLM Assistants', 'CI/CD', 'WebSockets', 'OAuth 2.0', 'JWT', 'Debugging'],
    type: 'work',
  },
  {
    id: 2,
    role: 'Full Stack Apprentice',
    company: 'Xeltratech',
    location: 'Noida, India',
    duration: 'January 2025 – August 2025',
    description: [
      'Designed and launched an IT service website using React, showcasing 3+ projects while following coding standards',
      'Streamlined modular architecture and navigation flow, improving scalability and maintainability by 30%',
      'Maintained deployment workflows with Vercel hosting, sustaining 99.9% uptime',
      'Configured responsive web pages with React and Tailwind, ensuring cross-browser compatibility',
    ],
    technologies: ['React', 'Tailwind CSS', 'Vercel', 'Google Workspace'],
    type: 'work',
  },
  {
    id: 3,
    role: 'Master of Computer Applications (MCA)',
    company: 'Amity University',
    location: 'India',
    duration: 'July 2024 – July 2026',
    description: [
      'Pursuing MCA with focus on software development and cloud technologies',
      'Maintaining a CGPA of 8.63/10',
      'Coursework includes OOPs and Database Management Systems (DBMS)',
    ],
    technologies: ['Python', 'JavaScript', 'DBMS', 'OOPs'],
    type: 'education',
  },
  {
    id: 4,
    role: 'Bachelor of commerce (B.Com)',
    company: 'University of Delhi',
    location: 'India',
    duration: 'July 2019 – July 2022',
    description: [
      'Pursuing B.Com with focus on commerce and business studies',
      'Maintaining a CGPA of 7.51/10',
    ],
    technologies: [],
    type: 'education',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
              </div>

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  className="card-glow p-6 md:p-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      exp.type === 'work' 
                        ? 'bg-primary/10 text-primary border-primary/20' 
                        : 'bg-accent/10 text-accent border-accent/20'
                    }`}>
                      {exp.type === 'work' ? 'Work Experience' : 'Education'}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="flex items-center gap-1">
                      {exp.type === 'work' ? <Building2 className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
