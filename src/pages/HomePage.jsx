import React from 'react';
import { Link } from 'react-router-dom';
import finIMG from '../assets/third.jpg';
import IMG1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

export default function HomePage() {
  return (
    <div className="main-wedding-site">
      
      {/* 1. Black & White Side-by-Side Hero (Stacked on Mobile) */}
      <section className="hero-split-section">
        <div className="hero-img-container">
          {/* This image retains its exact native aspect ratio and fades out at the edge */}
          <img src={IMG1} alt="Chiedza & Fred" className="hero-img-fade" />
        </div>
        
        <div className="hero-text-container">
          <h1 className="hero-names">Chiedza & Fred</h1>
          <p className="hero-invite">
            Joyfully request the honor of your presence <br />
            at the celebration of their marriage
          </p>
          
          <div className="hero-bottom-details">
            <p className="hero-date">24 April 2027 • Red Ivory</p>
            <Link to="/rsvp" className="btn-rsvp-black">RSVP</Link>
          </div>
        </div>
      </section>

      {/* 2. Landscape Story Strip (Text Left, Shrunk Floating Image Right) */}
      <section className="story-landscape-strip">
        <div className="story-landscape-text">
          <h2>Our Story</h2>
          <p>
            Free space
          </p>
        </div>
        
        <div className="story-landscape-img-container">
          <img src={img4} alt="Our Story Together" className="story-floating-img" />
        </div>
      </section>

      {/* 3. Three-Image Row (Fluid Grid) */}
      <section className="three-image-row">
        <div>
          <img src={img2} alt="Gallery Element 1" />
        </div>
        <div>
          <img src={img4} alt="Gallery Element 2" />
        </div>
        <div>
          <img src={img5} alt="Gallery Element 3" />
        </div>
      </section>

      {/* 4. Alternative Nav Footers */}
      <section className="nav-links-section">
        <div className="nav-link-block bg-white-block">
          <div className="img-spot-text">[ Image 7 Spot ]</div>
          <h3>Getting There</h3>
          <p>Find venue details and local accommodation recommendations.</p>
          <Link to="/directions" className="action-link-bw-outline">View Directions</Link>
        </div>

        <div className="nav-link-block bg-black-block">
          <div className="img-spot-text-light">[ Image 8 Spot ]</div>
          <h3>Join the Celebration</h3>
          <p>Let us know you'll be joining us by entering your unique code.</p>
          <Link to="/rsvp" className="action-link-bw-solid">RSVP Now</Link>
        </div>
      </section>

      {/* 5. Contact Details Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">If you have any questions or need assistance, please don't hesitate to reach out.</p>
        
        <div className="contact-grid">
          <div className="contact-block">
            <h4>Groom</h4>
            <p>+27 71 962 1315</p>
          </div>
          <div className="contact-block">
            <h4>Bride</h4>
            <p>+27 72 151 9531 </p>
          </div>
          <div className="contact-block">
            <h4>Email</h4>
            <p>chiedzachibanda5@gmail.com</p>
          </div>
        </div>
      </section>

    </div>
  );
}