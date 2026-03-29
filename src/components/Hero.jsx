import { useEffect, useRef } from "react";
import "./Hero.css";
import profileImg from "../assets/profile.png";

function useTypingEffect(text, charDelay = 55, startDelay = 1000) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(iv);
      }, charDelay);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, charDelay, startDelay]);
  return ref;
}

function useMatrixCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const cols  = Math.floor(canvas.width / 14);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテト";
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "12px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const id = setInterval(draw, 60);
    return () => clearInterval(id);
  }, []);
}

export default function Hero() {
  const roleRef   = useTypingEffect("FRONTEND DEVELOPER", 55, 1000);
  const matrixRef = useRef(null);
  useMatrixCanvas(matrixRef);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">

      <div className="hero-vignette" />
      <div className="code-float cf1">{`</>`}</div>
      <div className="code-float cf2">{`</>`}</div>
      <div className="code-float cf3">{`</>`}</div>

   
      <div className="hero-left">

        <span className="hero-sys-tag">
          SYS://PORTFOLIO_V1 &nbsp;&#9658;&nbsp; ONLINE
        </span>

        <h1 className="hello glitch">

          {"I'M".split("").map((l, i) => (
            <span key={"a" + i} style={{ animationDelay: `${i * 0.08}s` }}>{l}</span>
          ))}

          
          <span className="word-space" />

        
          {"Madesh".split("").map((l, i) => (
            <span key={"b" + i} className="name-letter" style={{ animationDelay: `${(3 + i) * 0.08}s` }}>
              {l}
            </span>
          ))}

          <span className="dots">
            <span>.</span><span>.</span><span>.</span>
          </span>

        </h1>

        <p className="hero-role">
          <span ref={roleRef} />
          <span className="cursor-blink" />
        </p>

        <p className="hero-desc">
          I design and build immersive digital experiences with modern web
          technologies. Focused on clean UI, motion, and performance-driven
          interfaces that feel alive.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="cta-primary"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
            VIEW WORK
          </a>
          <a href="#contact" className="cta-secondary"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            HIRE ME &nbsp;&rarr;
          </a>
        </div>

      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div className="profile-glow-red" />
        <div className="profile-glow-cyan" />

        <div className="profile-stage">

          <canvas ref={matrixRef} className="matrix-canvas" />

          <div className="sonar">
            <div className="sonar-ring" />
            <div className="sonar-ring" />
            <div className="sonar-ring" />
          </div>

          <svg className="shard-l1" viewBox="0 0 380 380" fill="none">
            <polygon points="190,2 340,55 375,190 340,325 190,378 40,325 5,190 40,55"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="6 10" />
            <polygon points="190,2 340,55 375,190 340,325 190,378 40,325 5,190 40,55"
              stroke="rgba(200,30,30,0.25)" strokeWidth="1" strokeDasharray="20 160" />
          </svg>

          <svg className="shard-l2" viewBox="0 0 340 340" fill="none">
            <polygon points="170,8 298,60 330,170 298,280 170,332 42,280 10,170 42,60"
              stroke="rgba(0,200,255,0.15)" strokeWidth="0.8" strokeDasharray="4 12" />
            <polygon points="170,8 298,60 330,170 298,280 170,332 42,280 10,170 42,60"
              stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="35 160" />
          </svg>

          <svg className="shard-l3" viewBox="0 0 316 316" fill="none">
            <polygon points="158,4 286,52 312,158 286,264 158,312 30,264 4,158 30,52"
              stroke="rgba(255,80,80,0.2)" strokeWidth="1" strokeDasharray="3 8" />
          </svg>

          <div className="orbit" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />

          <div className="profile-img-wrap">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>

          <div className="profile-scan" />

          <div className="hcorner hcorner-tl" />
          <div className="hcorner hcorner-tr" />
          <div className="hcorner hcorner-bl" />
          <div className="hcorner hcorner-br" />

        </div>

        <div className="hex-tags">
          <span className="dtag">SYS://LOADED</span>
          <span className="dtag">STATUS_OK</span>
          <span className="dtag">VER:1.0.4</span>
          <span className="dtag">ERR:NONE</span>
        </div>

      </div>

      <div className="hero-status">
        <div className="status-dot" />
        AVAILABLE FOR WORK
      </div>

      <div className="hero-scroll">
        SCROLL
        <div className="scroll-bar" />
      </div>

    </section>
  );
}