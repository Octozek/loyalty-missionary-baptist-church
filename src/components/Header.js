// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showGetStartedDropdown, setShowGetStartedDropdown] = useState(false);
  const [showWatchDropdown, setShowWatchDropdown] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setShowMobileNav(!showMobileNav);
    resetDropdowns();
  };

  const resetDropdowns = () => {
    setShowAboutDropdown(false);
    setShowEventsDropdown(false);
    setShowGetStartedDropdown(false);
    setShowWatchDropdown(false);
  };

  const isActive = (basePath) => {
    if (basePath === '/' && location.pathname === '/') return 'active';
    return location.pathname.startsWith(basePath) && basePath !== '/' ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container-fluid d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="logo">
          <img src="/assets/logo.svg" alt="Church Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav d-none d-md-flex">
          <Link to="/" className={`nav-btn ${isActive('/')}`}>Home</Link>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/about')}`}
              onClick={() => setShowAboutDropdown(!showAboutDropdown)}
            >
              About
            </button>
            {showAboutDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/about/location" className={isActive('/about/location')} onClick={resetDropdowns}>Location</Link></li>
                <li><Link to="/about/what-we-believe" className={isActive('/about/what-we-believe')} onClick={resetDropdowns}>What We Believe</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/events')}`}
              onClick={() => setShowEventsDropdown(!showEventsDropdown)}
            >
              Events
            </button>
            {showEventsDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/events/upcoming-events" className={isActive('/events/upcoming-events')} onClick={resetDropdowns}>Upcoming Events</Link></li>
                <li><Link to="/events/past-events" className={isActive('/events/past-events')} onClick={resetDropdowns}>Past Events</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/get-started')}`}
              onClick={() => setShowGetStartedDropdown(!showGetStartedDropdown)}
            >
              Get Started
            </button>
            {showGetStartedDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/get-started/how-to-know-God" className={isActive('/get-started/how-to-know-God')} onClick={resetDropdowns}>How to Know God</Link></li>
                <li><Link to="/get-started/baptism" className={isActive('/get-started/baptism')} onClick={resetDropdowns}>Baptism</Link></li>
                <li><Link to="/get-started/membership" className={isActive('/get-started/membership')} onClick={resetDropdowns}>Membership</Link></li>
                <li><Link to="/get-started/serving" className={isActive('/get-started/serving')} onClick={resetDropdowns}>Serving</Link></li>
                <li><Link to="/get-started/small-groups" className={isActive('/get-started/small-groups')} onClick={resetDropdowns}>Small Groups</Link></li>
                <li><Link to="/get-started/discipleship" className={isActive('/get-started/discipleship')} onClick={resetDropdowns}>Discipleship</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/watch')}`}
              onClick={() => setShowWatchDropdown(!showWatchDropdown)}
            >
              Watch
            </button>
            {showWatchDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/watch/live" className={isActive('/watch/live')} onClick={resetDropdowns}>Live</Link></li>
                <li><Link to="/watch/archive" className={isActive('/watch/archive')} onClick={resetDropdowns}>Archive</Link></li>
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
            <Link to="/" className={`nav-btn ${isActive('/')}`} onClick={toggleMobileMenu}>Home</Link>

            <button className={`nav-btn ${isActive('/about')}`} onClick={() => setShowAboutDropdown(!showAboutDropdown)}>About</button>
            {showAboutDropdown && (
              <div className="mobile-dropdown">
                <Link to="/about/location" className={isActive('/about/location')} onClick={toggleMobileMenu}>Location</Link>
                <Link to="/about/what-we-believe" className={isActive('/about/what-we-believe')} onClick={toggleMobileMenu}>What We Believe</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/events')}`} onClick={() => setShowEventsDropdown(!showEventsDropdown)}>Events</button>
            {showEventsDropdown && (
              <div className="mobile-dropdown">
                <Link to="/events/upcoming-events" className={isActive('/events/upcoming-events')} onClick={toggleMobileMenu}>Upcoming Events</Link>
                <Link to="/events/past-events" className={isActive('/events/past-events')} onClick={toggleMobileMenu}>Past Events</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/get-started')}`} onClick={() => setShowGetStartedDropdown(!showGetStartedDropdown)}>Get Started</button>
            {showGetStartedDropdown && (
              <div className="mobile-dropdown">
                <Link to="/get-started/how-to-know-God" className={isActive('/get-started/how-to-know-God')} onClick={toggleMobileMenu}>How to Know God</Link>
                <Link to="/get-started/baptism" className={isActive('/get-started/baptism')} onClick={toggleMobileMenu}>Baptism</Link>
                <Link to="/get-started/membership" className={isActive('/get-started/membership')} onClick={toggleMobileMenu}>Membership</Link>
                <Link to="/get-started/serving" className={isActive('/get-started/serving')} onClick={toggleMobileMenu}>Serving</Link>
                <Link to="/get-started/small-groups" className={isActive('/get-started/small-groups')} onClick={toggleMobileMenu}>Small Groups</Link>
                <Link to="/get-started/discipleship" className={isActive('/get-started/discipleship')} onClick={toggleMobileMenu}>Discipleship</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/watch')}`} onClick={() => setShowWatchDropdown(!showWatchDropdown)}>Watch</button>
            {showWatchDropdown && (
              <div className="mobile-dropdown">
                <Link to="/watch/live" className={isActive('/watch/live')} onClick={toggleMobileMenu}>Live</Link>
                <Link to="/watch/archive" className={isActive('/watch/archive')} onClick={toggleMobileMenu}>Archive</Link>
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
