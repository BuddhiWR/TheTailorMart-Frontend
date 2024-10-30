// src/components/Admin/InventoryManagement/SupplierInventory.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled components for layout and styling
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

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  margin-top: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.edit ? '#ffc107' : props.delete ? '#dc3545' : '#28a745')};

  &:hover {
    background-color: ${(props) => (props.edit ? '#e0a800' : props.delete ? '#c82333' : '#218838')};
  }
`;

// Main Component
const SupplierInventory = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({
    id: '',
    name: '',
    location: '',
    contact: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [filter, setFilter] = useState({ name: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openMenu = (event, supplier) => {
    setAnchorEl(event.currentTarget);
    setSelectedSupplier(supplier);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setSelectedSupplier(null);
  };

  const addSupplier = () => {
    setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);
    setNewSupplier({ id: '', name: '', location: '', contact: '' });
  };

  const editSupplier = () => {
    setNewSupplier(selectedSupplier);
    setIsEditing(true);
    closeMenu();
  };

  const updateSupplier = () => {
    setSuppliers(suppliers.map((sup) => (sup.id === newSupplier.id ? newSupplier : sup)));
    setNewSupplier({ id: '', name: '', location: '', contact: '' });
    setIsEditing(false);
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter((sup) => sup.id !== id));
    closeMenu();
  };

  const filteredSuppliers = suppliers.filter((supplier) =>
    (!filter.name || supplier.name.toLowerCase().includes(filter.name.toLowerCase())) &&
    (!filter.location || supplier.location.toLowerCase().includes(filter.location.toLowerCase()))
  );

  return (
    <Container>
      <Title>Supplier Inventory</Title>

      {/* Filter Inputs */}
      <FilterContainer>
        <Input
          type="text"
          name="name"
          value={filter.name}
          placeholder="Filter by Name"
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="location"
          value={filter.location}
          placeholder="Filter by Location"
          onChange={handleFilterChange}
        />
      </FilterContainer>

      {/* Supplier Inventory Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Location</TableHeader>
            <TableHeader>Contact</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.location}</TableCell>
              <TableCell>{supplier.contact}</TableCell>
              <TableCell>
                <IconButton onClick={(e) => openMenu(e, supplier)}>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* Menu for Edit/Delete Actions */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={editSupplier}>Edit</MenuItem>
        <MenuItem onClick={() => deleteSupplier(selectedSupplier.id)}>Delete</MenuItem>
      </Menu>

      {/* Add or Edit Supplier Form */}
      <h4>{isEditing ? 'Edit Supplier' : 'Add New Supplier'}</h4>
      <Input
        type="text"
        name="name"
        value={newSupplier.name}
        placeholder="Supplier Name"
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="location"
        value={newSupplier.location}
        placeholder="Location"
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="contact"
        value={newSupplier.contact}
        placeholder="Contact"
        onChange={handleChange}
        required
      />
      <Button onClick={isEditing ? updateSupplier : addSupplier}>
        {isEditing ? 'Update Supplier' : 'Add Supplier'}
      </Button>
    </Container>
  );
};

export default SupplierInventory;
