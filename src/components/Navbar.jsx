import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20'>
        <div>
            <h1>BEACHES.</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
    </div>
  )
}

export default Navbar
