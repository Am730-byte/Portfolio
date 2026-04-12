"use client";

import { useState, useEffect, useRef } from "react";
import { getDeviceCapabilities } from "../../lib/performance";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "projects", label: "Projects" },
  { href: "work", label: "Experience" },
  { href: "contact", label: "Contact" },
];

const Header2 = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollBlur, setScrollBlur] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [deviceCapabilities, setDeviceCapabilities] = useState<{
    shouldReduceEffects: boolean | 'moderate'
  }>({
    shouldReduceEffects: false
  });

  useEffect(() => {
    setDeviceCapabilities(getDeviceCapabilities());
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (deviceCapabilities.shouldReduceEffects === true) return;
    
    const header = e.currentTarget;
    const nav = header.querySelector('nav');
    if (!nav) return;
    
    const rect = nav.getBoundingClientRect();
    const detectionRange = 80;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x < -detectionRange || x > rect.width + detectionRange || 
        y < -detectionRange || y > rect.height + detectionRange) {
      setTilt({ rotateX: 0, rotateY: 0 });
      setIsHovered(false);
      return;
    }
    
    const hoverRange = 40;
    const isInHoverRange = x >= -hoverRange && x <= rect.width + hoverRange && 
                           y >= -hoverRange && y <= rect.height + hoverRange;
    setIsHovered(isInHoverRange);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const padding = 20;
    const clampedX = Math.max(padding, Math.min(rect.width - padding, x));
    const clampedY = Math.max(padding, Math.min(rect.height - padding, y));
    
    const rotateY = ((clampedX - centerX) / centerX) * 1.5;
    const rotateX = ((centerY - clampedY) / centerY) * 0.5;
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    if (deviceCapabilities.shouldReduceEffects === true) return;
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
      
      // Blur effect
      const maxScroll = 800;
      const scrollProgress = Math.min(currentScrollY / maxScroll, 1);
      const easedProgress = scrollProgress * scrollProgress * scrollProgress;
      
      let maxBlur = 12;
      if (deviceCapabilities.shouldReduceEffects === true) {
        maxBlur = 0;
      } else if (deviceCapabilities.shouldReduceEffects === 'moderate') {
        maxBlur = 6;
      }
      
      const newBlur = easedProgress * maxBlur;
      setScrollBlur(newBlur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [deviceCapabilities]);

  const getBackdropStyle = () => {
    if (deviceCapabilities.shouldReduceEffects === true) {
      return { background: 'rgba(0, 0, 0, 0.8)' };
    }
    
    const blurValue = scrollBlur;
    if (deviceCapabilities.shouldReduceEffects === 'moderate') {
      return {
        backdropFilter: `blur(${Math.min(blurValue, 6)}px) saturate(120%)`,
        WebkitBackdropFilter: `blur(${Math.min(blurValue, 6)}px) saturate(120%)`,
      };
    }
    
    return {
      backdropFilter: `blur(${blurValue}px) saturate(150%)`,
      WebkitBackdropFilter: `blur(${blurValue}px) saturate(150%)`,
    };
  };

  return (
    <header 
      className="w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out" 
      style={{ 
        perspective: '1000px',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <nav
        onMouseEnter={() => !deviceCapabilities.shouldReduceEffects && setIsHovered(true)}
        style={{
          ...getBackdropStyle(),
          transform: deviceCapabilities.shouldReduceEffects === true 
            ? 'none' 
            : `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${isHovered ? '-4px' : '0'}) scale(${isHovered ? 0.98 : 1})`,
          transformStyle: deviceCapabilities.shouldReduceEffects === true ? 'flat' : 'preserve-3d',
          padding: '1.25rem 3rem',
          borderRadius: '0.5rem',
        }}
        className="
          flex items-center justify-center relative
          bg-black/35
          border-b border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.2),0_1px_2px_rgba(255,255,255,0.1)_inset]
          transition-all duration-300 ease-out
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.3),0_2px_4px_rgba(255,255,255,0.15)_inset]
        "
      >
        {deviceCapabilities.shouldReduceEffects !== true && (
          <div className="absolute inset-0 pointer-events-none rounded-b-2xl bg-gradient-to-b from-white/3 to-transparent" />
        )}

        <div
          className={`
            absolute inset-0 pointer-events-none rounded-b-2xl
            bg-gradient-to-r from-[#c66bff]/20 via-[#ff5fa8]/20 to-[#ffb05e]/20
            mix-blend-overlay
            ${deviceCapabilities.shouldReduceEffects === true ? 'opacity-0' :
              deviceCapabilities.shouldReduceEffects === 'moderate' ? 'opacity-5' : 'opacity-10'}
          `}
        />

        {deviceCapabilities.shouldReduceEffects !== true && (
          <div
            className="
              absolute inset-0 pointer-events-none
              border border-transparent 
              animate-[pulse_4s_ease-in-out_infinite]
              bg-gradient-to-r from-[#c66bff]/20 via-[#ff5fa8]/15 to-[#4fd8ff]/20
              opacity-30
              rounded-b-2xl
              mask-[linear-gradient(to_bottom,white_0%,transparent_100%)]
            "
          />
        )}

        <div className="hidden md:flex items-center relative z-10" style={{ gap: '3rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `#${link.href}`);
                }
              }}
              className="
                group relative text-white font-medium rounded-full text-2xl
                transition-all duration-300 overflow-hidden
                before:content-[''] before:absolute before:inset-0
                before:bg-white before:rounded-full before:scale-0 before:opacity-0
                before:transition-all before:duration-300 before:ease-out
                hover:before:scale-100 hover:before:opacity-100
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
                z-1
              "
              style={{ padding: '1rem 2.5rem' }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Outside nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `#${link.href}`);
                }
                setMobileMenuOpen(false);
              }}
              className="block text-white font-medium text-lg py-3 px-4 hover:bg-white/10 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header2;
