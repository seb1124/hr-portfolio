import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    // Check if `particlesJS` exists on `window`
    if (window.particlesJS) {
      window.particlesJS("particles-container", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2, out_mode: "out" },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div
      id="particles-container"
      className="absolute top-0 left-0 w-full h-full bg-inherit -z-1"
    ></div>
  );
};

export default ParticlesBackground;
