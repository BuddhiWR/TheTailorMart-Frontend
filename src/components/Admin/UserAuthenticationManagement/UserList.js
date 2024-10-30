// src/components/Admin/UserAuthenticationManagement/UserList.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "Editor", status: "Inactive" },
    // Additional sample users
  ]);

  return (
    <div>
      <h3>User List</h3>
      <TextField label="Search by name" variant="outlined" fullWidth style={{ marginBottom: "1rem" }} />
      <TableContainer component={Paper}>
        <Table aria-label="user list table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small">Edit</Button>
                  <Button variant="contained" color="secondary" size="small" style={{ marginLeft: "0.5rem" }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
