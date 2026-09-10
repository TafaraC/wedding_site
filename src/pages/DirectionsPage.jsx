
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icon missing in Vite/React builds
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Exact GPS Coordinates converted to Decimal Degrees + Physical Addresses
const locations = {
  venue: {
    name: "Red Ivory Venue (Main Reception)",
    coords: [-25.75037, 27.78350],
    address: "R560, Hartbeespoort, 0216",
    url: null,
    isVenue: true
  },
  accommodations: [
    {
      name: "Migdash Guesthouse",
      coords: [-25.75908, 27.78239], // EXACT: 25°45'32.7"S 27°46'56.6"E
      address: "R560 Skeerpoort Road, Hartbeespoort, 0261",
      desc: "Charming guesthouse accommodation located just minutes from the venue.",
      url: "https://migdash.co.za/"
    },
    {
      name: "Seasons Golf, Leisure and Spa",
      coords: [-25.70242, 27.85233], // EXACT: 25°42'08.7"S 27°51'08.4"E
      address: "116 Old Rustenburg Road, Hartbeespoort, Brits, 0250",
      desc: "Luxury resort featuring 18-hole golf, spa treatments, and family suites.",
      url: "https://www.seasonssa.co.za/accommodation/"
    },
    {
      name: "Mount Amanzi",
      coords: [-25.71731, 27.84225], // EXACT: 25°43'02.3"S 27°50'32.1"E
      address: "Cnr Old Rustenburg Rd &, R512, Hartbeespoort, 0216",
      desc: "Award-winning riverside resort offering comfortable self-catering chalets.",
      url: "https://www.mountamanzi.co.za/"
    }
  ]
};

export default function DirectionsPage() {
  return (
    <div className="main-wedding-site page-content-wrapper directions-page">
      
      {/* 1. Monochrome Page Header */}
      <header className="directions-header">
        <h1 className="directions-title">Location & Travel</h1>
        <p className="directions-subtitle">Getting to Red Ivory Venue & Nearby Accommodations</p>
      </header>

      {/* 2. Interactive Leaflet Map Panel */}
      <section className="map-section-panel">
        <h2 className="section-heading-bw">Interactive Map</h2>
        <p className="section-helper-text">Explore the venue location and tap markers to view lodging addresses and details.</p>
        
        <div className="leaflet-map-wrapper">
          <MapContainer 
            center={locations.venue.coords} 
            zoom={13} 
            scrollWheelZoom={false}
            className="custom-leaflet-map"
          >
            {/* Standard OpenStreetMap Tile Layer */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Red Ivory Venue Main Marker */}
            <Marker position={locations.venue.coords}>
              <Popup>
                <div className="popup-content">
                  <strong>✨ {locations.venue.name}</strong><br />
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>📍 {locations.venue.address}</span>
                </div>
              </Popup>
            </Marker>

            {/* Accommodation Markers */}
            {locations.accommodations.map((place, index) => (
              <Marker key={index} position={place.coords}>
                <Popup>
                  <div className="popup-content">
                    <strong>🛏️ {place.name}</strong><br />
                    <span style={{ fontSize: '0.8rem', color: '#555', display: 'block', margin: '4px 0' }}>
                      📍 {place.address}
                    </span>
                    <a href={place.url} target="_blank" rel="noopener noreferrer" className="popup-link">
                      Visit Website →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* 3. Recommended Accommodation Cards */}
      <section className="accommodations-section">
        <h2 className="section-heading-bw">Recommended Lodging</h2>
        <p className="section-helper-text">We have highlighted three wonderful stays nearby for your convenience.</p>

        <div className="accom-grid">
          {locations.accommodations.map((place, index) => (
            <div key={index} className="accom-card">
              <div>
                <h3>{place.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#000', fontWeight: '500', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  📍 {place.address}
                </p>
                <p>{place.desc}</p>
              </div>
              <a href={place.url} target="_blank" rel="noopener noreferrer" className="btn-outline-black-full">
                Book / View Website
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Practical Travel Details */}
      <section className="travel-details-section">
        <h2 className="section-heading-bw">Travel Details & Gate Entry</h2>
        <div className="travel-info-box">
          <p><strong>Venue Address:</strong> Red Ivory, R560, Hartbeespoort, 0216, South Africa</p>
          <p className="margin-top-15"><strong>Gate Security:</strong> When arriving at the security gate, kindly inform the guard you are attending <em>Chiedza & Fred's Wedding</em> to receive guest parking directions.</p>
          <p className="margin-top-15"><strong>Driving Tips:</strong> Hartbeespoort roads can experience heavier traffic on weekends. We advise departing 30–45 minutes earlier than GPS estimates to ensure relaxed arrival and pre-ceremony drinks.</p>
        </div>
      </section>

    </div>
  );
}