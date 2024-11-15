import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularDestinations from '../components/PopularDestinations';
import CommunitySection from '../components/CommunitySection';
import Navbar from '../components/Navbar';
import Selects from '../components/Selects';
import SelectsCard from '../components/SelectsCard';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <PopularDestinations/>
      <Selects/>
      <SelectsCard/>
      <Carousel/>
      <CommunitySection/>
      
    </>
  );
};

export default Home;