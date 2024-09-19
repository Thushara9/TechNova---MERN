import React from 'react'
import './Navbar.css'; 
import { assets } from '../../assets/assets'
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <FaRegUser  className='profile'/>
      
    </div>
  )
}

export default Navbar
