import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a company dedicated to creating amazing web experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@technova.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link">Facebook</a>
            <a href="https://twitter.com" className="social-link">Twitter</a>
            <a href="https://instagram.com" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Technova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
