import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import blog1 from '../assets/ai.jpg';
import blog2 from '../assets/dt.jpg';
import blog3 from '../assets/info.jpg';
import blog4 from '../assets/io.jpg';
import blog5 from '../assets/ux.jpg';
import blog6 from '../assets/devfest.jpg';
import blog7 from '../assets/core.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Winning a raffle and build with AI Experience',
    date: 'April 26, 2025',
    summary: 'As someone passionate about tech and innovation, attending community-led events is always a huge source of inspiration ',
    image: blog1,
  },
  {
    id: 2,
    title: 'Bat Nilalabas mo ang DT mo (Design Thingking)',
    date: 'November, 2023',
    summary: 'One of the most unforgettable moments of 2023 was when I attended the event titled "Bat Nilalabas mo ang DT mo?"',
    image: blog2,
  },
  {
    id: 3,
    title: 'GDSC Info-Session 2023-2024',
    date: 'September, 2023',
    summary: 'Attending the Google Developer Student Clubs (GDSC) Info Session 2023 was one of the most exciting highlights of my year as a student developer.',
    image: blog3,
  },
  {
    id: 4,
    title: 'Google IO Extended',
    date: 'April , 2024',
    summary: 'It’s a local extension of Google’s global I/O event, where developers gather to explore new announcements',
    image: blog4,
  },
  {
    id: 5,
    title: 'UX/UI Design Online Session',
    date: 'August 10, 2023',
    summary: 'The UI and UX Design session by GDSC Crimsons was a turning point.',
    image: blog5,
  },
  {
    id: 6,
    title: 'Devfest 2022',
    date: 'October 5, 2022',
    summary: 'Devfest 2022 was an experience I’ll never forget. As one of the largest developer conferences.',
    image: blog6,
  },
  {
    id: 7,
    title: 'BECOMING A GDSC CORE TEAM, DOCUMENTATION LEAD IN MY FIRST YEAR',
    date: 'April 1, 2025',
    summary: 'Becoming a Documentation Lead for the GDSC Core Team during my first year of college',
    image: blog7,
  },
];

export default function Blog() {
  return (
    <div className="main">
      {/* Navbar copied from Hero.jsx */}
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

      {/* Blog section below */}
      <div className="blog-container">
        <h1 className="blog-title"> Latest Blog Posts</h1>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-card-image" />
              <div className="blog-card-content">
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-date">{post.date}</p>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-readmore">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
