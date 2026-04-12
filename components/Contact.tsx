// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import ElectricBorder from "./ElectricBorder";

const Contact = () => {
  const [copiedText, setCopiedText] = React.useState("");

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(name);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const socialLinks = [
    {
      name: "Email",
      value: "aayush.meena2006@gmail.com",
      href: "mailto:aayush.meena2006@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      name: "Phone",
      value: "+91 9911960396",
      href: "tel:+919911960396",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "Aayush",
      href: "https://www.linkedin.com/in/am730/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "Am730-byte",
      href: "https://github.com/Am730-byte",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      value: "@AM730",
      href: "https://x.com/AAYUSHM42844354",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <div className='flex-[0.75]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>Let's connect</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </motion.div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {socialLinks.map((link, index) => {
            const isEmailOrPhone = link.name === "Email" || link.name === "Phone";
            const Component = isEmailOrPhone ? 'button' : 'a';
            
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group'
              >
                <Component
                  {...(!isEmailOrPhone && {
                    href: link.href,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                  onClick={isEmailOrPhone ? () => handleCopy(link.value, link.name) : undefined}
                  className='relative p-8 rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden block w-full text-left cursor-pointer'
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.4)', 
                    backdropFilter: 'blur(20px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {copiedText === link.name && (
                    <div className='absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded'>
                      Copied!
                    </div>
                  )}
                  <div className='flex flex-col items-center text-center gap-4'>
                    <div className="hidden sm:block">
                      <ElectricBorder borderRadius={9999}>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:text-[#915EFF] transition-colors duration-300' style={{ background: 'rgba(145, 94, 255, 0.1)' }}>
                          {link.icon}
                        </div>
                      </ElectricBorder>
                    </div>
                    <div className="sm:hidden w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:text-[#915EFF] transition-colors duration-300" style={{ background: 'rgba(145, 94, 255, 0.1)' }}>
                      {link.icon}
                    </div>
                    <div className='w-full'>
                      <p className='text-white/70 font-medium text-sm mb-2'>{link.name}</p>
                      <p className='text-white font-semibold text-sm wrap-break-word'>{link.value}</p>
                      {isEmailOrPhone && (
                        <p className='text-white/50 text-xs mt-1'>Click to copy</p>
                      )}
                    </div>
                  </div>
                </Component>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden sm:block'>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
