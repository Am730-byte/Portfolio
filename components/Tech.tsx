// @ts-nocheck
"use client";

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ElectricBorder from "./ElectricBorder";

const Tech = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
      {technologies.map((technology) => (
        <ElectricBorder
          key={technology.name}
          borderRadius={9999}
          color="#5227FF"
          speed={1}
          chaos={0.07}
          style={{
            width: "96px",
            height: "96px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={technology.icon} alt={technology.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </ElectricBorder>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
