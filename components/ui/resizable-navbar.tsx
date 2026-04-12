"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

interface NavItem {
  id: string;
  title: string;
}

interface ResizableNavbarProps {
  navItems: NavItem[];
  logo?: React.ReactNode;
}

export function ResizableNavbar({ navItems }: ResizableNavbarProps) {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 60) { setHidden(false); lastY.current = current; return; }
    if (current - lastY.current > 6) setHidden(true);
    else if (lastY.current - current > 6) setHidden(false);
    lastY.current = current;
  });

  return (
    <>
      {/* ── Desktop ── */}
      <motion.nav
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed top-6 inset-x-0 z-50 hidden sm:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={() => setActive(nav.title)}
              className="relative px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-150 group"
            >
              {active === nav.title && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={cn(
                "relative z-10 transition-colors duration-150",
                active === nav.title ? "text-white" : "text-white/50 group-hover:text-white/80"
              )}>
                {nav.title}
              </span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ── Mobile ── */}
      <div className="fixed top-0 inset-x-0 z-50 sm:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-px bg-white origin-center" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-px bg-white" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-px bg-white origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <ul className="flex flex-col p-3 gap-1 list-none">
                {navItems.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => { setActive(nav.title); setMobileOpen(false); }}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        active === nav.title ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
