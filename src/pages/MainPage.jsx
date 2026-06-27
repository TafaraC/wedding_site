import React, { useState } from 'react';
// Import assets relative to this component's position
import firstImg from '../assets/first.jpg';
import secondImg from '../assets/second.jpg';
import finIMG from '../assets/third.jpg';

export default function MainPage() {
  const [formData, setFormData] = useState({
    guestCode: '',
    attendance: 'yes',
    groupSize: 1,
    guestNames: '',
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      nutAllergy: false,
    },
    otherDietary: '',
    hasAccommodation: 'no',
    musicRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      dietary: { ...prev.dietary, [name]: checked }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.guestCode.trim().length !== 4) {
      alert("❌ Submission Denied: You must enter a valid 4-digit unique guest code to RSVP.");
      return;
    }
    console.log("Database submission payload built:", formData);
    alert(`🎉 Validating unique key format. Writing RSVP under code: ${formData.guestCode.toUpperCase()}`);
  };

  return (
    <div className="main-wedding-site">
      <header className="wedding-header">
        <h1>Are You Ready to Celebrate?</h1>
        <p>We can't wait to share our special day with you.</p>
      </header>

      {/* Alternating Story Sequences */}
      <section className="timeline-cards">
        
        {/* Card 1: Image on Left, Text Space on Right */}
        <div className="card-row">
          <div className="card-image-container">
            <img src={firstImg} alt="His Story" />
          </div>
          <div className="card-text-container">
            <h3>His Story</h3>
            <p>Free space</p>
          </div>
        </div>

        {/* Card 2: Image on Right, Text Space on Left */}
        <div className="card-row reverse">
          <div className="card-image-container">
            <img src={secondImg} alt="Her Story" />
          </div>
          <div className="card-text-container">
            <h3>Her Story</h3>
            <p>Free space</p>
          </div>
        </div>

        {/* Card 3: Centered Image, Text Below */}
        <div className="card-row centered">
          <div className="card-image-container">
            <img src={finIMG} alt="Our Story Together" />
          </div>
          <div className="card-text-container">
            <h3>Our Story Together</h3>
            <p>Free space</p>
          </div>
        </div>

      </section>

      {/* Wedding Details Layout */}
      <section className="wedding-details">
        <h2>Wedding Details & Location</h2>
        <p><strong>Date:</strong> April 2027</p>
        <p><strong>Ceremony Venue:</strong> Red Ivory</p>
        
        <div className="map-placeholder">
          [Leaflet Map Component Layer - Highlighting venue and accommodation locations]
        </div>
      </section>

      {/* RSVP Submission Questionnaire Box */}
      <section className="rsvp-section">
        <h2>RSVP Questionnaire</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group" style={{ textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '12px', border: '2px dashed #ffd19a', marginBottom: '30px' }}>
            <label htmlFor="guestCode">ENTER YOUR UNIQUE 4-DIGIT CODE</label>
            <input 
              type="text" 
              id="guestCode"
              name="guestCode" 
              maxLength={4} 
              className="form-control code-input"
              value={formData.guestCode}
              onChange={(e) => setFormData(prev => ({ ...prev, guestCode: e.target.value.toUpperCase() }))}
              placeholder="A1B2"
              required
            />
            <small style={{ color: '#5b7173', display: 'block', marginTop: '8px', fontWeight: '600' }}>
              Your response will only process if a correct code is specified.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="attendance">Will you be attending?</label>
            <select id="attendance" name="attendance" className="form-control" value={formData.attendance} onChange={handleChange}>
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
          </div>

          {formData.attendance === 'yes' && (
            <>
              <div className="form-group">
                <label htmlFor="groupSize">Number of people in your group?</label>
                <input type="number" id="groupSize" name="groupSize" min="1" max="10" className="form-control" value={formData.groupSize} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="guestNames">Names of people in group (for namecards):</label>
                <textarea id="guestNames" name="guestNames" rows="2" className="form-control" placeholder="e.g. Alex Rivera, Sam Martinez" value={formData.guestNames} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Allergies & Dietary Requirements:</label>
                <div className="inline-checkboxes">
                  <label className="checkbox-label"><input type="checkbox" name="vegetarian" checked={formData.dietary.vegetarian} onChange={handleCheckboxChange} /> Vegetarian</label>
                  <label className="checkbox-label"><input type="checkbox" name="vegan" checked={formData.dietary.vegan} onChange={handleCheckboxChange} /> Vegan</label>
                  <label className="checkbox-label"><input type="checkbox" name="glutenFree" checked={formData.dietary.glutenFree} onChange={handleCheckboxChange} /> Gluten-Free</label>
                  <label className="checkbox-label"><input type="checkbox" name="nutAllergy" checked={formData.dietary.nutAllergy} onChange={handleCheckboxChange} /> Nut Allergy</label>
                </div>
                <input type="text" name="otherDietary" className="form-control" style={{ marginTop: '10px' }} placeholder="Other requirements or specific details..." value={formData.otherDietary} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="hasAccommodation">Do you have nearby accommodation secured?</label>
                <select id="hasAccommodation" name="hasAccommodation" className="form-control" value={formData.hasAccommodation} onChange={handleChange}>
                  <option value="yes">Yes, all sorted</option>
                  <option value="no">No, still looking / staying elsewhere</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="musicRequests">Dance floor music requests?</label>
                <input type="text" id="musicRequests" name="musicRequests" className="form-control" placeholder="Song title - Artist" value={formData.musicRequests} onChange={handleChange} />
              </div>
            </>
          )}

          <button type="submit" className="btn-submit">Submit RSVP Response</button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', margin: '60px 0' }}>
        <div className="image-placeholder placeholder-footer">
          Grand Duo Picture Frame Backdrop
        </div>
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#072a2d', fontWeight: 'bold' }}>See you in paradise!</p>
      </footer>
    </div>
  );
}