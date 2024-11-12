// src/components/CountdownSection.js

import React, { useEffect, useState } from 'react';
import './CountdownSection.css';

const CountdownSection = () => {
  const calculateTimeLeft = () => {
    const nextService = new Date();
    nextService.setDate(nextService.getDate() + ((7 - nextService.getDay()) % 7 || 7));
    nextService.setHours(10, 45, 0, 0);

    const difference = nextService - new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isFinalMinute: difference < 60000 // Check if less than 1 minute remaining
        }
      : null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-section">
      {timeLeft ? (
        <div className={`countdown-display ${timeLeft.isFinalMinute ? 'final-minute' : ''}`}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      ) : (
        <div className="countdown-display">Service is Live Now!</div>
      )}
    </div>
  );
};

export default CountdownSection;
