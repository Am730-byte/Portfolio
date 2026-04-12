// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "3rem", alignItems: "center", flexWrap: "wrap", minHeight: "100vh" }}>
      {/* Left: text */}
      <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>Hello </p>
          <h2 className={styles.sectionHeadText}>I'm Aayush</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ marginTop: "1.5rem", color: "#ddd", fontSize: "18px", lineHeight: "1.7", maxWidth: "600px", fontWeight: "500" }}
        >
          Backend focused developer building scalable APIs and real-time systems. 
          I design systems that don't break under load.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: "1rem", color: "#aaa", fontSize: "17px", lineHeight: "1.6", maxWidth: "600px" }}
        >
          <strong style={{ color: "#915EFF" }}>Stack:</strong> Node.js • PostgreSQL • Prisma • WebSockets • REST APIs
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
        >
          {/* Primary Button - View Projects with purple background */}
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-[#915EFF] uppercase bg-[#915EFF] text-white transition duration-200 text-sm font-bold shadow-[1px_1px_rgba(145,94,255),2px_2px_rgba(145,94,255),3px_3px_rgba(145,94,255),4px_4px_rgba(145,94,255),5px_5px_0px_0px_rgba(145,94,255)] hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-[#7c3aed] hover:border-white hover:scale-105 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none cursor-pointer"
          >
            View Projects
          </button>
          
          {/* Secondary Button - Contact Me */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-white uppercase bg-white text-black transition duration-200 text-sm font-bold shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:shadow-[1px_1px_rgba(145,94,255),2px_2px_rgba(145,94,255),3px_3px_rgba(145,94,255),4px_4px_rgba(145,94,255),5px_5px_0px_0px_rgba(145,94,255)] hover:border-[#915EFF] hover:scale-105 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none cursor-pointer"
          >
            Contact Me
          </button>

          {/* Tertiary Button - Download CV */}
          <a href="/resume/resume.pdf" download="Aayush_Resume.pdf">
            <button 
              className="px-8 py-3 border-2 border-white uppercase bg-white text-black transition duration-200 text-sm font-bold shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:shadow-[1px_1px_rgba(145,94,255),2px_2px_rgba(145,94,255),3px_3px_rgba(145,94,255),4px_4px_rgba(145,94,255),5px_5px_0px_0px_rgba(145,94,255)] hover:border-[#915EFF] hover:scale-105 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none cursor-pointer"
            >
              Download CV
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right: ProfileCard */}
      <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ProfileCard
          avatarUrl="/images/Portfolio1.png"
          behindGlowEnabled={true}
          handle="aayush.meena2006@gmail.com"
          status="Open to Internships"
          contactText="Connect"
          onContactClick={() => window.location.href = '#contact'}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "home");
