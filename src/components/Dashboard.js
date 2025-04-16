import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ itineraries }) {
  return (
    <div className="dashboard">
      <div className="nav-container">
        <h1>My Travel Itineraries</h1>
        <div style={{ width: '120px' }}></div>
      </div>
      <div className="itinerary-list">
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} className="itinerary-card">
            <Link to={`/itinerary/${itinerary.id}`}>
              <h2>{itinerary.tripName}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/new-itinerary" className="primary-button add-itinerary-button">
        Add New Itinerary
      </Link>
    </div>
  );
}

export default Dashboard; 