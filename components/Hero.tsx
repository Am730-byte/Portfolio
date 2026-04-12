// @ts-nocheck
"use client";

import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full mx-auto overflow-hidden`} style={{ paddingTop: "120px", paddingBottom: "3rem", minHeight: "100vh" }}>
      <div
        style={{ position: "relative", left: 0, right: 0, top: "20px", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1.25rem" }}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-2xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Aayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ lineHeight: "1.6" }}>
            I build scalable REST APIs, real-time systems, and backend architectures.<br className='sm:block hidden' />
            Focused on Node.js, PostgreSQL, and production-ready applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <a href="#projects">
              <button className="bg-[#915EFF] hover:bg-[#7c4ee0] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#915EFF]/50">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
 {/*
      <div className='absolute xs:bottom-10 bottom-32 z-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
