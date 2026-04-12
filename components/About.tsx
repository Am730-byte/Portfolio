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
          <h2 className={styles.sectionHeadText}>I'm Aayush.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ marginTop: "1rem", color: "#aaa6c3", fontSize: "17px", lineHeight: "1.8" }}
        >
          Backend focused developer with hands-on experience building scalable REST APIs, 
          authentication systems, and real-time applications using Node.js, PostgreSQL, and Prisma. 
          Strong understanding of system design, data flow, and API architecture, with ability to 
          build and deploy production-ready applications. Currently pursuing B.Tech in Computer Science 
          at G.B. Pant DSEU, actively participating in competitive programming and tech communities.
        </motion.p>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <a href="/resume/resume.pdf" download="Aayush_Resume.pdf">
            <button 
              className="px-12 py-4 border-2 border-white uppercase bg-white text-black transition duration-200 text-base font-bold shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:shadow-[1px_1px_rgba(145,94,255),2px_2px_rgba(145,94,255),3px_3px_rgba(145,94,255),4px_4px_rgba(145,94,255),5px_5px_0px_0px_rgba(145,94,255)] hover:border-[#915EFF] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center"
            >
              Download CV
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right: ProfileCard */}
      <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ProfileCard
          avatarUrl="/images/Portfolio1.PNG"
          behindGlowEnabled={true}
          handle="@aayush.meena2006@gmail.com"
          status="Open to Internships"
          contactText="Contact"
          onContactClick={() => window.location.href = '#contact'}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "home");
