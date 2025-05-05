import React from "react";
import { Link } from "react-router-dom";
import "./blogStyle.css";
import blog2 from "../../assets/dt.jpg";

export default function Blog2() {
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
        <h1 className="blog-heading">Bat Nilalabas mo ang DT mo?  My GDSC CRIMSONS 2023 Experience</h1>
        <p className="blog-date">December 2023</p>
        <img src={blog2} alt="Design Thinking Workshop" className="blog-image" />
        <p className="blog-content">
          One of the most unforgettable moments of 2023 was when I attended the event titled <strong>"Bat Nilalabas mo ang DT mo?"</strong> hosted by <strong>GDSC CRIMSONS</strong>. DT stands for <em>Design Thinking</em> — a concept that I only had vague ideas about before joining the workshop, but ended up loving deeply by the end of the day.
        </p>

        <p className="blog-content">
          The event was more than just a seminar; it was a highly interactive, fast-paced, and fun-filled session where students from different courses came together to learn about solving real-world problems using human-centered design. The vibe was collaborative, and everyone had the chance to participate and share ideas.
        </p>

        <h2 className="blog-subheading">🔍 What is Design Thinking?</h2>
        <p className="blog-content">
          Design Thinking is a problem-solving approach that focuses on understanding the user's needs, challenging assumptions, and redefining problems to identify alternative strategies and solutions. It involves five main stages:
          <ol>
            <li>Empathize</li>
            <li>Define</li>
            <li>Ideate</li>
            <li>Prototype</li>
            <li>Test</li>
          </ol>
          Through hands-on activities, we experienced each step in real-time, and it made me realize how powerful and practical this method is.
        </p>

        <h2 className="blog-subheading">🧠 My Experience During the Workshop</h2>
        <p className="blog-content">
          From brainstorming with strangers to crafting a prototype out of scratch paper and markers, the workshop took us out of our comfort zones. But that’s where the magic happened. We laughed, we argued (in a good way!), and we built ideas that actually made sense.
        </p>
        <p className="blog-content">
          I especially enjoyed the part where we had to pitch our solution to a panel. It felt like a mini hackathon, and it pushed us to communicate clearly and effectively. Plus, it was fun seeing other groups’ ideas too—ranging from tech-based solutions to community projects.
        </p>

        <h2 className="blog-subheading">🙌 What I Learned</h2>
        <ul className="blog-content">
          <li>Design Thinking is more than just creativity it’s empathy in action.</li>
          <li>Working with people from different backgrounds brings powerful perspectives.</li>
          <li>It’s okay to fail, as long as you learn and iterate.</li>
          <li>Innovation starts with asking the right questions, not jumping to solutions.</li>
        </ul>

        <h2 className="blog-subheading">🎉 Why This Event Mattered</h2>
        <p className="blog-content">
          This wasn’t just about DT. It was about empowering students to think differently, act boldly, and approach problems with a fresh mindset. It was about unlocking the creativity that’s already inside us—and letting it out. GDSC CRIMSONS did an amazing job creating an inclusive space where ideas flourished, and learning felt fun.
        </p>

        <p className="blog-content">
          I left the room with new friends, new ideas, and a deeper appreciation for the design process. It reminded me that innovation doesn’t come from perfection—it comes from people willing to get their hands dirty and keep iterating.
        </p>

        <h2 className="blog-subheading">🚀 Final Thoughts</h2>
        <p className="blog-content">
          So, “Bat nilalabas mo ang DT mo?”because we all have that spark of creativity within us, and with the right process, we can build solutions that make a real impact. Huge thanks to <strong>GDSC CRIMSONS</strong> for this KFC Pizza Fect experience. Looking forward to more events that challenge, inspire, and help us grow as future innovators.
        </p>

        <p className="blog-content">
          Until next time, keep building, keep designing, and don’t forget to unleash your DT. 
        </p>

        <p className="blog-content"><em> -Fhadia Lagoyo.”</em></p>
      </div>
    </div>
  );
}
