// src/components/Admin/OrderManagement/AddOrder.js

import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

const AddOrderContainer = styled.div`
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const MeasurementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 0.8rem;
  border: 1px solid #ddd;
`;

const AddOrder = ({ addOrder }) => {
  const [order, setOrder] = useState({
    customerId: "",
    product: "",
    quantity: 1,
    addedBy: "Manual",
    dressType: "",
    fabric: "",
    color: "",
    material: "",
    measurements: {
      fullLength: "",
      shoulders: "",
      chest: "",
      sleeveLength: "",
      waist: "",
      waistLength: "",
      neck: "",
    },
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleMeasurementChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      measurements: {
        ...prevOrder.measurements,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { ...order, id: Date.now(), status: "Active" };
    addOrder(newOrder);
    setOrder({
      customerId: "",
      product: "",
      quantity: 1,
      addedBy: "Manual",
      dressType: "",
      fabric: "",
      color: "",
      material: "",
      measurements: {
        fullLength: "",
        shoulders: "",
        chest: "",
        sleeveLength: "",
        waist: "",
        waistLength: "",
        neck: "",
      },
      comments: "",
    });
  };

  return (
    <AddOrderContainer>
      <h3>Add Order</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Customer ID (optional for Manual):</Label>
        <Input type="text" name="customerId" value={order.customerId} onChange={handleInputChange} />

        <Label>Dress Type:</Label>
        <Select name="dressType" value={order.dressType} onChange={handleInputChange} required>
          <option value="">Select Dress Type</option>
          <option value="Shirt">Shirt</option>
          <option value="Suit">Suit</option>
          <option value="Skirt">Skirt</option>
          <option value="Dress">Dress</option>
        </Select>

        <Label>Fabric:</Label>
        <Select name="fabric" value={order.fabric} onChange={handleInputChange} required>
          <option value="">Select Fabric</option>
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Linen">Linen</option>
          <option value="Wool">Wool</option>
        </Select>

        <Label>Color:</Label>
        <Select name="color" value={order.color} onChange={handleInputChange} required>
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </Select>

        <Label>Material Type:</Label>
        <Input type="text" name="material" value={order.material} onChange={handleInputChange} required />

        <Label>Measurements:</Label>
        <MeasurementTable>
          <thead>
            <tr>
              <TableHeader>Customer ID</TableHeader>
              <TableHeader>Full Length</TableHeader>
              <TableHeader>Shoulders</TableHeader>
              <TableHeader>Chest</TableHeader>
              <TableHeader>Sleeve Length</TableHeader>
              <TableHeader>Waist</TableHeader>
              <TableHeader>Waist Length</TableHeader>
              <TableHeader>Neck</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell><Input type="text" name="customerId" value={order.customerId} onChange={handleInputChange} /></TableCell>
              <TableCell><Input type="text" name="fullLength" value={order.measurements.fullLength} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="shoulders" value={order.measurements.shoulders} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="chest" value={order.measurements.chest} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="sleeveLength" value={order.measurements.sleeveLength} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="waist" value={order.measurements.waist} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="waistLength" value={order.measurements.waistLength} onChange={handleMeasurementChange} /></TableCell>
              <TableCell><Input type="text" name="neck" value={order.measurements.neck} onChange={handleMeasurementChange} /></TableCell>
            </tr>
          </tbody>
        </MeasurementTable>

        <Label>Comments:</Label>
        <TextArea name="comments" value={order.comments} onChange={handleInputChange} placeholder="Design/color/upload sample design details" />

        <Button type="submit">Add Order</Button>
      </Form>
    </AddOrderContainer>
  );
};

export default AddOrder;
