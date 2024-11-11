// src/pages/Location/Location.js
import React from 'react';
import './Location.css';

const Location = () => (
  <div className="location-content container">
    <section className="intro text-center">
      <h1>Our Location</h1>
      <p>Visit us at our location or get directions instantly!</p>
    </section>

    {/* Google Maps Embed */}
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7465.5231706185705!2d-89.66875822137301!3d38.12005556539503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8876485c91f70b95%3A0x70d5d26f8603f8f7!2sLoyalty%20Missionary%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1729792706908!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Church Location"
      ></iframe>
    </div>

    {/* Directions Button */}
    <div className="directions-button text-center mt-4">
      <a href="https://www.google.com/maps/dir/?api=1&destination=11940+IL-154,+Sparta,+IL+62286" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
        Get Directions
      </a>
    </div>

    {/* Contact Information */}
    <section className="contact-info text-center mt-5">
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> 11940 IL-154, Sparta, IL 62286</p>
      <p><strong>Phone:</strong> (618) 443-3364</p>
    </section>
  </div>
);

export default Location;
