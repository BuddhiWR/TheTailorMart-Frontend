// src/components/Admin/AppointmentSchedule/SendReminder.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ReminderContainer = styled.div`
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SendReminder = () => {
  const [reminder, setReminder] = useState({
    message: '',
    recipient: '',
    method: 'SMS',
  });

  const handleChange = (e) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleSendReminder = (e) => {
    e.preventDefault();

    // Save to localStorage
    const currentReminders = JSON.parse(localStorage.getItem('sentReminders')) || [];
    const newReminder = {
      ...reminder,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem('sentReminders', JSON.stringify([...currentReminders, newReminder]));

    // Reset form
    setReminder({
      message: '',
      recipient: '',
      method: 'SMS',
    });
  };

  return (
    <ReminderContainer>
      <h3>Send Reminder</h3>
      <Form onSubmit={handleSendReminder}>
        <label>Recipient (Customer Email or Phone):</label>
        <input type="text" name="recipient" value={reminder.recipient} onChange={handleChange} required />

        <label>Method:</label>
        <select name="method" value={reminder.method} onChange={handleChange}>
          <option value="SMS">SMS</option>
          <option value="Email">Email</option>
        </select>

        <label>Message:</label>
        <textarea name="message" value={reminder.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Reminder</button>
      </Form>
    </ReminderContainer>
  );
};

export default SendReminder;
