import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Cloud, BookOpen } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  colorClass: string;
  badgeClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    colorClass: 'text-skill-frontend',
    badgeClass: 'skill-badge-frontend',
  },
  {
    title: 'Technologies',
    icon: Server,
    skills: ['React.js', 'Next.js', 'Flask', 'FastAPI', 'Node.js', 'Express', 'MERN', 'Framer Motion', 'Material UI', 'Bootstrap', 'JWT', 'WebSockets', 'RESTful API', 'GraphQL', 'Git','Lovable'],
    colorClass: 'text-skill-backend',
    badgeClass: 'skill-badge-backend',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    colorClass: 'text-skill-database',
    badgeClass: 'skill-badge-database',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS S3', 'AWS EC2', 'AWS Lambda', 'CI/CD Pipeline', 'GitHub Actions', 'Docker', 'Vercel'],
    colorClass: 'text-skill-tools',
    badgeClass: 'skill-badge-tools',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-glow p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.colorClass}`} />
                </div>
                <h3 className={`text-xl font-display font-bold ${category.colorClass}`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={category.badgeClass}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05 + 0.3,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework section */}
        <motion.div
          className="mt-16 card-glow p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-bold text-foreground">
              Coursework
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Object-Oriented Programming (OOPs)', 'Database Management Systems (DBMS)'].map((course, index) => (
              <motion.span
                key={course}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
