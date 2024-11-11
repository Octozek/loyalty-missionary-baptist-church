// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatWeBelieve from './pages/WhatWeBelieve/WhatWeBelieve';
import HowToKnowGod from './pages/HowToKnowGod/HowToKnowGod';
import Baptism from './pages/Baptism/Baptism';
import Membership from './pages/Membership/Membership';
import Serving from './pages/Serving/Serving';
import SmallGroups from './pages/SmallGroups/SmallGroups';
import Discipleship from './pages/Discipleship/Discipleship'; // Import Discipleship component
import HomePage from './pages/HomePage/HomePage';
import Location from './pages/Location/Location';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/what-we-believe" element={<WhatWeBelieve />} />
        <Route path="/get-started/how-to-know-god" element={<HowToKnowGod />} />
        <Route path="/get-started/baptism" element={<Baptism />} />
        <Route path="/get-started/membership" element={<Membership />} />
        <Route path="/get-started/serving" element={<Serving />} />
        <Route path="/get-started/small-groups" element={<SmallGroups />} />
        <Route path="/get-started/discipleship" element={<Discipleship />} /> {/* Add Discipleship route */}
        <Route path="/about/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
