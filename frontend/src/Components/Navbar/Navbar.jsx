// Navbar.js
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setIsDropdownVisible(false);
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to='/' onClick={() => { setMenu("home"); setIsMenuOpen(false); }}><li className={menu === "home" ? "active" : ""}>Home</li></Link>
                <Link to='/products' onClick={() => { setMenu("shop_All"); setIsMenuOpen(false); }}><li className={menu === "shop_All" ? "active" : ""}>Shop All</li></Link>
                <Link to='/contact' onClick={() => { setMenu("contact"); setIsMenuOpen(false); }}><li className={menu === "contact" ? "active" : ""}>Contact Us</li></Link>
                <Link to='/about' onClick={() => { setMenu("about"); setIsMenuOpen(false); }}><li className={menu === "about" ? "active" : ""}>About Us</li></Link>
            </div>
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'><RiShoppingBag4Fill className='cart' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)} className='signin-btn'>Sign In</button>
                ) : (
                    <div className='navbar-profile' onClick={toggleDropdown}>
                        <FaRegUser />
                        <div className={`profile-dropdown ${isDropdownVisible ? 'visible' : ''}`}>
                            <ul>
                                <Link to='/dashboard'><li onClick={closeDropdown}>Profile</li></Link>
                                <li onClick={closeDropdown}>Settings</li>
                                <li onClick={() => { closeDropdown(); logout(); }}>Logout</li>
                            </ul>
                        </div>
                    </div>
                )}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;