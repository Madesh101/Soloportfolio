import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a className="nav-logo" href="#hero">
        DEV<span>.PORT</span>
      </a>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["hero", "about", "services", "skills", "projects", "contact"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-hire" onClick={() => scrollTo("contact")}>
        HIRE ME
      </button>

      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
      </div>
    </nav>
  );
}
