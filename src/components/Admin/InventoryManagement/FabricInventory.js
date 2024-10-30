// src/components/Admin/InventoryManagement/FabricInventory.js

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
const FabricInventory = () => {
  const [fabrics, setFabrics] = useState([]);
  const [newFabric, setNewFabric] = useState({
    id: '',
    type: '',
    color: '',
    quantity: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [filter, setFilter] = useState({ type: '', color: '' });

  // Handle form inputs for new or editing fabric item
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFabric((prev) => ({
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

  const openMenu = (event, fabric) => {
    setAnchorEl(event.currentTarget);
    setSelectedFabric(fabric);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setSelectedFabric(null);
  };

  const addFabric = () => {
    setFabrics([...fabrics, { ...newFabric, id: Date.now() }]);
    setNewFabric({ id: '', type: '', color: '', quantity: 0 });
  };

  const editFabric = () => {
    setNewFabric(selectedFabric);
    setIsEditing(true);
    closeMenu();
  };

  const updateFabric = () => {
    setFabrics(fabrics.map((fab) => (fab.id === newFabric.id ? newFabric : fab)));
    setNewFabric({ id: '', type: '', color: '', quantity: 0 });
    setIsEditing(false);
  };

  const deleteFabric = (id) => {
    setFabrics(fabrics.filter((fab) => fab.id !== id));
    closeMenu();
  };

  // Apply filter based on type and color
  const filteredFabrics = fabrics.filter((fabric) =>
    (!filter.type || fabric.type.includes(filter.type)) &&
    (!filter.color || fabric.color.includes(filter.color))
  );

  return (
    <Container>
      <Title>Fabric Inventory</Title>

      {/* Filter Inputs */}
      <FilterContainer>
        <Input
          type="text"
          name="type"
          value={filter.type}
          placeholder="Filter by Type"
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="color"
          value={filter.color}
          placeholder="Filter by Color"
          onChange={handleFilterChange}
        />
      </FilterContainer>

      {/* Fabric Inventory Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Type</TableHeader>
            <TableHeader>Color</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredFabrics.map((fabric) => (
            <TableRow key={fabric.id}>
              <TableCell>{fabric.type}</TableCell>
              <TableCell>{fabric.color}</TableCell>
              <TableCell>{fabric.quantity}</TableCell>
              <TableCell>
                <IconButton onClick={(e) => openMenu(e, fabric)}>
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
        <MenuItem onClick={editFabric}>Edit</MenuItem>
        <MenuItem onClick={() => deleteFabric(selectedFabric.id)}>Delete</MenuItem>
      </Menu>

      {/* Add or Edit Fabric Form */}
      <h4>{isEditing ? 'Edit Fabric' : 'Add New Fabric'}</h4>
      <Input
        type="text"
        name="type"
        value={newFabric.type}
        placeholder="Type (e.g., Cotton)"
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="color"
        value={newFabric.color}
        placeholder="Color (e.g., Blue)"
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="quantity"
        value={newFabric.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        required
      />
      <Button onClick={isEditing ? updateFabric : addFabric}>
        {isEditing ? 'Update Fabric' : 'Add Fabric'}
      </Button>
    </Container>
  );
};

export default FabricInventory;
