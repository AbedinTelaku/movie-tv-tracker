import React from 'react'
import HomePageComponent from '../components/HomePageComponent/HomePageComponent'
import HeaderPageComponent from "../components/HeaderComponent/HeaderPageComponent"
import Films from './Films'

const HomePage = () => {
  return (
    <div>
      <HeaderPageComponent />
      <HomePageComponent />
      <Films/>
    </div>
  )
}

export default HomePage