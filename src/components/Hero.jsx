import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover Your Next</span>
            <span className="block">Adventure</span>
          </h1>
          <p className="mt-3 max-w-md py-4 mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore destinations, create personalized itineraries, and connect with fellow travelers.
            Your journey begins here.
          </p>

            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 
            rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font=[Poppins] rounded text-gray-900 focus:outline-none' type="text" placeholder='Where would you go?' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon ' style={{color: '#ffffff'}} /></button>
                </div>
            </form>
        </div>
        </div>

    </div>

  )
}

export default Hero
