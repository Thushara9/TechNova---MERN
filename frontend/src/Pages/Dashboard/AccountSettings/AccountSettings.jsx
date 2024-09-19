import React from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <h1>Account Settings</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" defaultValue="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue="john.doe@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input type="password" id="confirm-password" />
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;