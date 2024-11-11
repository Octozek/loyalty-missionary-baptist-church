// src/components/ParallaxSection.js
import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ title, backgroundImage, children }) => (
  <div>
    {/* Parallax banner */}
    <div
      className="parallax-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="parallax-title">{title}</h1>
    </div>
    {/* Content section beneath the parallax */}
    <div className="parallax-content">
      {children}
    </div>
  </div>
);

export default ParallaxSection;
