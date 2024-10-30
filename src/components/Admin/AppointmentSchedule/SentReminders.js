// src/components/Admin/AppointmentSchedule/SentReminders.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RemindersContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 0.8rem;
  border: 1px solid #ddd;
  text-align: left;
  color: #333;
`;

const SentReminders = () => {
  const [sentReminders, setSentReminders] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [filterRecipient, setFilterRecipient] = useState('');

  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem('sentReminders')) || [];

    if (reminders.length === 0) {
      const sampleReminders = [
        {
          date: "2024-01-01",
          time: "10:00 AM",
          recipient: "customer1@example.com",
          method: "Email",
          message: "Your appointment is scheduled for tomorrow at 10:00 AM.",
        },
        {
          date: "2024-01-02",
          time: "9:00 AM",
          recipient: "+1234567890",
          method: "SMS",
          message: "Reminder: You have an appointment today at 2:00 PM.",
        },
        {
          date: "2024-01-03",
          time: "8:00 AM",
          recipient: "customer2@example.com",
          method: "Email",
          message: "Thank you for visiting! We look forward to serving you again.",
        },
      ];

      localStorage.setItem('sentReminders', JSON.stringify(sampleReminders));
      setSentReminders(sampleReminders);
    } else {
      setSentReminders(reminders);
    }
  }, []);

  const filteredReminders = sentReminders.filter((reminder) => {
    const matchesDate = filterDate ? reminder.date.includes(filterDate) : true;
    const matchesRecipient = filterRecipient ? reminder.recipient.toLowerCase().includes(filterRecipient.toLowerCase()) : true;
    return matchesDate && matchesRecipient;
  });

  return (
    <RemindersContainer>
      <Title>Sent Reminders</Title>
      
      <FilterContainer>
        <Input
          type="date"
          placeholder="Filter by Date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Filter by Recipient"
          value={filterRecipient}
          onChange={(e) => setFilterRecipient(e.target.value)}
        />
      </FilterContainer>

      <Table>
        <thead>
          <tr>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Recipient</TableHeader>
            <TableHeader>Method</TableHeader>
            <TableHeader>Message</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredReminders.map((reminder, index) => (
            <TableRow key={index}>
              <TableCell>{reminder.date}</TableCell>
              <TableCell>{reminder.time}</TableCell>
              <TableCell>{reminder.recipient}</TableCell>
              <TableCell>{reminder.method}</TableCell>
              <TableCell>{reminder.message}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </RemindersContainer>
  );
};

export default SentReminders;
