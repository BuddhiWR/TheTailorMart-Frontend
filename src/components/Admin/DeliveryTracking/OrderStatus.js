// src/components/Admin/DeliveryTracking/OrderStatus.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TableHeader = styled.th`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 0.8rem;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.2rem;

  &:hover {
    background-color: #218838;
  }
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const OrderStatus = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Alice", product: "Shirt", status: "Pending" },
    { id: 2, customer: "Bob", product: "Jacket", status: "Shipped" },
    { id: 3, customer: "Charlie", product: "Pants", status: "Delivered" },
  ]);

  const [filter, setFilter] = useState("All");

  const updateOrderStatus = (id, status) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  const filteredOrders = filter === "All" ? orders : orders.filter(order => order.status === filter);

  return (
    <Container>
      <Title>Order Status</Title>
      
      <FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Orders</option>
        <option value="Pending">Pending</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
      </FilterSelect>
      
      <Table>
        <thead>
          <tr>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Product</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                {order.status !== "Delivered" && (
                  <>
                    <Button onClick={() => updateOrderStatus(order.id, "Shipped")}>Mark as Shipped</Button>
                    <Button onClick={() => updateOrderStatus(order.id, "Delivered")}>Mark as Delivered</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderStatus;
