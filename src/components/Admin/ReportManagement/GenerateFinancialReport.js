// src/components/Admin/ReportManagement/GenerateFinancialReport.js

import React from 'react';
import styled from 'styled-components';

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
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

const GenerateFinancialReport = () => {
  return (
    <Container>
      <Title>Generate Financial Report</Title>
      <Form>
        <Label>Start Date:</Label>
        <Input type="date" />

        <Label>End Date:</Label>
        <Input type="date" />

        <Button type="submit">Generate Report</Button>
      </Form>
    </Container>
  );
};

export default GenerateFinancialReport;
