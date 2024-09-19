import React from 'react';

import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
  <Sidebar/>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
