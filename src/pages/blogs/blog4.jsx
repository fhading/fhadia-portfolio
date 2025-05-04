import React from "react";
import "./blogStyle.css";
import ioImage from "../../assets/io.jpg"; // Make sure io.jpg exists in src/assets/

export default function Blog4() {
  return (
    <div className="blog-post">
      <img src={ioImage} alt="Google I/O Extended Zamboanga" className="blog-image" />
      <h1 className="blog-heading">Google I/O Extended 2023 – GDG Zamboanga</h1>
      <p className="blog-date">July 2023</p>

      <p className="blog-content">
        The tech world is always evolving, and being part of that momentum is incredibly exciting. Thanks to <strong>Google Developer Group (GDG) Zamboanga</strong>, I had the chance to experience the magic of <strong>Google I/O Extended 2023</strong>—a local event that brings Google’s biggest annual developer conference closer to our community.
        <br /><br />
        <strong>What is Google I/O Extended?</strong><br />
        It’s a local extension of Google’s global I/O event, where developers gather to explore new announcements, tools, and tech insights. The event is designed to bring that same I/O energy to developers around the world—even those who can’t attend the main conference in person.
        <br /><br />
        <strong>My Experience:</strong><br />
        The venue was buzzing with excitement as tech enthusiasts, students, and professionals gathered to dive into the future of development. We watched keynote replays, explored Google's latest innovations in AI, Android, Flutter, and Firebase, and joined in local discussions and activities.
        <br /><br />
        🔹 Live viewing of key announcements<br />
        🔹 Breakout sessions led by local experts<br />
        🔹 Networking with fellow developers<br />
        🔹 Swag, snacks, and a raffle (of course 😄)<br />
        <br />
        One of the highlights for me was seeing how **AI is being integrated** into everyday tools and how Google is empowering developers to build smarter, more efficient applications. Hearing local devs share their insights and projects made everything even more relatable.
        <br /><br />
        <strong>Why It Mattered:</strong><br />
        This wasn’t just about tech—it was about community. Being surrounded by people who are equally passionate about innovation reminded me of the importance of staying curious and connected.
        <br /><br />
        Whether you’re a student or an experienced dev, events like Google I/O Extended help you stay on top of trends while connecting with peers in your region.
        <br /><br />
        A huge shoutout to GDG Zamboanga for organizing such a fantastic experience. I walked away inspired, informed, and excited for what’s next.
        <br /><br />
        <em>See you at the next one</em>
      </p>
    </div>
  );
}
