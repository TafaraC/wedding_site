import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage';
import RSVPPage from './pages/RSVPPage';
import AdminPage from './pages/AdminPage';
import './index.css';

function App() {
  return (
    <Router>
      {/* 🌴 Global Tropical Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Very professional wedding site</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/directions">Directions</Link>
            <Link to="/rsvp" className="nav-rsvp-btn">RSVP</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/wedding-dashboard-xyz" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;