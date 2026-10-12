import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import AchievementMetrics from "@/components/AchievementMetrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <AchievementMetrics />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
