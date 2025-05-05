import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
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

      <div className="contact-container">
        <h1 className="contact-title">Let's Connect!</h1>
        <p className="contact-description">
          I'm always happy to connect — whether it's for a project, collab, or just a good chat!
        </p>

        <div className="contact-card-grid">
          <div className="contact-card">
            <div className="contact-icons">
              <a href="https://www.facebook.com/fhadia.lagoyo.2024/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon facebook" />
              </a>
              <a href="mailto:icebearfhadia@gmail.com">
                <FaEnvelope className="icon email" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon linkedin" />
              </a>
              <a href="https://www.instagram.com/zuck/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon instagram" />
              </a>
              <a href="https://x.com/elonmusk?mx=2" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
