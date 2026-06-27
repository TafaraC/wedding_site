import React from 'react';

export default function DirectionsPage() {
  return (
    <div className="main-wedding-site page-content-wrapper">
      <header className="wedding-header">
        <h1>Location & Directions</h1>
        <p>Getting to Red Ivory Venue</p>
      </header>

      <section className="home-card-panel">
        <h2>The Map</h2>
        <div className="map-placeholder">
          [Leaflet Map Component Layer - Highlighting Red Ivory and nearby accommodation options]
        </div>
      </section>

      <section className="home-card-panel" style={{ marginTop: '30px' }}>
        <h2>Travel Details</h2>
        <p style={{ marginTop: '10px' }}><strong>Venue Address:</strong> Red Ivory, North West, South Africa</p>
        <p style={{ marginTop: '10px', color: '#5b7173' }}>
          Detailed text directions, gate entry requirements, check-in instructions, and emergency contact phone lines will be rendered here.
        </p>
      </section>
    </div>
  );
}