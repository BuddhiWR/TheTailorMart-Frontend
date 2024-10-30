// src/components/Admin/OrderConfirmationManagement/GenerateInvoice.js

import React from 'react';
import styled from 'styled-components';

// Styled components
const InvoiceContainer = styled.div`
  padding: 2rem;
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

const InvoiceDetails = styled.div`
  margin: 1.5rem 0;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`;

const TotalRow = styled(DetailRow)`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
  display: block;
  width: 100%;

  &:hover {
    background-color: #218838;
  }
`;



const GenerateInvoice = ({ order = {}, sendInvoice, addInvoiceSummary }) => {
  const unitPrice = 100; // Example unit price
  const subtotal = unitPrice * order.quantity;
  const taxRate = 0.15; // Example tax rate (15%)
  const tax = subtotal * taxRate;
  const totalPrice = subtotal + tax;

  // Send the invoice and store the summary
  const handleSendInvoice = () => {
    sendInvoice(order);
    addInvoiceSummary({
      id: order.id,
      product: order.product,
      quantity: order.quantity,
      totalPrice: totalPrice.toFixed(2),
    });
  };

  return (
    <InvoiceContainer>
      <Title>Invoice for Order #{order.id || 'N/A'}</Title>
      <InvoiceDetails>
        <DetailRow>
          <span>Product:</span> <span>{order.product || 'Unknown'}</span>
        </DetailRow>
        <DetailRow>
          <span>Quantity:</span> <span>{order.quantity || 0}</span>
        </DetailRow>
        <DetailRow>
          <span>Unit Price:</span> <span>${unitPrice.toFixed(2)}</span>
        </DetailRow>
        <DetailRow>
          <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
        </DetailRow>
        <DetailRow>
          <span>Tax (15%):</span> <span>${tax.toFixed(2)}</span>
        </DetailRow>
        <TotalRow>
          <span>Total Price:</span> <span>${totalPrice.toFixed(2)}</span>
        </TotalRow>
      </InvoiceDetails>
      <Button onClick={handleSendInvoice}>Send Invoice to Customer</Button>
    </InvoiceContainer>
  );
};

export default GenerateInvoice;
