//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ParticlesBackground from './components/ParticlesBackground'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <ParticlesBackground></ParticlesBackground>
      <HomePage id="home"></HomePage>
      <AboutPage id="about"></AboutPage>
    </>
  )
}

export default App
