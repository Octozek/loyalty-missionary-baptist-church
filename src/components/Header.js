// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showGetStartedDropdown, setShowGetStartedDropdown] = useState(false);
  const [showWatchDropdown, setShowWatchDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileNav(!showMobileNav);
    setShowAboutDropdown(false);
    setShowEventsDropdown(false);
    setShowGetStartedDropdown(false);
    setShowWatchDropdown(false);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
    setShowEventsDropdown(false);
    setShowGetStartedDropdown(false);
    setShowWatchDropdown(false);
  };

  const toggleEventsDropdown = () => {
    setShowEventsDropdown(!showEventsDropdown);
    setShowAboutDropdown(false);
    setShowGetStartedDropdown(false);
    setShowWatchDropdown(false);
  };

  const toggleGetStartedDropdown = () => {
    setShowGetStartedDropdown(!showGetStartedDropdown);
    setShowAboutDropdown(false);
    setShowEventsDropdown(false);
    setShowWatchDropdown(false);
  };

  const toggleWatchDropdown = () => {
    setShowWatchDropdown(!showWatchDropdown);
    setShowAboutDropdown(false);
    setShowEventsDropdown(false);
    setShowGetStartedDropdown(false);
  };

  return (
    <header className="header">
      <div className="container-fluid d-flex justify-content-between align-items-center py-3">
        <img src="/assets/logo.svg" alt="Church Logo" className="logo" />

        {/* Desktop Navigation */}
        <nav className="desktop-nav d-none d-md-flex">
          <a href="/" className="nav-btn">Home</a> {/* Home Button */}

          <div className="dropdown">
            <button className="nav-btn" onClick={toggleAboutDropdown}>About</button>
            {showAboutDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/about/location">Location</a></li>
                <li><a href="/about/what-we-believe">What We Believe</a></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button className="nav-btn" onClick={toggleEventsDropdown}>Events</button>
            {showEventsDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/events/upcoming-events">Upcoming Events</a></li>
                <li><a href="/events/past-events">Past Events</a></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button className="nav-btn" onClick={toggleGetStartedDropdown}>Get Started</button>
            {showGetStartedDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/get-started/how-to-know-God">How to Know God</a></li>
                <li><a href="/get-started/baptism">Baptism</a></li>
                <li><a href="/get-started/membership">Membership</a></li>
                <li><a href="/get-started/serving">Serving</a></li>
                <li><a href="/get-started/small-groups">Small Groups</a></li>
                <li><a href="/get-started/discipleship">Discipleship</a></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button className="nav-btn" onClick={toggleWatchDropdown}>Watch</button>
            {showWatchDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/watch/live">Live</a></li>
                <li><a href="/watch/archive">Archive</a></li>
              </ul>
            )}
          </div>

          <button className="nav-btn" onClick={() => alert("Give page coming soon!")}>Give</button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger d-md-none" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        {showMobileNav && (
          <nav className="mobile-nav d-md-none">
            <a href="/" className="nav-btn">Home</a> {/* Home Button */}

            <button className="nav-btn" onClick={toggleAboutDropdown}>About</button>
            {showAboutDropdown && (
              <div className="mobile-dropdown">
                <button onClick={() => (window.location.href = '/about/location')}>Location</button>
                <button onClick={() => (window.location.href = '/about/what-we-believe')}>What We Believe</button>
              </div>
            )}

            <button className="nav-btn" onClick={toggleEventsDropdown}>Events</button>
            {showEventsDropdown && (
              <div className="mobile-dropdown">
                <button onClick={() => (window.location.href = '/events/upcoming-events')}>Upcoming Events</button>
                <button onClick={() => (window.location.href = '/events/past-events')}>Past Events</button>
              </div>
            )}

            <button className="nav-btn" onClick={toggleGetStartedDropdown}>Get Started</button>
            {showGetStartedDropdown && (
              <div className="mobile-dropdown">
                <button onClick={() => (window.location.href = '/get-started/how-to-know-God')}>How to Know God</button>
                <button onClick={() => (window.location.href = '/get-started/baptism')}>Baptism</button>
                <button onClick={() => (window.location.href = '/get-started/membership')}>Membership</button>
                <button onClick={() => (window.location.href = '/get-started/serving')}>Serving</button>
                <button onClick={() => (window.location.href = '/get-started/small-groups')}>Small Groups</button>
                <button onClick={() => (window.location.href = '/get-started/discipleship')}>Discipleship</button>
              </div>
            )}

            <button className="nav-btn" onClick={toggleWatchDropdown}>Watch</button>
            {showWatchDropdown && (
              <div className="mobile-dropdown">
                <button onClick={() => (window.location.href = '/watch/live')}>Live</button>
                <button onClick={() => (window.location.href = '/watch/archive')}>Archive</button>
              </div>
            )}

            <button className="nav-btn" onClick={() => alert("Give page coming soon!")}>Give</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
