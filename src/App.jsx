import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import TripPlanner from './pages/TripPlanner';
import Community from './pages/Community';
import ArTours from './pages/ArTours';
import Footer from './components/Footer'

//import { Router } from 'lucide-react' 

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan-trip" element={<TripPlanner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ar-tours" element={<ArTours />} />
        </Routes>
        {/*}
        <Hero/>
        <Features/>
        <PopularDestinations/>
        <Selects/>
        <SelectsCard/>
        <Carousel/>*/}
        <Footer/>
      </div>
    </Router>
    
  )
}

export default App
