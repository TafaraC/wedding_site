import React from 'react';
import { Link } from 'react-router-dom';
import firstImg from '../assets/first.jpg';
import secondImg from '../assets/second.jpg';
import finIMG from '../assets/third.jpg';

export default function HomePage() {
  return (
    <div className="main-wedding-site">
      
      {/* 1. Flat, Edge-to-Edge Hero */}
      <section className="hero-section">
        <h1>Placeholder name</h1>
        <div className="hero-date-venue">
          ?? April 2027 • Red Ivory
        </div>
      </section>

      {/* 2. Editorial Split Block (Image 1) */}
      <section className="split-section">
        <div className="split-image">
          [ Image 1 - Placeholder ]
        </div>
        <div className="split-text">
          <h2>Welcome</h2>
          <p></p>
        </div>
      </section>

      {/* 3. Full Width Break (Image 2) */}
      <section className="full-width-image">
        [ Placeholder ]
      </section>

      {/* 4. Editorial Split Block Reversed (Image 3) */}
      <section className="split-section reverse">
        <div className="split-image" style={{ background: '#F4EBE6' }}>
          [ Image 3 - Placeholder ]
        </div>
        <div className="split-text">
          <h2>The Details</h2>
          <p>Text</p>
        </div>
      </section>

      {/* 5. Edge-to-Edge Story Segments (Using your custom assets) */}
      <section className="story-section">
        <h2 className="story-section-title">Our Story</h2>
        
        <div className="story-row">
          <img src={firstImg} alt="His Story" className="story-img-edge" />
          <div className="story-text-edge">
            <h3>His Story</h3>
            <p>Free space</p>
          </div>
        </div>

        <div className="story-row reverse">
          <img src={secondImg} alt="Her Story" className="story-img-edge" />
          <div className="story-text-edge">
            <h3>Her Story</h3>
            <p>Free space</p>
          </div>
        </div>

        <div className="story-row together">
          <img src={finIMG} alt="Our Story Together" className="story-img-edge" />
          <div className="story-text-edge">
            <h3>Our Story Together</h3>
            <p>Free space</p>
          </div>
        </div>
      </section>

      {/* 6. Three-Image Banner Footer (Images 4, 5, 6) */}
      <section className="three-image-row">
        <div style={{ background: '#DCE0D9' }}>[ Image 4 ]</div>
        <div style={{ background: '#D3DBDE' }}>[ Image 5 ]</div>
        <div style={{ background: '#E8D3D1' }}>[ Image 6 ]</div>
      </section>

      {/* 7. Split Section (Images 7 & 8) mapped creatively into the Nav Footers */}
      <section className="nav-links-section">
        <div className="nav-link-block bg-sage">
          <div style={{ paddingBottom: '20px', color: '#8C9188', textTransform: 'uppercase' }}>[ Image 7 Spot ]</div>
          <h3>Getting There</h3>
          <p>Find venue details and local accommodation recommendations.</p>
          <Link to="/directions" className="action-link">View Directions</Link>
        </div>

        <div className="nav-link-block bg-rose">
          <div style={{ paddingBottom: '20px', color: '#A89290', textTransform: 'uppercase' }}>[ Image 8 Spot ]</div>
          <h3>Join the Celebration</h3>
          <p>Text</p>
          <Link to="/rsvp" className="action-link">RSVP Now</Link>
        </div>
      </section>

      {/* 8. Contact Details Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">If you have any questions or need assistance, please don't hesitate to reach out.</p>
        
        <div className="contact-grid">
          <div className="contact-block">
            <h4>Groom</h4>
            <p>+27 12 345 6789</p>
          </div>
          <div className="contact-block">
            <h4>Bride</h4>
            <p>+27 98 765 4321</p>
          </div>
          <div className="contact-block">
            <h4>Email</h4>
            <p>hello@ourwedding.com</p>
          </div>
        </div>
      </section>

    </div>
  );
}