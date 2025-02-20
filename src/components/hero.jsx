import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';
import newImage from '../assets/MOANA.png';

const Hero = () => {
  return (
    <div className="main">
      
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">Fhadia</Link>
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/about" className="navbar-link">About</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img
              src={newImage}
              alt="Fhadia Lagoyo"
              className="hero-img"
            />
          </div>

          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span>Hi! I am</span> <span>Fhadia Lagoyo</span>
            </h1>
            <p className="hero-subtitle">A Cat Lover</p>
            <p className="hero-description">
              When I’m not coding, you can find me cuddling with my cats or Watching One Piece!
            </p>
            <Link to="/about" className="hero-button">Learn More About Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;