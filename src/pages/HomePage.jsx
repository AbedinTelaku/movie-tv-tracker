import React, { useState } from 'react';
import HomePageComponent from '../components/HomePageComponent/HomePageComponent';
import HeaderPageComponent from "../components/HeaderComponent/HeaderPageComponent";
import FilmsComponent from '../components/ListOfFilmsComponent/FilmsComponent';
import Footer from './Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  return (
    <div>
      <HeaderPageComponent onSearch={setSearchTerm} />  {/* Pass setSearchTerm as onSearch */}
      <HomePageComponent />    {/* Main homepage content */}
      <FilmsComponent searchTerm={searchTerm} />       {/* Pass searchTerm to FilmsComponent */}
      <Footer />               {/* Footer at the bottom */}
    </div>
  );
};

export default HomePage;
