import React from "react";
import { Link } from "react-router-dom";
import "./blogStyle.css";
import infoImage from "../../assets/info.jpg"; // Correct relative path

export default function Blog3() {
  return (
    <div>
     
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

      <div className="blog-post">
        <img src={infoImage} alt="GDSC Info Session 2023" className="blog-image" />
        <h1 className="blog-heading">My GDSC Info Session 2023 Experience</h1>
        <p className="blog-date">September 2023</p>

        <p className="blog-content">
          Attending the <strong>Google Developer Student Clubs (GDSC) Info Session 2023</strong> was one of the most exciting highlights of my year as a student developer. The energy in the room, the passion of the speakers, and the amazing community spirit made it more than just an introduction—it was an open door to endless opportunities.
          <br /><br />
          <strong>What is GDSC?</strong><br />
          GDSC is a community powered by Google Developers that empowers university students to grow their knowledge in tech and build solutions for their communities.
          <br /><br />
          <strong>Event Highlights:</strong><br />
          🔹 Introduction to GDSC<br />
          🔹 Success stories from former members<br />
          🔹 Overview of upcoming workshops and hackathons<br />
          🔹 Live Q&A with the GDSC leads<br />
          <br />
          <strong>Why It Mattered to Me</strong><br />
          I saw how much I could learn, create, and share with others in tech. The community felt supportive, inclusive, and passionate—which made me want to be part of it even more.
          <br /><br />
          Whether you're a beginner or someone looking to expand your skills, GDSC is a great space to grow. I'm super excited for the journey ahead!
        </p>
      </div>
    </div>
  );
}
