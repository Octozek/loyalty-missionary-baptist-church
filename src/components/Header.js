// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setShowMobileNav(!showMobileNav);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    // Open the clicked dropdown or close if it's already open
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const isActive = (basePath) => {
    if (basePath === '/' && location.pathname === '/') return 'active';
    return location.pathname.startsWith(basePath) && basePath !== '/' ? 'active' : '';
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container-fluid d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="logo">
          <img src="/assets/LMBC-svgWhite.svg" alt="Church Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav d-none d-md-flex">
          <Link to="/" className={`nav-btn ${isActive('/')}`}>Home</Link>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/about')}`}
              onClick={() => toggleDropdown('about')}
            >
              About
            </button>
            {activeDropdown === 'about' && (
              <ul className="dropdown-menu">
                <li><Link to="/about/location" className={isActive('/about/location')} onClick={() => setActiveDropdown(null)}>Location</Link></li>
                <li><Link to="/about/what-we-believe" className={isActive('/about/what-we-believe')} onClick={() => setActiveDropdown(null)}>What We Believe</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/events')}`}
              onClick={() => toggleDropdown('events')}
            >
              Events
            </button>
            {activeDropdown === 'events' && (
              <ul className="dropdown-menu">
                <li><Link to="/events/upcoming-events" className={isActive('/events/upcoming-events')} onClick={() => setActiveDropdown(null)}>Upcoming Events</Link></li>
                <li><Link to="/events/past-events" className={isActive('/events/past-events')} onClick={() => setActiveDropdown(null)}>Past Events</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/get-started')}`}
              onClick={() => toggleDropdown('get-started')}
            >
              Get Started
            </button>
            {activeDropdown === 'get-started' && (
              <ul className="dropdown-menu">
                <li><Link to="/get-started/how-to-know-God" className={isActive('/get-started/how-to-know-God')} onClick={() => setActiveDropdown(null)}>How to Know God</Link></li>
                <li><Link to="/get-started/baptism" className={isActive('/get-started/baptism')} onClick={() => setActiveDropdown(null)}>Baptism</Link></li>
                <li><Link to="/get-started/membership" className={isActive('/get-started/membership')} onClick={() => setActiveDropdown(null)}>Membership</Link></li>
                <li><Link to="/get-started/serving" className={isActive('/get-started/serving')} onClick={() => setActiveDropdown(null)}>Serving</Link></li>
                <li><Link to="/get-started/small-groups" className={isActive('/get-started/small-groups')} onClick={() => setActiveDropdown(null)}>Small Groups</Link></li>
                <li><Link to="/get-started/discipleship" className={isActive('/get-started/discipleship')} onClick={() => setActiveDropdown(null)}>Discipleship</Link></li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`nav-btn ${isActive('/watch')}`}
              onClick={() => toggleDropdown('watch')}
            >
              Watch
            </button>
            {activeDropdown === 'watch' && (
              <ul className="dropdown-menu">
                <li><Link to="/watch/live" className={isActive('/watch/live')} onClick={() => setActiveDropdown(null)}>Live</Link></li>
                <li><Link to="/watch/archive" className={isActive('/watch/archive')} onClick={() => setActiveDropdown(null)}>Archive</Link></li>
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

            <button className={`nav-btn ${isActive('/about')}`} onClick={() => toggleDropdown('about')}>About</button>
            {activeDropdown === 'about' && (
              <div className="mobile-dropdown">
                <Link to="/about/location" className={isActive('/about/location')} onClick={toggleMobileMenu}>Location</Link>
                <Link to="/about/what-we-believe" className={isActive('/about/what-we-believe')} onClick={toggleMobileMenu}>What We Believe</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/events')}`} onClick={() => toggleDropdown('events')}>Events</button>
            {activeDropdown === 'events' && (
              <div className="mobile-dropdown">
                <Link to="/events/upcoming-events" className={isActive('/events/upcoming-events')} onClick={toggleMobileMenu}>Upcoming Events</Link>
                <Link to="/events/past-events" className={isActive('/events/past-events')} onClick={toggleMobileMenu}>Past Events</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/get-started')}`} onClick={() => toggleDropdown('get-started')}>Get Started</button>
            {activeDropdown === 'get-started' && (
              <div className="mobile-dropdown">
                <Link to="/get-started/how-to-know-God" className={isActive('/get-started/how-to-know-God')} onClick={toggleMobileMenu}>How to Know God</Link>
                <Link to="/get-started/baptism" className={isActive('/get-started/baptism')} onClick={toggleMobileMenu}>Baptism</Link>
                <Link to="/get-started/membership" className={isActive('/get-started/membership')} onClick={toggleMobileMenu}>Membership</Link>
                <Link to="/get-started/serving" className={isActive('/get-started/serving')} onClick={toggleMobileMenu}>Serving</Link>
                <Link to="/get-started/small-groups" className={isActive('/get-started/small-groups')} onClick={toggleMobileMenu}>Small Groups</Link>
                <Link to="/get-started/discipleship" className={isActive('/get-started/discipleship')} onClick={toggleMobileMenu}>Discipleship</Link>
              </div>
            )}

            <button className={`nav-btn ${isActive('/watch')}`} onClick={() => toggleDropdown('watch')}>Watch</button>
            {activeDropdown === 'watch' && (
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
