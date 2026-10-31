import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Network,
  Send,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';
import { track } from '@vercel/analytics';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import profileImage from '@/assets/profile.jpg';
import Hallguard from '@/assets/Hallguard.png';
import DataVine from '@/assets/DataVine.png';
import BridgeTalk from '@/assets/BridgeTalk.png';
import FileWhisper from '@/assets/FileWhisper.png';
import TaskManager from '@/assets/TaskManager.png';

type SectionId = 'home' | 'about' | 'work' | 'capabilities' | 'journey' | 'education' | 'contact';

const navItems: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'journey', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

const projects = [
  {
    number: '01',
    title: 'HallGuard',
    type: 'Privacy infrastructure',
    image: Hallguard,
    description: 'A local-first DLP layer for the AI tools teams already use. It catches sensitive data before it leaves the browser.',
    outcome: '4-layer detection engine',
    tags: ['React', 'Python', 'AWS', 'MongoDB'],
    live: 'https://hallguard.in',
    github: 'https://github.com/vishalvishwas01/HallGuard',
    tone: 'mint',
  },
  {
    number: '02',
    title: 'DataVine',
    type: 'Form intelligence',
    image: DataVine,
    description: 'A custom form builder that turns response collection into a calm, trackable workflow for modern teams.',
    outcome: '40% faster form creation',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'Razorpay'],
    github: 'https://github.com/vishalvishwas01/Datavine',
    tone: 'lilac',
  },
  {
    number: '03',
    title: 'BridgeTalk',
    type: 'Realtime communication',
    image: BridgeTalk,
    description: 'A multilingual chat space where translation happens in the flow of conversation, across six languages.',
    outcome: '<2s message delivery',
    tags: ['React', 'Node.js', 'Firebase', 'Vercel'],
    github: 'https://github.com/vishalvishwas01/BridgeTalk',
    tone: 'peach',
  },
  {
    number: '04',
    title: 'File Whisper',
    type: 'GenAI document chat',
    image: FileWhisper,
    description: 'An AI workspace for asking better questions of the documents you already have, with secure file ingestion.',
    outcome: '95%+ response accuracy',
    tags: ['React', 'AWS Lambda', 'S3', 'JWT'],
    github: 'https://github.com/vishalvishwas01/FileWhisperPublic',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'Task Manager',
    type: 'Personal systems',
    image: TaskManager,
    description: 'A focused task system with history, due dates and safe user-level data isolation built in from day one.',
    outcome: 'Secure CRUD + history',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/vishalvishwas01/TaskManager',
    tone: 'yellow',
  },
];

const capabilityGroups = {
  Build: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'REST APIs', 'WebSockets', 'Oauth 2.0'],
  Shape: ['Design systems', 'Motion UI', 'Prototyping', 'Accessibility', 'Responsive design', 'Latency optimization'],
  Ship: ['AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis', 'CI/CD', 'Observability'],
};
const journey = [
  {
    date: 'Aug 2026 - now',
    role: 'Software Engineer Intern',
    company: 'Supercode',
    location: 'Bengaluru, India',
    summary: 'Building Aether, a production-grade rate-limiting service for high-volume, hostile traffic. The work sits across API design, queueing and deployment, where every millisecond and failure mode matters.',
    achievements: ['Handles up to 10,000 requests per second with Redis-backed request queueing and batch processing.', 'Blocks 43% of malicious traffic through layered DDoS mitigation.', 'Cut API latency by 90%, taking request workflows from 10 seconds to under 1 second.'],
    impact: [{ value: '10k', label: 'requests / sec' }, { value: '43%', label: 'threats blocked' }, { value: '−90%', label: 'API latency' }],
    tags: ['Node.js', 'Python', 'Redis', 'Kubernetes'],
    current: true,
  },
  {
    date: 'Apr 2026 - Aug 2026',
    role: 'Full Stack Apprentice',
    company: 'Pinnacleway Biz',
    location: 'Gurugram, India',
    summary: 'Helped move a large enterprise product forward across identity, API design and realtime communication, working inside a 100k+ line codebase.',
    achievements: ['Designed secure signup, login and admin flows supporting thousands of user records.', 'Built and documented 20+ REST APIs with OpenAPI, SQL query tuning and third-party integrations.', 'Implemented JWT and OAuth 2.0 flows, WebSocket messaging and automated CI/CD workflows.'],
    impact: [{ value: '20+', label: 'APIs shipped' }, { value: '100k+', label: 'lines of code' }, { value: '3', label: 'core workstreams' }],
    tags: ['NestJS', 'PostgreSQL', 'OAuth 2.0', 'CI/CD'],
  },
  {
    date: 'Jan 2025 - Jul 2025',
    role: 'Full Stack Apprentice',
    company: 'Xeltratech',
    location: 'Noida, India',
    summary: 'Turned product ideas into a public-facing IT services site, then improved the underlying structure so the team could keep shipping confidently.',
    achievements: ['Designed and launched a responsive React site showcasing more than three projects.', 'Refined modular architecture and navigation, improving maintainability by 30%.', 'Kept deployment workflows reliable at 99.9% uptime on Vercel.'],
    impact: [{ value: '99.9%', label: 'uptime' }, { value: '30%', label: 'better maintainability' }, { value: '3+', label: 'projects showcased' }],
    tags: ['React', 'Tailwind', 'Vercel'],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const aboutIntroVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { delayChildren: 0.08, staggerChildren: 0.13 } },
};

