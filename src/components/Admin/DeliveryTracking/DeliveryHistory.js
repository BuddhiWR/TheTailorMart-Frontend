// src/components/Admin/DeliveryTracking/DeliveryHistory.js

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

const DeliveryHistory = () => {
  const [completedDeliveries] = useState([
    { id: 1, customer: "Alice", deliveryDate: "2023-11-01", status: "Delivered", notes: "On time" },
    { id: 2, customer: "Bob", deliveryDate: "2023-10-25", status: "Delivered", notes: "Customer not available initially" },
    { id: 3, customer: "Charlie", deliveryDate: "2023-10-20", status: "Delivered", notes: "Delivered to alternate address" },
    // Additional sample entries can be added here
  ]);

  return (
    <Container>
      <Title>Delivery History</Title>

      <Table>
        <thead>
          <tr>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Delivery Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Notes</TableHeader>
          </tr>
        </thead>
        <tbody>
          {completedDeliveries.length > 0 ? (
            completedDeliveries.map((delivery) => (
              <TableRow key={delivery.id}>
                <TableCell>{delivery.customer}</TableCell>
                <TableCell>{delivery.deliveryDate}</TableCell>
                <TableCell>{delivery.status}</TableCell>
                <TableCell>{delivery.notes}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" style={{ textAlign: 'center' }}>
                No completed deliveries found
              </TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default DeliveryHistory;
