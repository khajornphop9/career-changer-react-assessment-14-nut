import React from 'react'
import '../assets/style/navbar.css'


const Navbar = () => {
  return (
   <ul className='navbar-ul'>
    <li className='navbar-li'><a className='navbar-a' href={'/owner'}>Owner</a></li>
    <li className='navbar-li'><a className='navbar-a' href={'/'}>Home</a></li>
   </ul>
  )
}

export default Navbar