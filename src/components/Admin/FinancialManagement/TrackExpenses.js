// src/components/Admin/FinancialManagement/TrackExpenses.js

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

const ExpenseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpenseItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const TrackExpenses = () => {
  const [expense, setExpense] = useState({ amount: '', description: '' });
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, expense]);
    setExpense({ amount: '', description: '' });
  };

  return (
    <Container>
      <Title>Track Expenses</Title>
      <Form onSubmit={handleAddExpense}>
        <Input
          type="text"
          placeholder="Description"
          value={expense.description}
          onChange={(e) => setExpense({ ...expense, description: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <Button type="submit">Add Expense</Button>
      </Form>
      <ExpenseList>
        {expenses.map((exp, index) => (
          <ExpenseItem key={index}>
            {exp.description} - ${exp.amount}
          </ExpenseItem>
        ))}
      </ExpenseList>
    </Container>
  );
};

export default TrackExpenses;
