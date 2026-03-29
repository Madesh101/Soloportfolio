import "./Footer.css";

const GITHUB_URL = "https://github.com/Madesh101";

const navLinks = [
  { label: "HERO",     id: "hero"     },
  { label: "ABOUT",    id: "about"    },
  { label: "SERVICES", id: "services" },
  { label: "SKILLS",   id: "skills"   },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT",  id: "contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">

     
      <div className="footer-top">

     
        <a
          className="footer-logo"
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
        >
          DEV<span>.PORT</span>
        </a>

        {/* Nav links */}
        <nav className="footer-nav">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        
        <div className="footer-socials">

          
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
            title="GitHub"
          >
            GH
          </a>

        
          <a
            href="#"
            className="social-icon"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            LI
          </a>

          
          <a
            href="#"
            className="social-icon"
            aria-label="Twitter"
            title="Twitter"
          >
            TW
          </a>

        </div>
      </div>

      <div className="footer-divider" />

     
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} &nbsp;VINAY &nbsp;—&nbsp; ALL RIGHTS RESERVED
        </p>
        <p className="footer-made">
          BUILT BY &nbsp;
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            @MADESH101
          </a>
        </p>
      </div>

    </footer>
  );
}