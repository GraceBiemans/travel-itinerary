import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ItineraryPage({ itineraries }) {
  const { id } = useParams();
  const itinerary = itineraries[parseInt(id)];

  if (!itinerary) {
    return <div>Itinerary not found</div>;
  }

  return (
    <div className="itinerary-page">
      <div className="nav-container">
        <Link to="/" className="primary-button">
          ← Back to Dashboard
        </Link>
        <h1>{itinerary.tripName}</h1>
        <div style={{ width: '120px' }}></div> {/* Spacer to balance the layout */}
      </div>
    </div>
  );
}

export default ItineraryPage; 