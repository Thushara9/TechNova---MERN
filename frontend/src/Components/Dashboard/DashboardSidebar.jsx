import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, ShoppingCart, Settings } from 'lucide-react';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="user-profile">
        <User className="avatar" />
        <div className="user-info">
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/dashboard"><ShoppingCart /> My Orders</NavLink></li>
     
     
          <li><NavLink to="/dashboard/settings"><Settings /> Account Settings</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
