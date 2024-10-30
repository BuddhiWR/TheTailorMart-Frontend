import React, { useState } from 'react';
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

const Select = styled.select`
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

const GenerateCustomerReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');
  const [reportType, setReportType] = useState('Summary');
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate report generation
    setTimeout(() => {
      console.log('Generating report for:', { startDate, endDate, category, reportType });
      setLoading(false);
      alert('Report generated successfully');
    }, 1000);
  };

  return (
    <Container>
      <Title>Generate Customer Report</Title>
      <Form onSubmit={handleGenerateReport}>
        <Label>Start Date:</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <Label>End Date:</Label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <Label>Customer Category:</Label>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="VIP">VIP</option>
          <option value="Regular">Regular</option>
          <option value="New">New</option>
        </Select>

        <Label>Report Type:</Label>
        <Select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="Summary">Summary</option>
          <option value="Detailed">Detailed</option>
        </Select>

        <Button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Report'}
        </Button>
      </Form>
    </Container>
  );
};

export default GenerateCustomerReport;
