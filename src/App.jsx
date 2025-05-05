import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/hero';  
import About from './pages/about';
import Contact from './components/contact';
import Experience from './components/Experience';
import Blog from './components/Blog'; // or wherever Blog.jsx is located
import './App.css';  
import Blog1 from './pages/blogs/blog1';
import Blog2 from './pages/blogs/blog2';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import Blog5 from './pages/blogs/blog5';
import Blog6 from './pages/blogs/blog6';
import Blog7 from './pages/blogs/blog7';
import Project from './components/project'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/blog/2" element={<Blog2 />} />
          <Route path="/blog/3" element={<Blog3 />} />
          <Route path="/blog/4" element={<Blog4 />} />
          <Route path="/blog/5" element={<Blog5 />} />
          <Route path="/blog/6" element={<Blog6 />} />
          <Route path="/blog/7" element={<Blog7 />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
