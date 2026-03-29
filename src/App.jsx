import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./scrollReveal.css"; // glitch-flicker scroll animations

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    /* ── Custom cursor ── */
    const dot  = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    const moveCursor = (e) => {
      dot.style.left  = `${e.clientX}px`;
      dot.style.top   = `${e.clientY}px`;
      ring.animate(
        {
          left: `${e.clientX + e.movementX * 2}px`,
          top:  `${e.clientY + e.movementY * 2}px`,
        },
        { duration: 150, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    /* ── Glitch scroll-reveal observer ── */
    // Targets all elements with class "sr" (new system)
    // and legacy "reveal" class (existing components — About, Hero, etc.)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // new system
            entry.target.classList.add("sr-visible");
            // legacy system
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".sr, .reveal")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />

      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <section id="hero">
            <Hero />
          </section>

          {/* Services replaced by WhatIDo */}
          <section id="services">
            <WhatIDo />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
