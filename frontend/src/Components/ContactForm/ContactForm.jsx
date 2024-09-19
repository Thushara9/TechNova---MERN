import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './ContactForm.css';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      inquiry: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .matches(
          /^[^\s@]/,
          'Invalid email address'
        )
        .required('Required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number')
        .required('Required'),
      inquiry: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      axios.post('http://localhost:4000/api/message/send_message', values)
        .then(response => {
          if (response.data.success) {
            toast.success('Message Sent Successfully!');
          } else {
            toast.error('Error sending message');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('Error sending message');
        });
    },
  });

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Send us your message</h2>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className='inputts'
              type="text"
              id="name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div style={{ color: 'red', fontSize: '15px' }} className="error-message">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className='inputts'
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red', fontSize: '15px' }} className="error-message">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input className='inputts'
              type="tel"
              id="mobile"
              {...formik.getFieldProps('mobile')}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <div style={{ color: 'red', fontSize: '15px' }} className="error-message">{formik.errors.mobile}</div>
            )}
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="inquiry">Inquiry Type</label>
            <select
              id="inquiry"
              {...formik.getFieldProps('inquiry')}
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            {formik.touched.inquiry && formik.errors.inquiry && (
              <div style={{ color: 'red', fontSize: '15px' }} className="error-message">{formik.errors.inquiry}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...formik.getFieldProps('message')}
              rows="5"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div style={{ color: 'red', fontSize: '15px' }} className="error-message">{formik.errors.message}</div>
            )}
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
