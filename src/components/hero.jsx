import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
            <li><Link to="/blog" className="navbar-link">Blog</Link></li>
            <li><Link to="/Experience" className="navbar-link">Experience</Link></li>
            <li><Link to="/project" className="navbar-link">Project</Link></li>
          </ul>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={newImage}
              alt="Fhadia Lagoyo"
              className="hero-img"
            />
          </motion.div>

          <motion.div
            className="hero-text-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              <span>Hi! I am</span> <span>Fhadia Lagoyo</span>
            </h1>
            <p className="hero-subtitle">A Cat Lover</p>
            <p className="hero-description">
              When I’m not coding, you can find me cuddling with my cats or Watching One Piece!
            </p>
            <Link to="/about" className="hero-button">Learn More About Me</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
