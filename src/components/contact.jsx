import React from 'react';
import '../index.css'; // create this CSS file for styling
import { FaFacebook, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect!</h1>
      <p className="contact-description">
        I'm always happy to connect — whether it's for a project, collab, or just a good chat!
      </p>

      <div className="contact-icons">
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="icon email" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon twitter" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
