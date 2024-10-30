// src/components/Admin/InventoryManagement/MaterialInventory.js

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
const MaterialInventory = () => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    id: '',
    name: '',
    quantity: 0,
    status: 'Available',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [filter, setFilter] = useState({ name: '', status: '' });

  // Handle form inputs for new or editing material item
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMaterial((prev) => ({
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

  const openMenu = (event, material) => {
    setAnchorEl(event.currentTarget);
    setSelectedMaterial(material);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setSelectedMaterial(null);
  };

  const addMaterial = () => {
    setMaterials([...materials, { ...newMaterial, id: Date.now() }]);
    setNewMaterial({ id: '', name: '', quantity: 0, status: 'Available' });
  };

  const editMaterial = () => {
    setNewMaterial(selectedMaterial);
    setIsEditing(true);
    closeMenu();
  };

  const updateMaterial = () => {
    setMaterials(materials.map((mat) => (mat.id === newMaterial.id ? newMaterial : mat)));
    setNewMaterial({ id: '', name: '', quantity: 0, status: 'Available' });
    setIsEditing(false);
  };

  const deleteMaterial = (id) => {
    setMaterials(materials.filter((mat) => mat.id !== id));
    closeMenu();
  };

  // Apply filter based on name and status
  const filteredMaterials = materials.filter((material) =>
    (!filter.name || material.name.includes(filter.name)) &&
    (!filter.status || material.status.includes(filter.status))
  );

  return (
    <Container>
      <Title>Material Inventory</Title>

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
          name="status"
          value={filter.status}
          placeholder="Filter by Status"
          onChange={handleFilterChange}
        />
      </FilterContainer>

      {/* Material Inventory Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredMaterials.map((material) => (
            <TableRow key={material.id}>
              <TableCell>{material.name}</TableCell>
              <TableCell>{material.quantity}</TableCell>
              <TableCell>{material.status}</TableCell>
              <TableCell>
                <IconButton onClick={(e) => openMenu(e, material)}>
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
        <MenuItem onClick={editMaterial}>Edit</MenuItem>
        <MenuItem onClick={() => deleteMaterial(selectedMaterial.id)}>Delete</MenuItem>
      </Menu>

      {/* Add or Edit Material Form */}
      <h4>{isEditing ? 'Edit Material' : 'Add New Material'}</h4>
      <Input
        type="text"
        name="name"
        value={newMaterial.name}
        placeholder="Material Name"
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="quantity"
        value={newMaterial.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="status"
        value={newMaterial.status}
        placeholder="Status (e.g., Available)"
        onChange={handleChange}
        required
      />
      <Button onClick={isEditing ? updateMaterial : addMaterial}>
        {isEditing ? 'Update Material' : 'Add Material'}
      </Button>
    </Container>
  );
};

export default MaterialInventory;
