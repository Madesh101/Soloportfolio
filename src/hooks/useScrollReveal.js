import { useEffect } from "react";


export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            // unobserve so animation only fires once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".sr").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
