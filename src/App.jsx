import { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage';
import RSVPPage from './pages/RSVPPage';
import AdminPage from './pages/AdminPage';
import ItineraryPage from './pages/ItineraryPage';
import GiftRegistryPage from './pages/GiftRegistryPage';
import DressCodePage from './pages/DressCodePage';
import WeddingPartyPage from './pages/WeddingPartyPage';
import './index.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav className="navbar" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu();
        toggle.current?.focus();
      }
    }}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>Chiedza & Fred</Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={menuOpen}
          aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
        </button>
        <div id="navigation-links" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/directions" onClick={closeMenu}>Directions</NavLink>
          <NavLink to="/itinerary" onClick={closeMenu}>Itinerary</NavLink>
          <NavLink to="/dress-code" onClick={closeMenu}>Dress Code</NavLink>
          <NavLink to="/wedding-party" onClick={closeMenu}>Wedding Party</NavLink>
          <NavLink to="/gift-registry" onClick={closeMenu}>Gift Registry</NavLink>
          <NavLink to="/rsvp" className="nav-rsvp-btn" onClick={closeMenu}>RSVP</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/dress-code" element={<DressCodePage />} />
        <Route path="/wedding-party" element={<WeddingPartyPage />} />
        <Route path="/gift-registry" element={<GiftRegistryPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/wedding-dashboard-xyz" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
