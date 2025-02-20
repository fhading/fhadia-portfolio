import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import '../styles/about.css';
import catImage from '../assets/meawmeaw.jpg';

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

      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={catImage} alt="Me with my cats" className="about-img" />
        </div>
        <div className="about-text">
          <h2>Hello! I'm Fhadia Lagoyo</h2>
          <p className="about-description">
            I'm a passionate cat lover who enjoys spending time with my furry friends. When I'm not coding, you can find me curled up with my cats, enjoying a One Piece episode, or experimenting with new recipes in the kitchen. Cooking is an adventure for me, and I love discovering new dishes to try!
          </p>
          <p className="about-hobby">
            I love Arts and Painting, I always find peace every time I paint and explore new art styles.
          </p>
        </div>
      </div>

      
      <div className="social-media-container">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/fhadia.lagoyo.2024/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/zuck/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://x.com/elonmusk?mx=2" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://github.com/fhading" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
