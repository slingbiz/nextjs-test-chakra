import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Journey Through Time</h1>
        <p className="hero-subtitle">Experience the future of publishing with Sling</p>
        <div className="cta-container">
          <button className="btn btn-primary">Start Your Journey</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;