import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ItineraryForm from './components/ItineraryForm';
import ItineraryPage from './components/ItineraryPage';

function App() {
  const [itineraries, setItineraries] = useState([]);

  const addItinerary = (newItinerary) => {
    setItineraries([...itineraries, newItinerary]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard itineraries={itineraries} />} />
          <Route
            path="/new-itinerary"
            element={<ItineraryForm onAddItinerary={addItinerary} />}
          />
          <Route
            path="/itinerary/:id"
            element={<ItineraryPage itineraries={itineraries} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
