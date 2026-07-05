import React from 'react';
import { Link } from 'react-router-dom';
import firstImg from '../assets/first.jpg';
import secondImg from '../assets/second.jpg';
import finIMG from '../assets/third.jpg';
import banner from '../assets/img1.jpg';
import IMG2 from '../assets/img2.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/fred.jpg';

export default function HomePage() {
  return (
    <div className="main-wedding-site">
      
      {/* 1. Flat, Edge-to-Edge Hero */}
      <section className="hero-section">
        <h1>Welcome to Chiedza & Fred's wedding</h1>
        <div className="hero-date-venue">
          24 April 2027 • Red Ivory
        </div>
      </section>

      {/* 3. Top Banner (Square on Mobile, Cropped Landscape on Desktop) */}
      <h2 className="story-section-title">Our Story</h2>
      <section className="full-width-image">
        <img src={banner} alt="Chiedza and Fred Celebration Header" />

      </section>
      <section className="story-section">
        

        <div className="story-row together">
          <div className="story-text-edge">
            <p>Free space</p>
          </div>
        </div>
      </section>
        

      {/* 5. Edge-to-Edge Story Segments */}
      <section className="story-section">
        
        <div className="story-row">
          
          <div className="story-text-edge">
            
            <h3>His Story</h3>
            <img src={firstImg} alt="His Story" className="story-img-edge" />
            <p>Free space</p>
          </div>
        </div>

        <div className="story-row reverse">
        
          <div className="story-text-edge">
            <h3>Her Story</h3>
              <img src={secondImg} alt="Her Story" className="story-img-edge" />
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
      
      {/* 4. Editorial Split Block Reversed */}
      <section className="split-section reverse">
        <div className="split-image" style={{ background: '#F4EBE6' }}>
          {/* Replace with an <img /> asset link when ready */}
          <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: '#8C9188', textTransform: 'uppercase', letterSpacing: '1px' }}>
            [ Image 3 - Placeholder ]
          </div>
        </div>
        <div className="split-text">
          <h2>The Details</h2>
          <p>Text</p>
        </div>
      </section>

      {/* 6. Dynamic Responsive Three-Image Row */}
      {/* 6. Dynamic Responsive Three-Image Row */}
      <section className="three-image-row">
        <div style={{ background: '#DCE0D9' }}>
          <img src={img4} alt="Wedding Gallery Detail 1" />
        </div>
        <div style={{ background: '#D3DBDE' }}>
          <img src={img5} alt="Wedding Gallery Detail 2" />
        </div>
        <div style={{ background: '#E8D3D1' }}>
          <img src={img6} alt="Wedding Gallery Detail 3" />
        </div>
      </section>

      {/* 7. Quick Navigation Action Blocks */}
      <section className="nav-links-section">
        <div className="nav-link-block bg-sage">
          <div style={{ paddingBottom: '20px', color: '#8C9188', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>[ Image 7 Spot ]</div>
          <h3>Getting There</h3>
          <p>Find venue details and local accommodation recommendations.</p>
          <Link to="/directions" className="action-link">View Directions</Link>
        </div>

        <div className="nav-link-block bg-rose">
          <div style={{ paddingBottom: '20px', color: '#A89290', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>[ Image 8 Spot ]</div>
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