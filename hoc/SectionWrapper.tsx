// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        style={{ width: "100%", position: "relative", zIndex: 0 }}
      >
        <span className='hash-span' id={idName}>&nbsp;</span>
        <div className="section-container">
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;