const aboutLineVariants: Variants = {
  hidden: { y: '112%', rotateX: -18, opacity: 0 },
  visible: { y: '0%', rotateX: 0, opacity: 1, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
};

const reducedAboutLineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

const aboutCopyVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

const aboutCopyItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const reducedAboutCopyItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

const Index = () => {
  const scrollTo = useSmoothScroll();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress: aboutEntryProgress } = useScroll({ target: aboutRef, offset: ['start end', 'start 25%'] });
  const { scrollYProgress: aboutSectionProgress } = useScroll({ target: aboutRef, offset: ['start start', 'end end'] });
  const aboutReveal = useSpring(useTransform(aboutEntryProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 24, mass: 0.25 });
  const tickerY = useTransform(aboutEntryProgress, [0, 1], [0, -18]);
  const tickerOpacity = useTransform(aboutEntryProgress, [0, 0.72, 1], [1, 1, 0.62]);
  const aboutEmblemRotate = useTransform(aboutSectionProgress, [0, 0.5, 1], [0, 360, 720]);
  const aboutEmblemY = useTransform(aboutEntryProgress, [0, 1], [30, 0]);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [capability, setCapability] = useState<keyof typeof capabilityGroups>('Build');
  const [activeExperience, setActiveExperience] = useState(0);
  const [copied, setCopied] = useState(false);
  const journeyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: journeyProgress } = useScroll({ target: journeyRef, offset: ['start 0.8', 'end 0.3'] });
  const journeyLineProgress = useSpring(journeyProgress, { stiffness: 100, damping: 24, mass: 0.2 });

  useEffect(() => {
    const ids: SectionId[] = ['home', 'about', 'capabilities', 'journey', 'work', 'education', 'contact'];
    const observers = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, { rootMargin: '-35% 0px -55% 0px' });
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const orbitWords = useMemo(() => ['systems', 'interfaces', 'products', 'stories'], []);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('vishalvishwas7082@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="paper-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); scrollTo('home'); }}>
            <span className="brand-mark">V</span>
            <span>Vishal Vishwas</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.id} className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); scrollTo(item.id); }}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="mailto:vishalvishwas7082@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button className="menu-trigger" aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(true)}><Menu size={21} /></button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-navigation" className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu-top"><span className="brand"><span className="brand-mark">V</span><span>Vishal Vishwas</span></span><button className="menu-trigger" aria-label="Close navigation" onClick={() => setMobileOpen(false)}><X size={21} /></button></div>
            <div className="mobile-links">
              {navItems.map((item, index) => (
                <motion.a key={item.id} href={`#${item.id}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} onClick={(event) => { event.preventDefault(); setMobileOpen(false); scrollTo(item.id); }}>
                  <span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="hero-section section-pad">
          <motion.div className="hero-copy" style={{ y: reduceMotion ? 0 : heroY }}>
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span className="eyebrow-dot" /> FULL STACK ENGINEER · AI SYSTEMS</motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
              I build <span className="ink-highlight">calm</span><br />
              interfaces for<br />
              <span className="outline-word">complex systems.</span>
            </motion.h1>
            <motion.p className="hero-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Full stack developer turning ambitious ideas into clear, fast and useful digital products, from AI workflows to realtime communication.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}>
              <button className="button button-dark" onClick={() => scrollTo('work')}>Explore selected work <ArrowDownRight size={17} /></button>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => track('resume_click')}>View résumé <MoveUpRight size={16} /></a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <span><span className="live-dot" /> Available for select roles</span><span className="meta-divider" /><span><MapPin size={14} /> Bengaluru / Remote</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
            <div className="visual-label visual-label-top"><span>01 / 05</span><span>Scroll to explore</span></div>
            <div className="portrait-frame">
              <div className="portrait-scan" />
              <img src={profileImage} alt="Vishal Vishwas" />
              <div className="portrait-overlay" />
              <div className="portrait-caption"><span>Vishal Vishwas</span><span>Engineer / maker</span></div>
            </div>
            <motion.div className="orbit orbit-one" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}><span>React</span><span>AI</span><span>Cloud</span></motion.div>
            <motion.div className="float-card float-card-main" animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><span className="card-kicker"><Sparkles size={13} /> Currently shipping</span><strong>Aether</strong><span>rate limiting · 10k req/s</span></motion.div>
            <motion.div className="float-card float-card-stat" animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}><strong>−90%</strong><span>API latency</span></motion.div>
          </motion.div>
        </section>

        <motion.div className="ticker" aria-label="Specialties" style={{ y: reduceMotion ? 0 : tickerY, opacity: reduceMotion ? 1 : tickerOpacity }}>
          <div className="ticker-track">
            {[0, 1, 2, 3].map((copy) => (
                <div className="ticker-group" key={`ticker-group-${copy}`} aria-hidden={copy > 0}>
                {orbitWords.map((word) => <span key={word}>{word} <b>✳</b></span>)}
              </div>
            ))}
          </div>
        </motion.div>

        <section id="about" className="section-pad about-section" ref={aboutRef}>
          <motion.div className="section-intro about-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={aboutIntroVariants}>
            <div className="about-title-block">
              <div className="about-topline"><span className="section-index">01 / About</span><span>Personal operating system</span></div>
              <motion.div className="about-arrival-rule" style={{ scaleX: reduceMotion ? 1 : aboutReveal }} />
              <h2 className="about-title" aria-label="The work in between the pixels.">
                <span className="about-line-mask"><motion.span variants={reduceMotion ? reducedAboutLineVariants : aboutLineVariants}>The work in between</motion.span></span>
                <span className="about-line-mask about-line-accent"><motion.span variants={reduceMotion ? reducedAboutLineVariants : aboutLineVariants}><em>the pixels.</em></motion.span></span>
              </h2>
            </div>
            <motion.div className="about-emblem" style={{ rotate: reduceMotion ? 0 : aboutEmblemRotate, y: reduceMotion ? 0 : aboutEmblemY }} variants={reduceMotion ? reducedAboutLineVariants : { hidden: { opacity: 0, scale: 0.78 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } } }}>
              <div className="emblem-orbit emblem-orbit-outer"><span>curiosity</span><span>craft</span></div>
              <div className="emblem-orbit emblem-orbit-inner"><span>VV</span></div>
              <span className="emblem-spark">✳</span>
              <span className="emblem-caption">Always in progress<br />India · 2026</span>
            </motion.div>
          </motion.div>
          <div className="about-grid">
            <motion.div className="about-statement" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={aboutCopyVariants}>
              <motion.p className="big-copy" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}>I like the part where a messy problem becomes a product that feels obvious.</motion.p>
              <motion.p variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}>I&apos;m Vishal, a full stack engineer and MCA graduate at Amity University. My sweet spot sits between thoughtful product design, reliable backend systems and the tiny moments of motion that make software feel human.</motion.p>
              <motion.p variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}>Most recently, I&apos;ve been working on resilient infrastructure at Supercode. Before that: enterprise APIs, AI dashboards, multilingual chat and a lot of curiosity.</motion.p>
              <motion.a className="text-link" href="mailto:vishalvishwas7082@gmail.com" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}>Start a conversation <ArrowUpRight size={16} /></motion.a>
            </motion.div>
            <motion.div className="metrics-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={aboutCopyVariants}>
              <motion.div className="metric-card" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}><span>01</span><strong>8.63</strong><p>CGPA · MCA @ Amity</p></motion.div>
              <motion.div className="metric-card" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}><span>02</span><strong>10k</strong><p>requests / second</p></motion.div>
              <motion.div className="metric-card" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}><span>03</span><strong>99.9%</strong><p>deployment uptime</p></motion.div>
              <motion.div className="metric-card" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}><span>04</span><strong>20+</strong><p>APIs documented</p></motion.div>
              <motion.div className="contact-mini" variants={reduceMotion ? reducedAboutCopyItemVariants : aboutCopyItemVariants}><span>Say hello</span><a href="mailto:vishalvishwas7082@gmail.com">vishalvishwas7082@gmail.com <ArrowUpRight size={14} /></a><button onClick={copyEmail}>{copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy email</>}</button></motion.div>
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="section-pad capabilities-section">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}><span className="section-index">02 / Skills</span><h2>From first sketch<br />to <em>last mile.</em></h2></motion.div>
          <div className="capability-layout">
            <div className="capability-tabs" role="group" aria-label="Capability categories">
              {(Object.keys(capabilityGroups) as (keyof typeof capabilityGroups)[]).map((group, index) => <button key={group} className={capability === group ? 'selected' : ''} aria-pressed={capability === group} onClick={() => setCapability(group)}><span>0{index + 1}</span>{group}<ArrowUpRight size={17} /></button>)}
              <div className="capability-note"><Terminal size={16} /><span>Always learning,<br />usually building.</span></div>
            </div>
            <div className="capability-content"><AnimatePresence mode="wait"><motion.div key={capability} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}><div className="capability-title"><span>What I bring to the table</span><span className="capability-count">{String(capabilityGroups[capability].length).padStart(2, '0')} skills</span></div><div className="skill-cloud">{capabilityGroups[capability].map((skill, index) => <motion.span key={skill} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.045 }}>{skill}</motion.span>)}</div><div className="capability-foot"><Code2 size={18} /><p>Good systems feel quiet. I care about the structure underneath, the handoff between states and how the whole thing holds up when the happy path ends.</p></div></motion.div></AnimatePresence></div>
          </div>
        </section>

        <section id="journey" className="section-pad journey-section" ref={journeyRef}>
          <motion.div className="section-intro journey-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="section-index">03 / Experience</span>
            <h2>Progress is a<br /><em>team sport.</em></h2>
            <p>Three chapters of turning hard problems into systems people can rely on.</p>
          </motion.div>
          <div className="experience-layout">
            <div className="experience-selector-wrap">
              <motion.div className="experience-track"><motion.i style={{ scaleY: journeyLineProgress }} /></motion.div>
              <div className="experience-selector" role="group" aria-label="Choose an experience">
                {journey.map((item, index) => (
                  <button key={item.company} className={`experience-choice ${activeExperience === index ? 'selected' : ''}`} aria-pressed={activeExperience === index} onClick={() => setActiveExperience(index)}>
                    <span className="experience-choice-index">0{index + 1}</span>
                    <span className="experience-choice-copy"><strong>{item.company}</strong><small>{item.role}</small><small>{item.date}</small></span>
                    <ArrowUpRight size={18} className="experience-choice-arrow" />
                  </button>
                ))}
              </div>
              <div className="experience-scroll-cue"><span className="live-dot" /> Scroll to trace the timeline</div>
            </div>
            <div className="experience-detail-wrap">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article className="experience-detail" id="experience-panel" key={activeExperience} initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -16, filter: 'blur(3px)' }} transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="experience-detail-top"><span className="detail-index">Experience / 0{activeExperience + 1}</span>{journey[activeExperience].current && <span className="current-pill"><span className="live-dot" /> Current role</span>}</div>
                  <div className="experience-date">{journey[activeExperience].date}</div>
                  <h3>{journey[activeExperience].role}</h3>
                  <div className="experience-company"><span>{journey[activeExperience].company}</span><span className="experience-location"><MapPin size={13} /> {journey[activeExperience].location}</span></div>
                  <p className="experience-summary">{journey[activeExperience].summary}</p>
                  <div className="impact-grid">{journey[activeExperience].impact.map((metric) => <div className="impact-cell" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
                  <div className="experience-achievements"><span className="achievement-label"><Sparkles size={13} /> Selected impact</span><ul>{journey[activeExperience].achievements.map((achievement, index) => <motion.li key={achievement} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.08 }}><span>0{index + 1}</span>{achievement}</motion.li>)}</ul></div>
                  <div className="tag-row">{journey[activeExperience].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="detail-footer"><span>Swipe / select a chapter</span><div>{journey.map((item, index) => <button key={item.company} aria-label={`Show ${item.company}`} aria-pressed={activeExperience === index} className={activeExperience === index ? 'selected' : ''} onClick={() => setActiveExperience(index)} />)}</div></div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <motion.div className="section-intro work-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="section-index">04 / Selected projects</span><h2>Proof, in <em>public.</em></h2><p>Real products, real constraints, and a few rabbit holes worth keeping.</p>
          </motion.div>
          <div className="project-stack">
            {projects.map((project, index) => (
              <motion.article className={`project-card tone-${project.tone}`} key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} transition={{ delay: index * 0.04 }}>
                <div className="project-image-wrap"><img src={project.image} alt={`${project.title} product preview`} /><div className="project-image-wash" /><span className="project-number">{project.number}</span>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="image-link" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a>}</div>
                <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-outcome"><Check size={15} /> {project.outcome}</div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={15} /></a>}<a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source</a></div></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="section-pad education-section">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}><span className="section-index">05 / Education</span><h2>Curiosity with<br /><em>structure.</em></h2></motion.div>
          <motion.article className="education-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="education-main"><span className="education-overline">Master of Computer Applications</span><h3>Amity University</h3><p>Focused on software development and cloud technologies, with coursework in object-oriented programming and database systems.</p><div className="education-tags"><span>July 2024 - July 2026</span><span>India</span><span>Software development</span><span>Cloud technologies</span></div></div>
            <div className="education-score"><span>Academic standing</span><strong>8.63</strong><small>CGPA / 10</small><div className="score-track"><i /></div></div>
          </motion.article>
        </section>

        <section id="contact" className="contact-section section-pad">
          <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
            <div className="contact-glow" /><div className="contact-card-content"><span className="section-index">06 / Contact</span><h2>Have a good<br /><em>problem?</em></h2><p>Tell me what you&apos;re making, what&apos;s stuck, or what could feel a little more human.</p><a className="button button-light" href="mailto:vishalvishwas7082@gmail.com">Let&apos;s make something <Send size={16} /></a></div><div className="contact-side"><div className="contact-orbit"><Network size={30} /></div><span>Open to thoughtful<br />collaborations</span><a href="mailto:vishalvishwas7082@gmail.com">vishalvishwas7082@gmail.com <ArrowUpRight size={15} /></a></div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">V</span><span>Vishal Vishwas</span></div><p>Designed, built and shipped with intent.</p><div className="footer-links"><a href="https://github.com/vishalvishwas01" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com/in/vishalvishwas" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:vishalvishwas7082@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="#home" onClick={(event) => { event.preventDefault(); scrollTo('home'); }} aria-label="Back to top"><ChevronDown size={18} className="rotate-180" /></a></div></footer>
    </div>
  );
};

export default Index;
