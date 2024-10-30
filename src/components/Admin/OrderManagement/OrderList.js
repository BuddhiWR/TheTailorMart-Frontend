// src/components/Admin/OrderManagement/OrderList.js

import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ListContainer = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  text-align: left;
`;

const OrderList = ({ orders, onReviewOrder }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleMenuClick = (event, order) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrder(order);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrder(null);
  };

  const handleReviewOrder = () => {
    if (selectedOrder) {
      onReviewOrder(selectedOrder); // Call onReviewOrder with the selected order
    }
    handleMenuClose();
  };

  return (
    <ListContainer>
      <h3>Order List</h3>
      <Table>
        <thead>
          <tr>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Product</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <IconButton onClick={(event) => handleMenuClick(event, order)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => alert("Order action: Reviwing")}>Review</MenuItem>
                  <MenuItem onClick={() => alert("Order action: On Hold")}>
                    On Hold
                  </MenuItem>
                  <MenuItem onClick={() => alert("Order action: Completed")}>
                    Completed
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ListContainer>
  );
};

export default OrderList;
