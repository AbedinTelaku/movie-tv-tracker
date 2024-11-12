import React from 'react'
import HomeAlonePage from '../components/DubbingComponent/Films/HomeAlonePage';
import FooterComponent from '../components/Footer/FooterComponent';
import Header from './Header';


const Film = () => {
  return (
    <div>
      <Header/>
      <HomeAlonePage/>
      <FooterComponent/>
    </div>
  )
}

export default Film;