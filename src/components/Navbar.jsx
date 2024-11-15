import React, {useState} from 'react'
import { FaBars, FaFacebook,FaTwitter,FaYoutube, FaInstagram, FaPinterest, FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div >
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>EXPLORE HUB</h1>
        </div>
        <ul className='hidden md:flex'>
            <li><Link to="/" className="text-white-700 hover:text-gray-600">Explore</Link></li>
            <li><Link to="/plan-trip" className="text-white-700 hover:text-gray-600">Plan Trip</Link></li>
            <li><Link to="/ar-tours" className="text-white-700 hover:text-gray-600">AR Tours</Link></li>
            <li><Link to="/community" className="text-white-700 hover:text-gray-600">Community</Link></li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
        <FaBars className='mr-2' size={24} />
        <FaSearch size={20} />
        </div>

        {/*Hamburger*/}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={24}/>}
          
        </div>

        {/*Mobile menu dropdown*/}
        <div onClick={handleNav} className={nav ? 'absolute text-black  left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>EXPLORE HUB</h1>
            <li className='border-b'><Link to="/" className="text-white-700 hover:text-gray-600">Explore</Link></li>
            <li className='border-b'><Link to="/plan-trip" className="text-white-700 hover:text-gray-600">Plan Trip</Link></li>
            <li className='border-b'><Link to="/ar-tours" className="text-white-700 hover:text-gray-600">AR Tours</Link></li>
            <li className='border-b'><Link to="/community" className="text-white-700 hover:text-gray-600">Community</Link></li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
              <button className='my-6'>Search</button>
              <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaPinterest className='icon'/>
              <FaInstagram className='icon'/>
            </div>
          </ul>
        </div>
    </div>

  )
}

export default Navbar;
