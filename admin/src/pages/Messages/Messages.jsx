import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Messages = () => {
  const url = "http://localhost:4000";
  const [messageList, setMessageList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/message/message_list`);
      if (response.data.success) {
        setMessageList(response.data.data);
      } else {
        toast.error("Error fetching message list");
      }
    } catch (error) {
      console.error("Error fetching message list:", error);
      toast.error("Error fetching message list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="msg-container">
      <h1 className="msg-title">Customer Inquiries</h1>
      <div className="msg-table-wrapper">
        <table className="msg-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Inquiry Type</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messageList.map((item, index) => (
              <tr key={index} className="msg-row">
            <td>{new Date(item.date).toLocaleString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.inquiry}</td>                                         
                <td>{item.message}</td>





              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
