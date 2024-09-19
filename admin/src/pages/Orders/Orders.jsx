import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import './Orders.css';

const Orders = () => {
  const url = "http://localhost:4000";
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId, status: event.target.value
    })
    if (response.data.success) {

      await fetchAllOrders();
    }
  }



  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="orders">
      <h2>My Orders</h2>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-item-header">
              <div className="order-id">
                <p>Order ID: <span>{order._id.slice(-8).toUpperCase()}</span> </p>
              </div>
              <div className={`order-status ${order.status.toLowerCase()}`}>
                <span>{order.status}</span>
              </div>
            </div>
            <div className="order-item-body">
              <div className="order-details">
                <p className="order-products">
                  {order.items.map((item, index) => (
                    index === order.items.length - 1 ? item.name + " × " + item.quantity : item.name + " × " + item.quantity + ", "
                  ))}
                </p>
                <p className="order-name">{order.address.firstName + " " + order.address.lastName}</p>
                <p className="order-address">{order.address.address}, {order.address.country} - {order.address.postalCode}</p>
                <p className="order-phone">{order.address.phoneNumber}</p>
              </div>
              <div className="order-meta">
                <p>Items: {order.items.length}</p>
                <p>Total: Rs. {order.amount.toFixed(2)}</p>
                <p>{new Date(order.date).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true
                })}</p>

                <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="order-status-select">
                  <option value="Order Processing">Order Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
