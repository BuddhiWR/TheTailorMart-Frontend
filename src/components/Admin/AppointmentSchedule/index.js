// src/components/Admin/AppointmentSchedule/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import TrackAvailability from './TrackAvailability';
import ScheduleAppointment from './ScheduleAppointment';
import SendReminder from './SendReminder';
import SentReminders from './SentReminders';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #f0f0f0;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-align: left;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

const AppointmentSchedule = () => {
  const [view, setView] = useState("");//default veiw empty

  return (
    <Container>
      <Sidebar>
        <h2>Appointment Schedule</h2>
        <SidebarButton onClick={() => setView("availability")}>Track Staff Availability</SidebarButton>
        <SidebarButton onClick={() => setView("schedule")}>Schedule Appointment</SidebarButton>
        <SidebarButton onClick={() => setView("reminder")}>Send Reminder</SidebarButton>
        <SidebarButton onClick={() => setView('sent')}>View Sent Reminders</SidebarButton>
      </Sidebar>

      <Content>
        {view === "availability" && <TrackAvailability />}
        {view === "schedule" && <ScheduleAppointment />}
        {view === "reminder" && <SendReminder />}
        {view === 'sent' && <SentReminders />}
      </Content>
    </Container>
  );
};

export default AppointmentSchedule;
