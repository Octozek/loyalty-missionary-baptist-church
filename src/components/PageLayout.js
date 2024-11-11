// src/components/PageLayout.js
import React, { useEffect, useState } from 'react';
import './PageLayout.css';

const PageLayout = ({ title, backgroundImage, children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Adjust multiplier for parallax effect speed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-layout">
      <div
        className="parallax-banner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: offset, // Apply offset to background position
        }}
      >
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default PageLayout;
