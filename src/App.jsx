import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dubbing from './pages/Dubbing';
import Faq from './pages/Faq';
import Team from './pages/Team';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomeAlonePage from './components/DubbingComponent/Films/HomeAlone/HomeAlonePage';
import MoanaPage from './components/DubbingComponent/Films/Moana/MoanaPage';
import KungFuPandaPage from './components/DubbingComponent/Films/Panda/PandaPage';
import CarsPage from './components/DubbingComponent/Films/Cars/CarsPage';
import HotelTransylvania1Page from './components/DubbingComponent/Films/HotelTransylvania1/HotelTransylvania1Page';
import ArthursChristmasPage from './components/DubbingComponent/Films/ArthursChristmas/ArthursChristmasPage';
import HomePageFilm from './components/DubbingComponent/Films/Home/HomePageFilm';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dubbing" element={<Dubbing />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/team" element={<Team />} />
      <Route path="/home-alone" element={<HomeAlonePage/>} />
      <Route path="/moana" element={ <MoanaPage/>} />
      <Route path="/panda" element={ <KungFuPandaPage/>} />
      <Route path="/cars" element={ <CarsPage/>} />
      <Route path="/hotel-transylvania-1" element={ <HotelTransylvania1Page/>} />
      <Route path="/arthurs-christmas" element={ <ArthursChristmasPage/>} />
      <Route path="/home-film" element={ <HomePageFilm/>} />


      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
