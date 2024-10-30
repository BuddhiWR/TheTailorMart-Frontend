// src/components/Admin/AppointmentSchedule/TrackAvailability.js

import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; // Calendar styles

const AvailabilityContainer = styled.div`
  padding: 1rem;
`;

const CalendarContainer = styled.div`
  margin-top: 1rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TrackAvailability = () => {
  const [selectedStaff, setSelectedStaff] = useState('');
  const [date, setDate] = useState(new Date());
  const [availability] = useState([
    { staff: 'John Doe', date: '2024-11-10', time: '9:00 AM - 5:00 PM', status: 'Available' },
    { staff: 'Jane Smith', date: '2024-11-11', time: '10:00 AM - 4:00 PM', status: 'Booked' },
    // Add more sample data as needed
  ]);

  const handleStaffChange = (e) => {
    setSelectedStaff(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddAvailability = () => {
    // Placeholder for feature implementation
    alert("Add availability feature coming soon!");
  };

  return (
    <AvailabilityContainer>
      <h3>Track Staff Availability</h3>
      <p>Manage staff availability for appointments. Schedule blocks, check status, and view upcoming availability.</p>

      <FiltersContainer>
        <div>
          <Label>Staff Member:</Label>
          <Select value={selectedStaff} onChange={handleStaffChange}>
            <option value="">Select Staff</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            {/* Add more staff options as needed */}
          </Select>
        </div>

        <Button onClick={handleAddAvailability}>Add Availability</Button>
      </FiltersContainer>

      <CalendarContainer>
        <Calendar value={date} onChange={handleDateChange} />
      </CalendarContainer>

      <h4>Availability for {date.toDateString()}:</h4>
      <ul>
        {availability
          .filter((entry) => entry.staff === selectedStaff || !selectedStaff)
          .filter((entry) => entry.date === date.toISOString().split('T')[0])
          .map((entry, index) => (
            <li key={index}>
              {entry.staff} - {entry.time} - {entry.status}
            </li>
          ))}
      </ul>
    </AvailabilityContainer>
  );
};

export default TrackAvailability;
