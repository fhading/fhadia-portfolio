import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import '../styles/about.css';
import catImage from '../assets/meawmeaw.jpg';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <div className="about-container">
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

      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      <div className="about-content">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={catImage} alt="Me with my cats" className="about-img" />
        </motion.div>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-name">Hello! I'm Fhadia Lagoyo</h2>
          <p className="about-description">
            I'm a passionate cat lover who enjoys spending time with my furry friends. When I'm not coding, you can find me curled up with my cats, enjoying a One Piece episode, or experimenting with new recipes in the kitchen. Cooking is an adventure for me, and I love discovering new dishes to try!
          </p>
          <p className="about-hobby">
            I love Arts and Painting, I always find peace every time I paint and explore new art styles.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="social-media-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="follow-title">Follow Me</h3>
        <div className="social-icons">
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/fhadia.lagoyo.2024/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/zuck/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/elonmusk?mx=2" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/fhading" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;