// src/components/Admin/AppointmentSchedule/ScheduleAppointment.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ScheduleAppointment = () => {
  const [appointment, setAppointment] = useState({
    customerName: '',
    staffMember: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scheduling appointment:', appointment);
    // Send appointment data to backend or store locally
  };

  return (
    <ScheduleContainer>
      <h3>Schedule Appointment</h3>
      <Form onSubmit={handleSubmit}>
        <label>Customer Name:</label>
        <input type="text" name="customerName" onChange={handleChange} required />

        <label>Staff Member:</label>
        <input type="text" name="staffMember" onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" onChange={handleChange} required />

        <label>Notes:</label>
        <textarea name="notes" onChange={handleChange}></textarea>

        <button type="submit">Schedule Appointment</button>
      </Form>
    </ScheduleContainer>
  );
};

export default ScheduleAppointment;
