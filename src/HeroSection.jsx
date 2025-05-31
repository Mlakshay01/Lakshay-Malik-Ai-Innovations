import React, { useState } from "react";
import DistortedRobot from "./DistortRobot";

export default function HeroSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // -10 to +10
    const y = ((e.clientY - top) / height - 0.5) * 20; // -10 to +10
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <section
      className="hero-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "40px",
        backgroundColor: "#0d1117",
        color: "#fff",
        height: "500px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ flex: 1, maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Your AI Company
        </h1>
        <p style={{ fontSize: "1.3rem", lineHeight: 1.5 }}>
          Innovating the Future with AI — We build intelligent AI solutions that
          transform businesses and empower users.
        </p>
      </div>

      {/* <img
        src="/hero-graphic.png"
        alt="Hero Graphic"
        style={{
          width: "320px",
          maxWidth: "90vw",
          transition: "filter 0.2s ease, transform 0.2s ease",
          filter: `brightness(${1 + pos.x * 0.01}) saturate(${1 + pos.y * 0.02})`,
          transform: `translate(${pos.x * 0.5}px, ${pos.y * 0.5}px) rotate(${pos.x * 0.3}deg)`,
          cursor: "pointer",
          willChange: "transform, filter",
        }}
      /> */}
      
      <DistortedRobot />
    </section>
  );
}
