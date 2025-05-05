import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    title: 'Core Member Documentation Lead',
    company: 'Google Developer Student Clubs Documentation Lead',
    date: 'Aug 2021',
    image: '/src/assets/gdsc.jpg',
    description: 'Collaborated with student devs, contributed to workshops, and supported open-source projects under GDSC.',
  },
  {
    id: 2,
    title: 'Core Member  Assistant Creatives',
    company: 'Google Developer Student Clubs Assistant Creatives',
    date: 'Aug 2022',
    image: '/src/assets/gdsc.jpg',
    description: 'Collaborated with student devs, contributed to workshops, and supported open-source projects under GDSC.',
  },
  {
    id: 3,
    title: 'Core Member Community Development Officer',
    company: 'Google Developer Student Clubs Community Development Officer',
    date: 'Aug 2023',
    image: '/src/assets/gdsc.jpg',
    description: 'Collaborated with student devs, contributed to workshops, and supported open-source projects under GDSC',
  },
];

export default function Experience() {
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

      <div className="experience-container">
        <h1 className="experience-title">🚀 My Experience</h1>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <img src={exp.image} alt={exp.company} className="experience-image" />
              <div className="experience-card-content">
                <h2 className="experience-role">{exp.title}</h2>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-date">{exp.date}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
