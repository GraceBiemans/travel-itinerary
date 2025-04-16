import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ItineraryForm from './components/ItineraryForm';
import ItineraryPage from './components/ItineraryPage';
import SharedItinerary from './components/SharedItinerary';

function App() {
  const [itineraries, setItineraries] = useState(() => {
    // Load itineraries from localStorage if available
    const saved = localStorage.getItem('itineraries');
    return saved ? JSON.parse(saved) : [];
  });

  // Generate a unique ID
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const addItinerary = (newItinerary) => {
    const itineraryWithId = {
      ...newItinerary,
      id: generateUniqueId()
    };
    const updatedItineraries = [...itineraries, itineraryWithId];
    setItineraries(updatedItineraries);
    // Save to localStorage
    localStorage.setItem('itineraries', JSON.stringify(updatedItineraries));
  };

  const getItineraryById = (id) => {
    return itineraries.find(itinerary => itinerary.id === id);
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
          <Route
            path="/share/:id"
            element={<SharedItinerary itineraries={itineraries} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
