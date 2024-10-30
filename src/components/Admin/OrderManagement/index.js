// src/components/Admin/OrderManagement/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import AddOrder from './AddOrder';
import OrderList from './OrderList';
import OrderConfirmationManagement from '../OrderConfirmationManagement';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #f0f0f0;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-align: left;

  &:hover {
    background-color: #0056b3;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

const OrderManagement = () => {
  const [view, setView] = useState(""); //default veiw empty
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to hold the selected order

  // Function to add a new order
  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  // Function to handle reviewing an order
  const onReviewOrder = (order) => {
    setSelectedOrder(order);
    setView("review"); // Switch to the review view
  };

  return (
    <Container>
      <Sidebar>
        <h2>Order Management</h2>
        <SidebarButton onClick={() => setView("add")}>Add Order</SidebarButton>
        <SidebarButton onClick={() => setView("list")}>Order List</SidebarButton>
      </Sidebar>

      <Content>
        {view === "add" && <AddOrder addOrder={addOrder} />}
        {view === "list" && (
          <OrderList
            orders={orders}
            onReviewOrder={onReviewOrder} // Pass onReviewOrder function
          />
        )}
        {view === "review" && selectedOrder && (
          <OrderConfirmationManagement order={selectedOrder} />
        )}
      </Content>
    </Container>
  );
};

export default OrderManagement;
