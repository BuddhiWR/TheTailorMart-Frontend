// src/components/Admin/DeliveryTracking/DeliverySchedules.js

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

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  background-color: ${(props) => (props.cancel ? '#dc3545' : '#28a745')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.2rem;

  &:hover {
    background-color: ${(props) => (props.cancel ? '#c82333' : '#218838')};
  }
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
`;

const DeliverySchedules = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, customer: "Alice", address: "123 Main St", date: "2023-12-01", status: "Scheduled" },
    { id: 2, customer: "Bob", address: "456 Elm St", date: "2023-12-03", status: "Scheduled" },
    { id: 3, customer: "Charlie", address: "789 Oak St", date: "2023-12-02", status: "Scheduled" },
  ]);
  
  const [filterDate, setFilterDate] = useState("");

  // Filter schedules by date if a date is entered
  const filteredSchedules = filterDate
    ? schedules.filter(schedule => schedule.date === filterDate)
    : schedules;

  // Update schedule status
  const markAsDelivered = (id) => {
    setSchedules(schedules.map(schedule => 
      schedule.id === id ? { ...schedule, status: "Delivered" } : schedule
    ));
  };

  // Cancel a schedule
  const cancelSchedule = (id) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <Container>
      <Title>Delivery Schedules</Title>

      <FilterInput
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        placeholder="Filter by delivery date"
      />

      <Table>
        <thead>
          <tr>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.map(schedule => (
            <TableRow key={schedule.id}>
              <TableCell>{schedule.customer}</TableCell>
              <TableCell>{schedule.address}</TableCell>
              <TableCell>{schedule.date}</TableCell>
              <TableCell>{schedule.status}</TableCell>
              <TableCell>
                {schedule.status === "Scheduled" && (
                  <>
                    <Button onClick={() => markAsDelivered(schedule.id)}>Mark as Delivered</Button>
                    <Button cancel onClick={() => cancelSchedule(schedule.id)}>Cancel</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DeliverySchedules;
