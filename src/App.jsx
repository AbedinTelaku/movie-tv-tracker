import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Actor from './pages/Actor';
import Faq from './pages/Faq';
import Team from './pages/Team';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/actors" element={<Actor/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/team" element={<Team/>} />
    </Routes>
  );
}

export default App;
