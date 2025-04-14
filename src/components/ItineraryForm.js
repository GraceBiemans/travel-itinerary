import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ItineraryForm({ onAddItinerary }) {
  const [tripName, setTripName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tripName.trim()) {
      onAddItinerary({ tripName });
      navigate('/');
    }
  };

  return (
    <div className="itinerary-form">
      <div className="nav-container">
        <Link to="/" className="primary-button">
          Cancel
        </Link>
        <h1>Create New Itinerary</h1>
        <div style={{ width: '120px' }}></div>
      </div>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label htmlFor="tripName">Trip Name:</label>
          <input
            type="text"
            id="tripName"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Itinerary</button>
      </form>
    </div>
  );
}

export default ItineraryForm; 