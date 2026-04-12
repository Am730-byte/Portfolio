// @ts-nocheck
"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./MagicBento.css";

const DEFAULT_GLOW_COLOR = "132, 0, 255";
const DEFAULT_PARTICLE_COUNT = 10;
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard = ({ children, className = "", style }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLElement[]>([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: DEFAULT_PARTICLE_COUNT }, () =>
      createParticleElement(Math.random() * width, Math.random() * height)
    );
    particlesInitialized.current = true;
  }, []);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => particle.parentNode?.removeChild(particle),
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: "none", repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, index * 100);
      timeoutsRef.current.push(id);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => { isHoveredRef.current = true; animateParticles(); gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: "power2.out", transformPerspective: 1000 }); };
    const onLeave = () => { isHoveredRef.current = false; clearAllParticles(); gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: "power2.out" }); };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const rotateX = (((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2)) * -10;
      const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 10;
      gsap.to(el, { rotateX, rotateY, duration: 0.1, ease: "power2.out", transformPerspective: 1000 });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);
    return () => {
      isHoveredRef.current = false;
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles]);

  return (
    <div ref={cardRef} className={`magic-bento-card magic-bento-card--border-glow particle-container ${className}`} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
};

const GlobalSpotlight = ({ gridRef }: { gridRef: React.RefObject<HTMLDivElement> }) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed; width: 800px; height: 800px; border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle, rgba(${DEFAULT_GLOW_COLOR}, 0.15) 0%, rgba(${DEFAULT_GLOW_COLOR}, 0.08) 15%, rgba(${DEFAULT_GLOW_COLOR}, 0.04) 25%, transparent 70%);
      z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const onMove = (e: MouseEvent) => {
      if (!gridRef.current || !spotlightRef.current) return;
      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!inside) { gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 }); return; }

      const cards = gridRef.current.querySelectorAll(".magic-bento-card");
      let minDist = Infinity;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(r.width, r.height) / 2);
        minDist = Math.min(minDist, dist);
        const proximity = 150, fade = 225;
        const intensity = dist <= proximity ? 1 : dist <= fade ? (fade - dist) / (fade - proximity) : 0;
        (card as HTMLElement).style.setProperty("--glow-x", `${((e.clientX - r.left) / r.width) * 100}%`);
        (card as HTMLElement).style.setProperty("--glow-y", `${((e.clientY - r.top) / r.height) * 100}%`);
        (card as HTMLElement).style.setProperty("--glow-intensity", intensity.toString());
        (card as HTMLElement).style.setProperty("--glow-radius", "300px");
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1 });
      const proximity = 150, fade = 225;
      const opacity = minDist <= proximity ? 0.8 : minDist <= fade ? ((fade - minDist) / (fade - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity, duration: opacity > 0 ? 0.2 : 0.5 });
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef]);

  return null;
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }: any) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"
    >
      <ParticleCard style={{ backgroundColor: "#060010", height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-4 px-4 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] leading-normal flex-1">{description}</p>

          <div className="mt-4 mb-4 flex flex-wrap gap-2">
            {tags.map((tag: any) => (
              <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </ParticleCard>
    </motion.div>
  );
};

const Works = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "2rem" }}>
        
        <h2 className={`${styles.sectionHeadText}`} style={{ color: "white", opacity: 1 }}>Projects</h2>
      </div>

      <div className="w-full flex justify-center" style={{ position: "relative", zIndex: 10, marginBottom: "3rem" }}>
        <p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{ opacity: 1, textAlign: "center" }}
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <GlobalSpotlight gridRef={gridRef} />

      <div ref={gridRef} className="bento-section">
        <div className="flex flex-row gap-7 justify-center flex-wrap">
          {projects.map((project, index) => (
            <div key={`project-${index}`} style={{ width: "calc(33.333% - 20px)", minWidth: "320px", height: "480px" }}>
              <ParticleCard style={{ backgroundColor: "#060010", height: "100%", display: "flex", flexDirection: "column", padding: "20px" }}>
                <div className="relative w-full h-[230px]">
                  <img src={project.image} alt="project_image" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                    {project.live_link && (
                      <div
                        onClick={() => window.open(project.live_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        title="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </div>
                    )}
                    {project.source_code_link && (
                      <div
                        onClick={() => window.open(project.source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        title="Source Code"
                      >
                        <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
                  <p className="mt-2 text-secondary text-[13px] leading-normal">{project.description}</p>
                  
                  {project.impact && (
                    <p className="mt-2 text-[#915EFF] text-[13px] font-semibold leading-relaxed">
                       {project.impact}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag: any) => (
                      <p key={`${project.name}-${tag.name}`} className={`text-[15px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
              </ParticleCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
