import React from 'react';
import reactLogo from '../Images/logo192.png'

export default function Navbar() {
    return(
        <nav className='Navbar'>
            <img className='Logo' src={reactLogo}></img>
            <h3 className='NavbarTitle'>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
  }