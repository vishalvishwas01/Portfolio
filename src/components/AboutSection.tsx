import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import {Copy} from './ui/Copy'

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishalvishwas7082@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=vishalvishwas7082@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8851565291",
      href: "tel:+918851565291",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vishalvishwas01",
      href: "https://github.com/vishalvishwas01",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vishalvishwas",
      href: "https://linkedin.com/in/vishalvishwas",
    },
  ];

  const stats = [
    { icon: Briefcase, value: "3+", label: "Projects Live" },
    { icon: GraduationCap, value: "MCA", label: "Amity University" },
    { icon: MapPin, value: "8.63", label: "CGPA" },
  ];

  const [copied, setCopied] = useState({ email: false, phone: false });

  const handleCopy = (type: "email" | "phone", value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
    });
  };

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glow p-8"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
              Who am I?
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer currently pursuing my MCA
                at Amity University with a CGPA of 8.63. I specialize in
                building modern web applications using React, Next.js, Node.js,
                and cloud technologies.
              </p>
              <p>
                My expertise spans across the MERN stack, with hands-on
                experience in building real-time applications, AI-powered
                dashboards, and scalable form builders. I'm proficient in AWS
                services, Docker, and CI/CD pipelines.
              </p>
              <p>
                I recently completed my Full Stack Apprenticeship at Xeltratech,
                where I designed IT service websites, streamlined modular
                architectures, and maintained deployment workflows with 99.9%
                uptime.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
              Get in Touch
            </h3>

            {contactInfo.map((contact, index) => (
              <motion.div key={index} className="flex items-center gap-2">
                <motion.a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card-glow p-4 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300 flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
                {contact.label === "Email" && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy("email", contact.value);
                    }}
                    className="p-2 rounded  text-white hidden sm:block whitespace-nowrap transition-colors"
                  >
                    {copied.email ? <Check/> : <Copy height={26} width={26} />}
                  </button>
                )}
                {contact.label === "Phone" && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy("phone", contact.value);
                    }}
                    className="p-2 rounded text-white hidden sm:block whitespace-nowrap transition-colors"
                  >
                    {copied.phone ? <Check/> : <Copy height={26} width={26} />}
                  </button>
                )}
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=vishalvishwas7082@gmail.com"
                target="blank"
                className="hero-button inline-flex items-center gap-2 w-full justify-center"
              >
                <Mail className="w-5 h-5" />
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
