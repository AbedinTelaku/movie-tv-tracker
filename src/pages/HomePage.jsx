import React from 'react'
import HomePageComponent from '../components/HomePageComponent/HomePageComponent'
import HeaderPageComponent from "../components/HeaderComponent/HeaderPageComponent"
import Films from './Films'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <HeaderPageComponent />
      <HomePageComponent />
      <Films/>
      <Footer/>
    </div>
  )
}

export default HomePage