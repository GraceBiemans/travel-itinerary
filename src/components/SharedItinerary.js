import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SharedItinerary({ itineraries }) {
  const { id } = useParams();

  useEffect(() => {
    console.log('Shared Itinerary Debug:', {
      id,
      itineraries,
      foundItinerary: itineraries.find(it => it.id === id)
    });
  }, [id, itineraries]);

  const itinerary = itineraries.find(it => it.id === id);

  if (!itinerary) {
    return (
      <div className="shared-itinerary">
        <div className="nav-container">
          <h1>Itinerary Not Found</h1>
          <div style={{ width: '120px' }}></div>
        </div>
        <div className="shared-content">
          <p>The requested itinerary could not be found. It may have been deleted or the link is incorrect.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shared-itinerary">
      <div className="nav-container">
        <h1>{itinerary.tripName}</h1>
        <div style={{ width: '120px' }}></div>
      </div>
      <div className="shared-content">
        <p>This is a shared view of the itinerary. Some features may be limited.</p>
        {/* Add more itinerary details here as you expand the app */}
      </div>
    </div>
  );
}

export default SharedItinerary; 