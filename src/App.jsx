import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dubbing from './pages/Dubbing';
import Faq from './pages/Faq';
import Team from './pages/Team';
import HomeAlonePage from './components/DubbingComponent/Films/HomeAlonePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dubbing" element={<Dubbing />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/team" element={<Team />} />
      <Route path="/home-alone" element={<HomeAlonePage/>} />
    </Routes>
  );
}

export default App;
