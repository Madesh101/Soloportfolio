import "./WhatIDo.css";


const items = [
  {
    icon: "⌨️",
    title: "FRONTEND DEVELOPMENT",
    desc: "Building pixel-perfect React interfaces with clean component architecture and smooth animations.",
  },
  {
    icon: "🎨",
    title: "UI / UX DESIGN",
    desc: "Visual systems built with intention — typography, color, and spacing that feel deliberate.",
  },
  {
    icon: "⚡",
    title: "MOTION & INTERACTION",
    desc: "Scroll-driven animations and micro-interactions that turn static pages into living experiences.",
  },
  {
    icon: "📱",
    title: "RESPONSIVE DESIGN",
    desc: "Every layout adapts beautifully from wide displays all the way down to small mobile screens.",
  },
  {
    icon: "🚀",
    title: "PERFORMANCE & SEO",
    desc: "Optimized load times, semantic markup, and clean code that makes your site fast and findable.",
  },
];

export default function WhatIDo() {
  return (
    <section className="wid-section" id="services">

      <div className="wid-header sr sr-from-left">
        <h2>WHAT I DO</h2>
        <p>// services &amp; expertise</p>
      </div>

      <ul className="wid-list">
        {items.map((item, i) => (
          <li
            key={i}
            className={`wid-row sr sr-delay-${Math.min(i + 1, 5)}`}
          >
           
            <span className="wid-num">0{i + 1}</span>

            
            <div className="wid-content">
              <span className="wid-icon">{item.icon}</span>
              <span className="wid-name">{item.title}</span>
              <span className="wid-desc">{item.desc}</span>
              <span className="wid-arrow">→</span>
            </div>
          </li>
        ))}
      </ul>

    </section>
  );
}
