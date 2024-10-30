// src/components/Admin/CustomerManagement/CustomerHistory.js
//purpose of customer history is issue loyalty card

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography } from '@mui/material';

const CustomerHistory = () => {
  const [filters, setFilters] = useState({
    customerId: '',
    customerName: '',
    date: '',
    description: '',
    amount: ''
  });

  // Initialize example data as the state for `history`
  const [history] = useState([
    { customerId: 'C001', customerName: 'John Doe', date: '2024-01-10', description: 'Purchase of 3 items', amount: '$150' },
    { customerId: 'C002', customerName: 'Jane Smith', date: '2024-02-15', description: 'Purchase of 1 item', amount: '$50' },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredHistory = history.filter((entry) =>
    Object.keys(filters).every(
      (key) => entry[key]?.toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: '0 auto', padding: 3, boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>Customer History</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label="Filter by ID"
                variant="outlined"
                size="small"
                fullWidth
                name="customerId"
                value={filters.customerId}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Name"
                variant="outlined"
                size="small"
                fullWidth
                name="customerName"
                value={filters.customerName}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Date"
                variant="outlined"
                size="small"
                fullWidth
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Description"
                variant="outlined"
                size="small"
                fullWidth
                name="description"
                value={filters.description}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Amount"
                variant="outlined"
                size="small"
                fullWidth
                name="amount"
                value={filters.amount}
                onChange={handleFilterChange}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Customer ID</strong></TableCell>
            <TableCell><strong>Customer Name</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Amount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredHistory.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.customerId}</TableCell>
              <TableCell>{entry.customerName}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.description}</TableCell>
              <TableCell>{entry.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerHistory;
