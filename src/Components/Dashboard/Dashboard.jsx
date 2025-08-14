import { VscHome, VscArchive, VscAccount, VscCallOutgoing, VscCode, VscBriefcase } from "react-icons/vsc";
import { BackgroundBeamsWithCollision } from "../../ui/BackgroundBeamsWithCollision";
import { useLocation, useNavigate } from "react-router-dom";
import {useRef, useEffect, useState} from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { ReactLenis } from "lenis/react";
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import SideMenu from "../Navbar/SideMenu"
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Silk from "../../Common/Silk";
import About from "../About/About";
import Dock from '../Navbar/Dock'
import Hero from "./Hero";

function Dashboard() {
    const [showMenu, setShowMenu] = useState(false);
    const heroRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const expRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            if (location.pathname !== "/") {
              navigate("/", { replace: true });
            }
          } else if (entry.target === aboutRef.current && entry.isIntersecting) {
            if (location.pathname !== "/about") {
              navigate("/about", { replace: true });
            }
          }  else if (entry.target === skillsRef.current && entry.isIntersecting) {
            if (location.pathname !== "/skills") {
              navigate("/skills", { replace: true });
            }
          } else if (entry.target === projectRef.current && entry.isIntersecting) {
            if (location.pathname !== "/projects") {
              navigate("/projects", { replace: true });
            }
          } else if (entry.target === expRef.current && entry.isIntersecting) {
            if (location.pathname !== "/experience") {
              navigate("/experience", { replace: true });
            }
          }  else if (entry.target === contactRef.current && entry.isIntersecting) {
            if (location.pathname !== "/contact") {
              navigate("/contact", { replace: true });
            }
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (heroRef.current) observer.observe(heroRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (expRef.current) observer.observe(expRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (expRef.current) observer.unobserve(expRef.current);
    };
    }, [navigate, location]);

    const sectionRefs = {
    home: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectRef,
    experience: expRef,
    contact: contactRef,
    };

    const scrollToSection = (section) => {
      const ref = sectionRefs[section];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const items = [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'home' } });
        } else {
          scrollToSection('home');
        }
      },
    },
    {
      icon: <VscAccount size={18} />,
      label: 'About',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'about' } });
        } else {
          scrollToSection('about');
        }
      },
    },
    {
      icon: <VscCode size={18} />,
      label: 'Skills',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'skills' } });
        } else {
          scrollToSection('skills');
        }
      },
    },
    {
      icon: <VscArchive size={18} />,
      label: 'Projects',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'projects' } });
        } else {
          scrollToSection('projects');
        }
      },
    },
    {
      icon: <VscBriefcase size={18} />,
      label: 'Experience',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'experience' } });
        } else {
          scrollToSection('experience');
        }
      },
    },
    {
      icon: <VscCallOutgoing size={18} />,
      label: 'Contact',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/', { state: { section: 'contact' } });
        } else {
          scrollToSection('contact');
        }
      },
    },
    ];
    useEffect(() => {
      if (location.pathname === '/' && location.state?.section) {
        // Scroll to section after navigation
        scrollToSection(location.state.section);
      }
    }, [location]);

   

useEffect(() => {
  if (location.state?.section) {
    scrollToSection(location.state.section);
    navigate(location.pathname, { replace: true, state: {} });
  }
}, [location]);



  return (
    <>
      <ReactLenis root />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk speed={5} scale={1} color="#49444d" noiseIntensity={0} rotation={0} />
      </div>
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden bg-transparent">
        <BackgroundBeamsWithCollision />
      </div>

      <div className="relative z-10 overflow-hidden no-scrollbar">
         <div className="fixed w-screen h-20 z-80 top-10 lg:top-20 text-white cursor-pointer ">
            <div className="hidden lg:block">
            <Dock 
              items={items}
              panelHeight={85}
              baseItemSize={70}
              magnification={90}
            />
            </div>
            <div className="block lg:hidden pl-3 sm:pl-12 z-80  ">
               <button aria-label="Toggle menu" onClick={() => setShowMenu(prev => prev)} className='block 2xl:hidden color-gray-400 font-semibold text-2xl md:text-3xl p-0 z-100 rounded-md bg-transparent hover:bg-[#FF6767] group transition-colors duration-300'>
                <Hamburger size={40} color="#949494"  toggled={showMenu} toggle={setShowMenu} aria-label={showMenu ? "Close menu" : "Open menu"} />
               </button>
            </div>
          </div>
        <div id="home-section" ref={heroRef}><Hero /></div>
        <div id="about-section" ref={aboutRef}><About /></div>
        <div id="skills-section" ref={skillsRef}><Skills /></div>
        <div id="projects-section" ref={projectRef}><Projects /></div>
        <div id="experience-section" ref={expRef}><Experience /></div>
        <div id="contact-section" ref={contactRef}><Contact /></div>
        <SideMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      </div>
     
    </>
  );
}

export default Dashboard;
