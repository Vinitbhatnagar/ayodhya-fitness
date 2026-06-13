import "./App.css";

import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import PersonalTraining from "./components/PersonalTraining";
import Trainers from "./components/Trainers";
import FacilitiesTour from "./components/FacilitiesTour";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ScrollProgress from "./components/ScrollProgress";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cursor Glow
    const glow = document.querySelector(".cursor-glow");

    const move = (e) => {
      if (!glow) return;

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PersonalTraining />
      <Trainers />
      <FacilitiesTour />
      <Transformations />
      <Testimonials />
      <Pricing />
      <ScrollProgress />
      <Contact />
    </>
  );
}

export default App;
