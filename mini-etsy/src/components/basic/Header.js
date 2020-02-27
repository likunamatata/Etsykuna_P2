import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1>Etsykuna</h1>
      <div className='links'>
        <NavLink className='navlink' to='/'>Home</NavLink>
        <NavLink className='navlink' to='/Browse'>Browse</NavLink>
        <NavLink className='navlink' to='/Notes'>Notes</NavLink>
      </div>
    </div>
  )
}

export default Header;