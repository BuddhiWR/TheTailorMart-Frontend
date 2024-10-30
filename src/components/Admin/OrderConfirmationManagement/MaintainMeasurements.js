// src/components/Admin/OrderConfirmationManagement/MaintainMeasurements.js

import React, { useState } from 'react';
import styled from 'styled-components';

const MeasurementsContainer = styled.div`
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
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MaintainMeasurements = ({ saveMeasurements }) => {
  const [measurements, setMeasurements] = useState({
    fullLength: '',
    shoulders: '',
    chest: '',
    sleeveLength: '',
    waist: '',
    waistLength: '',
    neck: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMeasurements(measurements);
    alert('Measurements saved');
  };

  return (
    <MeasurementsContainer>
      <Title>Maintain Measurements</Title>
      <Form onSubmit={handleSubmit}>
        {Object.keys(measurements).map((field) => (
          <div key={field}>
            <Label>{field}</Label>
            <Input name={field} value={measurements[field]} onChange={handleChange} />
          </div>
        ))}
        <Button type="submit">Save Measurements</Button>
      </Form>
    </MeasurementsContainer>
  );
};

export default MaintainMeasurements;
