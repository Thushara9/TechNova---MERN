import React from 'react';
import { BiTask } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { CiLogin } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import {NavLink} from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <RxAvatar className="avatar" />
        <div className="user-info">
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
        </div>
      </div>
      <nav>
        <ul>
         <NavLink to ='/orders'> <li className='sidebar-option'><BiTask className="icon" /> Orders</li></NavLink>
         <NavLink to ='/list'> <li className='sidebar-option'><FaRegListAlt className="icon" /> Product List</li></NavLink>
         <NavLink to ='/add'><li className='sidebar-option'><MdOutlineAddToPhotos className="icon" /> Add</li></NavLink>
         <NavLink to ='/messages'><li className='sidebar-option'><MdOutlineFeedback className="icon" />Messages</li></NavLink>
        </ul>
      </nav>
      <div className="logout-container">
        <button className="logout-button"><CiLogin className="icon" /> Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
