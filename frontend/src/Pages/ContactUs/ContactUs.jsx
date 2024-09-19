import React from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../../Components/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>123 Main St, Anytown, Bambalapitiya</p>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>(555) 123-4567</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>info@technova.com</p>
          </div>
          <div className="contact-item">
            <FaClock className="icon" />
            <p>Monday - Friday, 9am - 5pm</p>
          </div>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9099.725071580591!2d79.84914652378781!3d6.904185127834023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596129993bdd%3A0x73d843317f8fe8b5!2sBambalapitiya%2C%20Colombo!5e0!3m2!1sen!2slk!4v1725128602434!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps location of our office"
          ></iframe>

          
        </div>
      </div>
      <hr />
      <ContactForm />
    </>
  );
};

export default ContactUs;
