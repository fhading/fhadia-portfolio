import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A stylish and fully responsive portfolio made for showcasing my personal Information.",
    link: "fhadzzzzz.netlify.app",
  },
  {
    id: 2,
    title: "TO-DO List",
    description: "Simple to-do list webapp.",
    link: "https://todolistorsabialagoyo.netlify.app/",
  },
  {
    id: 3,
    title: "Fruit Ordering System",
    description: "Dual pricing system: per kilo and per piece — powered by PHP & MySQL.",
    link: "fruitharbor.shop",
  }
];

export default function Project() {
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

      <div className="project-container">
        <h1 className="project-title">🚀 My Projects</h1>

        <div className="project-grid">
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-desc">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
