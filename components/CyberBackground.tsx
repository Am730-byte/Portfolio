"use client";

import Antigravity from "./Antigravity";
import Aurora from "./Aurora";

export default function CyberBackground({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "rgb(15, 15, 15)" }}>
      {/* Aurora layer - furthest back */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.4 }}>
        <Aurora 
          colorStops={['#00ff87', '#60efff', '#b967ff']}
          amplitude={1.5}
          blend={0.6}
          speed={1.0}
        />
      </div>
      
      {/* Antigravity particles - middle layer */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <Antigravity
          count={1500}
          color="#EDDA07"
          particleSize={0.8}
          magnetRadius={5}
          ringRadius={5}
          waveSpeed={5}
          waveAmplitude={1}
          lerpSpeed={0.1}
          autoAnimate={false}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={20}
        />
      </div>
      
      {/* Content sits above with transparent background so particles show through */}
      <div style={{ position: "relative", zIndex: 2, isolation: "isolate" }}>
        {children}
      </div>
    </div>
  );
}
