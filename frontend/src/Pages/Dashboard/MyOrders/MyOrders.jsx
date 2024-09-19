import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../../Components/Context/StoreContext';
import axios from 'axios';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h1>My Orders</h1>
      <div className='order-list'>
        {data.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-header">
              <p className="order-number">Order #{order._id.slice(-8).toUpperCase()}</p>
              <p className={`order-status ${order.status.toLowerCase()}`}>{order.status}</p>
            </div>
            <div className="order-body">
              <p className="order-items">
                {order.items.map((item, index) => (
                  index === order.items.length - 1 ? item.name +" "+ "×"+ " " + item.quantity : item.name +" "+ "×" +" " + item.quantity + ", "
                ))}
              </p>
              <p className="order-amount">Total: Rs. {order.amount.toFixed(2)}</p>
            </div>
            <div className="order-footer">
            <p className='order-date'>{new Date(order.date).toLocaleString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
  hour12: true 
})}</p>
              <button onClick={fetchOrders} className="track-order-btn">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
