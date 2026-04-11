// @ts-nocheck
"use client";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        style={{ position: "absolute", left: 0, right: 0, top: "120px", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1.25rem" }}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-2xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Aayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build full stack products, immersive <br className='sm:block hidden' />
            interfaces and interactive web experiences
          </p>
        </div>
      </div>

      <div className='absolute inset-0 w-full h-full'>
        <ComputersCanvas />
      </div>

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
      </div>
    </section>
  );
};

export default Hero;
