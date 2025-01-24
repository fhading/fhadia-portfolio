import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/hero';  // Ensure this import path is correct
import './App.css';  

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App