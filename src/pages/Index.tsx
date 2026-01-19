import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
