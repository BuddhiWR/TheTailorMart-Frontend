// src/components/Admin/CustomerManagement/CustomerList.js

import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-align: left;
  border: 1px solid #ddd;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.3rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 0.9rem;
  color: white;
  background-color: ${(props) => (props.cancel ? '#dc3545' : '#007bff')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.cancel ? '#c82333' : '#0056b3')};
  }
`;



const CustomerList = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      customerID: "C001",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City",
      gender: "Male",
    },
    {
      id: 2,
      customerID: "C002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Oak St, City",
      gender: "Female",
    },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = (event, customer) => {
    setAnchorEl(event.currentTarget);
    setSelectedCustomer({ ...customer });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
    handleMenuClose();
  };

  const handleDelete = () => {
    setCustomers(customers.filter((customer) => customer.id !== selectedCustomer.id));
    handleMenuClose();
  };

  const handleSave = () => {
    setCustomers(
      customers.map((customer) =>
        customer.id === selectedCustomer.id ? selectedCustomer : customer
      )
    );
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  return (
    <ListContainer>
      <Title>Customer List</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Customer ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.customerID}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.gender}</TableCell>
              <TableCell>
                <IconButton onClick={(event) => handleMenuClick(event, customer)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* Modal for editing customer information */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Edit Customer</ModalTitle>
            <form>
              <Label>Customer ID</Label>
              <Input
                type="text"
                name="customerID"
                value={selectedCustomer.customerID}
                onChange={handleInputChange}
              />
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={selectedCustomer.name}
                onChange={handleInputChange}
              />
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={selectedCustomer.email}
                onChange={handleInputChange}
              />
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={selectedCustomer.phone}
                onChange={handleInputChange}
              />
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                value={selectedCustomer.address}
                onChange={handleInputChange}
              />
              <Label>Gender</Label>
              <Select
                name="gender"
                value={selectedCustomer.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </form>
            <ModalButton onClick={handleSave}>Save</ModalButton>
            <ModalButton cancel onClick={() => setIsModalOpen(false)}>Cancel</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ListContainer>
  );
};

export default CustomerList;
