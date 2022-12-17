import React from 'react';
import reactLogo from '../Images/Airbnb_Logo.png'

export default function Navbar() {
    return(
        <nav className='Navbar'>
            <img className='Logo' src={reactLogo}></img>
        </nav>
    )
  }