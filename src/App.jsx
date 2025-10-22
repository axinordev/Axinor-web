import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutUs'
import Services from './components/Services'
import Products from './components/Products'
import Works from './components/Works'

const App = () => {
  return (
    <div className='relative overflow-visible'>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Services/>
      <Products/>
      <Works/>
    </div>
  )
}

export default App