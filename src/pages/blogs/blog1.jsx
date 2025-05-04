import React from 'react';
import './blogStyle.css';
import blog1 from "../../assets/ai.jpg"; // ⬅ Corrected path for your folder structure

export default function Blog1() {
  return (
    <div className="blog-post">
        <img src={blog1} alt="AI event" className="blog-image" />
      <h1 className="blog-heading">Winning a Raffle and Building with AI – My Experience</h1>
      <p className="blog-date">April 26, 2025</p>

      <h2>Introduction</h2>
      <p>
        As someone passionate about tech and innovation, attending community-led events is always a huge source of inspiration for me.
        This time, I had the privilege of joining an event organized by <strong>Google Developer Group (GDG) Zamboanga</strong>, and it turned
        out to be more than just another meetup—it was a turning point.
      </p>
      <p>
        From <strong>learning about the power of AI</strong> to <strong>winning a raffle prize</strong>, the day was packed with excitement,
        knowledge, and surprises I’ll never forget.
      </p>

      <h2>The Buzz Before the Event</h2>
      <p>I was eager to:</p>
      <ul>
        <li>Explore how AI is being used in real-world applications</li>
        <li>Network with fellow developers and tech enthusiasts</li>
        <li>Get hands-on with tools like TensorFlow, Dialogflow, and Google Cloud</li>
        <li>Just maybe… win something from the raffle 😄</li>
      </ul>

      <h2>The Event: A Deep Dive into AI</h2>
      <p>The keynote speaker gave a powerful introduction to how AI is shaping industries, solving global problems, and making our lives better.</p>
      <h3>🧠 Key Learnings</h3>
      <ol>
        <li><strong>Demystifying AI</strong> – Real-world examples made it click.</li>
        <li><strong>Intro to Machine Learning</strong> – Datasets, models, and responsible AI.</li>
        <li>
          <strong>Using Google’s AI Tools</strong> – Live demos with:
          <ul>
            <li>TensorFlow</li>
            <li>Dialogflow</li>
            <li>Vertex AI</li>
            <li>PaLM API</li>
          </ul>
        </li>
      </ol>

      <h2>Hands-On Workshops: Where the Magic Happened</h2>
      <p>
        I joined an AI image classifier workshop using TensorFlow.js to build a fruit recognition app. It was collaborative, fun, and super empowering.
      </p>

      <h2>The Unexpected Raffle Win 🎁</h2>
      <p>
        I didn’t expect much, but I actually won one of the event’s prizes! The moment brought so much joy—it added another layer of excitement to an already amazing day.
      </p>

      <h2>The People and the Passion</h2>
      <p>
        The real value came from the people I met: students, pros, and developers all sharing ideas and supporting each other. GDG Zamboanga built a truly inclusive space.
      </p>

      <h2>My Takeaways</h2>
      <ul>
        <li>✅ Deeper understanding of AI</li>
        <li>✅ Hands-on ML experience</li>
        <li>✅ New tech friends</li>
        <li>✅ Raffle loot (yes!)</li>
        <li>✅ Motivation to keep building</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        Winning the raffle was just a bonus. The real prize was being part of something bigger—a community that encourages exploration, supports learners, and believes in the future of technology.
      </p>
      <p>
        Until the next event—keep building, keep learning, and stay awesome. 🚀
      </p>

      <p className="signature">*Written by a proud GDG Zamboanga raffle winner & AI dreamer.*</p>
    </div>
  );
}
