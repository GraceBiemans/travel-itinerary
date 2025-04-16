import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItineraryPage({ itineraries }) {
  const { id } = useParams();
  const itinerary = itineraries.find(it => it.id === id);

  const copyShareLink = () => {
    const currentUrl = window.location.origin;
    const shareUrl = `${currentUrl}/share/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Share link copied to clipboard!');
  };


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
        <div className="share-section">
        <button onClick={copyShareLink} className="primary-button">
          Copy Share Link
        </button>
      </div>
      </div>
    </div>
  );
}

export default ItineraryPage; 