import { useEffect, useRef } from "react";
import "./Skills.css";
import reactLogo  from "../assets/logos/react.png";
import cssLogo    from "../assets/logos/css.png";
import jsLogo     from "../assets/logos/js.png";
import htmlLogo   from "../assets/logos/html.png";
import githubLogo from "../assets/logos/github.png";


const icons = [
  { name: "HTML",       img: htmlLogo   },
  { name: "CSS",        img: cssLogo    },
  { name: "JavaScript", img: jsLogo     },
  { name: "React.js",   img: reactLogo  },
  { name: "GitHub",     img: githubLogo },
];

const bars = [
  { label: "HTML",       pct: 92 },
  { label: "CSS",        pct: 88 },
  { label: "JavaScript", pct: 82 },
  { label: "React.js",   pct: 78 },
  { label: "GitHub",     pct: 75 },
];

const marqueeText =
  "HTML • CSS • JAVASCRIPT • REACT.JS • GITHUB • FRONTEND • UI DESIGN • ";

export default function Skills() {
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    barRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">

      <h2 className="skills-title sr sr-from-left">MY SKILLS</h2>
      <p className="skills-subtitle sr sr-from-left sr-delay-1">
        // tools &amp; technologies
      </p>

      <div className="skills-layout sr">

        {/* Icon grid */}
        <div className="skills-grid">
          {icons.map((s, i) => (
            <div key={i} className="skill-item">
              <img src={s.img} alt={s.name} />
              <p>{s.name}</p>
            </div>
          ))}
        </div>

        
        <div className="skills-bars">
          {bars.map((b, i) => (
            <div
              key={i}
              className="skill-bar-item"
              ref={(el) => (barRefs.current[i] = el)}
              style={{ "--target-width": `${b.pct}%` }}
            >
              <div className="skill-bar-label">
                <span>{b.label}</span>
                <span>{b.pct}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" />
              </div>
            </div>
          ))}
        </div>

      </div>

      
      <div className="skills-marquee">
        <div className="marquee-track">
          <span>{marqueeText.repeat(4)}</span>
          <span>{marqueeText.repeat(4)}</span>
        </div>
      </div>

    </section>
  );
}