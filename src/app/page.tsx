import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Projects from "@/components/Projects";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Projects />
        <Comparison />
        <Services />
        <About />
        <Process />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
