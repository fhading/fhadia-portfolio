import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/hero';  
import './App.css';  
import About from './pages/about';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App