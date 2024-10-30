// src/components/Admin/FinancialManagement/TrackIncome.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem;
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

const IncomeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IncomeItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const TrackIncome = () => {
  const [income, setIncome] = useState({ amount: '', source: '' });
  const [incomes, setIncomes] = useState([]);

  const handleAddIncome = (e) => {
    e.preventDefault();
    setIncomes([...incomes, income]);
    setIncome({ amount: '', source: '' });
  };

  return (
    <Container>
      <Title>Track Income</Title>
      <Form onSubmit={handleAddIncome}>
        <Input
          type="text"
          placeholder="Source"
          value={income.source}
          onChange={(e) => setIncome({ ...income, source: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={income.amount}
          onChange={(e) => setIncome({ ...income, amount: e.target.value })}
        />
        <Button type="submit">Add Income</Button>
      </Form>
      <IncomeList>
        {incomes.map((inc, index) => (
          <IncomeItem key={index}>
            {inc.source} - ${inc.amount}
          </IncomeItem>
        ))}
      </IncomeList>
    </Container>
  );
};

export default TrackIncome;
