import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exploration from './pages/Exploration';
import Endgame from './pages/Endgame';
import Quest from './pages/Quest';
import Dailies from './pages/Dailies';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploration" element={<Exploration />} />
            <Route path="/endgame" element={<Endgame />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/dailies" element={<Dailies />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
