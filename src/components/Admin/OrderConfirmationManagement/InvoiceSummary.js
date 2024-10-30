// src/components/Admin/OrderConfirmationManagement/InvoiceSummary.js

import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const InvoiceSummary = ({ summaries }) => (
  <SummaryContainer>
    <Title>Invoice Summaries</Title>
    <Table>
      <thead>
        <tr>
          <TableHeader>Order ID</TableHeader>
          <TableHeader>Product</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Total Price</TableHeader>
        </tr>
      </thead>
      <tbody>
        {summaries.map((summary, index) => (
          <TableRow key={index}>
            <TableCell>{summary.id}</TableCell>
            <TableCell>{summary.product}</TableCell>
            <TableCell>{summary.quantity}</TableCell>
            <TableCell>${summary.totalPrice}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </SummaryContainer>
);

export default InvoiceSummary;
