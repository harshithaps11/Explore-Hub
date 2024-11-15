import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Selects from './components/Selects'
import SelectsCard from './components/SelectsCard'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Selects/>
      <SelectsCard/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default App
