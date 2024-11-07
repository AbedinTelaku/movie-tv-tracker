import React from 'react'
import FilmsComponent from '../components/ListOfFilmsComponent/FilmsComponent';
import Footer from './Footer';
import Header from './Header';

const Films = () => {
  return (
    <div>
      <Header/>
      <FilmsComponent/>
      <Footer/>
    </div>
    )
}

export default Films;
