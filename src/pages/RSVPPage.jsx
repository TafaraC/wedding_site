import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    guestCode: '',
    attendance: 'yes',
    guestNames: [''], // Starts with one empty name block by default
    dietary: { vegetarian: false, vegan: false, glutenFree: false, nutAllergy: false },
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
    setFormData(prev => ({ ...prev, dietary: { ...prev.dietary, [name]: checked } }));
  };

  // --- Dynamic Guest Name Handlers ---
  const handleNameChange = (index, value) => {
    const newNames = [...formData.guestNames];
    newNames[index] = value;
    setFormData(prev => ({ ...prev, guestNames: newNames }));
  };

  const handleAddName = () => {
    setFormData(prev => ({ ...prev, guestNames: [...prev.guestNames, ''] }));
  };

  const handleRemoveName = (index) => {
    if (formData.guestNames.length > 1) {
      const newNames = formData.guestNames.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, guestNames: newNames }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.guestCode.trim().length !== 4) {
      alert("❌ Please enter a valid 4-digit unique guest code.");
      return;
    }

    if (formData.attendance === 'yes') {
      const validNames = formData.guestNames.filter(name => name.trim() !== '');
      if (validNames.length === 0) {
        alert("❌ Please provide at least one guest name.");
        return;
      }
    }

    // Clean up the payload
    const finalPayload = {
      attendance: formData.attendance,
      groupSize: formData.guestNames.filter(name => name.trim() !== '').length,
      guestNames: formData.guestNames.filter(name => name.trim() !== ''),
      dietary: formData.dietary,
      otherDietary: formData.otherDietary,
      hasAccommodation: formData.hasAccommodation,
      musicRequests: formData.musicRequests,
      hasResponded: true, // Flag to easily see who has replied in your admin dashboard
      respondedAt: new Date().toISOString()
    };

    try {
      // Point directly to the document matching their 4-digit code
      const guestDocRef = doc(db, 'guests', formData.guestCode.toUpperCase());
      
      // Update that specific document
      await updateDoc(guestDocRef, finalPayload);
      
      alert(`🎉 Thank you! Your RSVP has been successfully received.`);
      
      // Optional: Clear the form or redirect to the home page here
      
    } catch (error) {
      console.error("Error updating RSVP:", error);
      alert("❌ We couldn't find that guest code, or there was a network error. Please check your 4-digit code and try again.");
    }
  };
  return (
    <div className="main-wedding-site page-content-wrapper">
      
      <div className="form-container-panel">
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>RSVP</h1>
          <p style={{ color: '#6C6D68' }}>Kindly respond by entering your unique code</p>
        </header>

        <form onSubmit={handleSubmit} className="conventional-form">
          
          {/* Section 1: Authentication */}
          <h2 className="form-section-title">Verification</h2>
          <div className="form-group auth-group">
            <label htmlFor="guestCode">Unique 4-Digit Guest Code *</label>
            <input 
              type="text" 
              id="guestCode" 
              maxLength={4} 
              className="form-control code-input"
              value={formData.guestCode}
              onChange={(e) => setFormData(prev => ({ ...prev, guestCode: e.target.value.toUpperCase() }))}
              placeholder="e.g. A1B2"
              required
            />
            <small>Found on your physical or digital invitation.</small>
          </div>

          {/* Section 2: Attendance */}
          <h2 className="form-section-title">Attendance</h2>
          <div className="form-group">
            <label htmlFor="attendance">Will you be celebrating with us?</label>
            <select id="attendance" name="attendance" className="form-control" value={formData.attendance} onChange={handleChange}>
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
          </div>

          {/* Section 3: Guest Details & Preferences (Only show if attending) */}
          {formData.attendance === 'yes' && (
            <>
              <h2 className="form-section-title">Guest Details</h2>
              <div className="form-group">
                <label>Names of Attendees (For Seating & Namecards)</label>
                
                {formData.guestNames.map((name, index) => (
                  <div key={index} className="dynamic-input-row">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder={`Guest ${index + 1} Full Name`}
                      value={name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                      required={index === 0} // Only the first field is strictly required by HTML
                    />
                    <button 
                      type="button" 
                      className="btn-remove"
                      onClick={() => handleRemoveName(index)}
                      disabled={formData.guestNames.length === 1}
                      title="Remove Guest"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                
                <button type="button" className="btn-add" onClick={handleAddName}>
                  + Add Another Guest
                </button>
              </div>

              <h2 className="form-section-title">Preferences</h2>
              <div className="form-group">
                <label>Allergies & Dietary Requirements</label>
                <div className="inline-checkboxes">
                  <label className="checkbox-label"><input type="checkbox" name="vegetarian" checked={formData.dietary.vegetarian} onChange={handleCheckboxChange} /> Vegetarian</label>
                  <label className="checkbox-label"><input type="checkbox" name="vegan" checked={formData.dietary.vegan} onChange={handleCheckboxChange} /> Vegan</label>
                  <label className="checkbox-label"><input type="checkbox" name="glutenFree" checked={formData.dietary.glutenFree} onChange={handleCheckboxChange} /> Gluten-Free</label>
                  <label className="checkbox-label"><input type="checkbox" name="nutAllergy" checked={formData.dietary.nutAllergy} onChange={handleCheckboxChange} /> Nut Allergy</label>
                </div>
                <input type="text" name="otherDietary" className="form-control" style={{ marginTop: '15px' }} placeholder="Other requirements or specific details..." value={formData.otherDietary} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="hasAccommodation">Accommodation Status</label>
                <select id="hasAccommodation" name="hasAccommodation" className="form-control" value={formData.hasAccommodation} onChange={handleChange}>
                  <option value="no">No, still looking / staying elsewhere</option>
                  <option value="yes">Yes, secured nearby</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="musicRequests">Dance Floor Music Requests</label>
                <input type="text" id="musicRequests" name="musicRequests" className="form-control" placeholder="Song title - Artist" value={formData.musicRequests} onChange={handleChange} />
              </div>
            </>
          )}

          <div style={{ marginTop: '40px' }}>
            <button type="submit" className="btn-submit">Submit Response</button>
          </div>

        </form>
      </div>
    </div>
  );
}