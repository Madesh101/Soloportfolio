import "./Projects.css";
import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/soloP.png";
import rockpaperscissorsImg from "../assets/RPS.png";
import todolistImg from "../assets/Todo.png";



const projects = [
  {
    num: "01",
    title: "PORTFOLIO",
    desc: "Personal developer portfolio with retro terminal aesthetic, glitch animations, matrix rain, shattered glass profile, and scroll-triggered effects.",
    tags: ["React", "CSS3", "Vite"],
    image: portfolioImg,              // ← add your portfolio screenshot here
    liveLink: "https://soloportfoliom.vercel.app",          
    githubLink: "https://github.com/Madesh101/Soloportfolio",        
    liveLabel: "LIVE DEMO",
    githubLabel: "GITHUB",
  },
  {
    num: "02",
    title: "E-COMMERCE",
    desc: "Ecommerce website with product listings, cart, and checkout flow.",
    tags: ["React", "JavaScript", "CSS"],
    image: ecommerceImg,              
    liveLink: "https://soloecommerce.vercel.app",
    githubLink: "https://github.com/Madesh101/ecommerce-project",
    liveLabel: "LIVE DEMO",
    githubLabel: "GITHUB",
  },
  {
    num: "03",
    title: "TODO LIST",
    desc: "Minimal productivity app with task management, completion tracking, and a clean monochrome interface. Built with vanilla JS logic.",
    tags: ["React", "JavaScript", "CSS"],
    image: todolistImg,            
    liveLink: "https://solotodolist.vercel.app",
    githubLink: "https://github.com/Madesh101/Todo-list",
    liveLabel: "LIVE DEMO",
    githubLabel: "GITHUB",
  },
  {
    num: "04",
    title: "ROCK PAPER SCISSORS",
    desc: "Interactive rock paper scissors game with score tracking, animated choices, and instant result feedback. Clean minimal UI.",
    tags: ["JavaScript", "CSS", "HTML"],
    image: rockpaperscissorsImg,              
    liveLink: "https://solorockpaperscissors.vercel.app",
    githubLink: "https://github.com/Madesh101/Rock-Paper-Scissors",
    liveLabel: "LIVE DEMO",
    githubLabel: "GITHUB",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">

      <div className="projects-header reveal">
        <h2>PROJECTS</h2>
        <p>// selected works</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* ── Thumbnail ── */}
            <div className="project-thumb">

              {p.image ? (
                /* Real screenshot */
                <img src={p.image} alt={p.title} />
              ) : (
                /* Styled placeholder until you add screenshots */
                <div className="project-thumb-placeholder">
                  <div className="placeholder-bg" />
                  <span className="placeholder-label">[ SCREENSHOT ]</span>
                  <span className="placeholder-num">{p.num}</span>
                </div>
              )}

              {/* Hover overlay with live + github buttons */}
              <div className="project-overlay">
                {p.liveLink ? (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    ↗ {p.liveLabel}
                  </a>
                ) : (
                  <span className="overlay-btn disabled">↗ {p.liveLabel}</span>
                )}

                {p.githubLink ? (
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    ⌥ {p.githubLabel}
                  </a>
                ) : (
                  <span className="overlay-btn disabled">⌥ {p.githubLabel}</span>
                )}
              </div>

            </div>

            {/* ── Body ── */}
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              {/* Text links below card */}
              <div className="project-links">
                {p.liveLink ? (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                    ↗ LIVE DEMO
                  </a>
                ) : (
                  <span className="proj-link no-link">↗ LIVE DEMO</span>
                )}

                {p.githubLink ? (
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                    ⌥ GITHUB
                  </a>
                ) : (
                  <span className="proj-link no-link">⌥ GITHUB</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}