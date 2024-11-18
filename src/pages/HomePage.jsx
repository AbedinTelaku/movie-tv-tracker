import React, { useState } from 'react';
import HomePageComponent from '../components/HomePageComponent/HomePageComponent';
import HeaderPageComponent from "../components/HeaderComponent/HeaderPageComponent";
import FilmsComponent from '../components/ListOfFilmsComponent/FilmsComponent';
import Footer from './Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <HeaderPageComponent onSearch={setSearchTerm} />
      <HomePageComponent />
      <FilmsComponent searchTerm={searchTerm} />
      
    </div>
  );
};

export default HomePage;
