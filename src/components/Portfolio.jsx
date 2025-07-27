import { useEffect, useState } from "react";
import LandingPageHeader from "../components/LandingPageHeader";
import InnerPagesHeader from "../components/InnerPagesHeader";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";

function Portfolio() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [fadeHeader, setFadeHeader] = useState("opacity-100");

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = document.getElementById("home")?.offsetHeight || 500;
      const atTop = window.scrollY < homeHeight - 100;

      // Only trigger state update if changed
      if (atTop !== isAtTop) {
        // Fade out old header
        setFadeHeader("opacity-0");
        setTimeout(() => {
          setIsAtTop(atTop);
          setFadeHeader("opacity-100");
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAtTop]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ease-in-out ${fadeHeader}`}
      >
        {isAtTop ? <LandingPageHeader /> : <InnerPagesHeader />}
      </div>

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Portfolio;
