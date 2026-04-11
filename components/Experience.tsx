// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.15, 0.75)}
      className='bg-tertiary p-5 rounded-2xl'
    >
      <div className='flex items-start gap-4'>
        <div
          className='w-14 h-14 rounded-full flex justify-center items-center shrink-0'
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>

        <div className='flex-1'>
          <p className='text-secondary text-[14px] font-medium'>{experience.date}</p>
          <h3 className='text-white text-[24px] font-bold mt-1'>{experience.title}</h3>
          <p className='text-secondary text-[16px] font-semibold mt-1'>
            {experience.company_name}
          </p>

          <ul className='mt-4 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-6'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
