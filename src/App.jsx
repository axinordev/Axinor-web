import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutUs'
import Services from './components/Services'

const App = () => {
  return (
    <div className='relative overflow-visible'>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Services/>
    </div>
  )
}

export default App