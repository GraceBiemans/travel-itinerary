import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItineraryPage({ itineraries }) {
  const { id } = useParams();
  const itinerary = itineraries.find(it => it.id === id);
  const [shareLink, setShareLink] = useState('');

  const generateShareLink = () => {
    const currentUrl = window.location.origin;
    const shareUrl = `${currentUrl}/share/${id}`;
    setShareLink(shareUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
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
      </div>
      <div className="share-section">
        <button onClick={generateShareLink} className="primary-button">
          Generate Share Link
        </button>
        {shareLink && (
          <div className="share-link-container">
            <input 
              type="text" 
              value={shareLink} 
              readOnly 
              className="share-link-input"
            />
            <button onClick={copyToClipboard} className="primary-button">
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItineraryPage; 