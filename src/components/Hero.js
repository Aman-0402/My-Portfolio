import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in-up">
        <p className="greeting">Hi, I'm</p>
        <h1 className="hero-title">
          <span className="name">Your Name</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          I create beautiful and functional web experiences. 
          Passionate about crafting elegant solutions to complex problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image-placeholder">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;