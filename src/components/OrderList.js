// To display list of orders

import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';


const OrderList = () => {
    console.log("Rendering OrderList");

    
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => {
      setOrders(response.data);
    }).catch((error) => {
      console.error("There was an error fetching the orders!", error);
    });
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      {orders.length === 0 ? ( // Check if there are orders to display
        <p>No orders available.</p>
      ) : (
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default OrderList;
