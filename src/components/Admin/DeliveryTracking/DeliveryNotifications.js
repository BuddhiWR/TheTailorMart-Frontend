// src/components/Admin/DeliveryTracking/DeliveryNotifications.js

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

const DeliveryNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Sample function to send a notification
  const sendNotification = () => {
    const newNotification = `Delivery update sent at ${new Date().toLocaleTimeString()}`;
    setNotifications([...notifications, newNotification]);
  };

  return (
    <Container>
      <Title>Delivery Notifications</Title>
      <Button onClick={sendNotification}>Send Notification</Button>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </Container>
  );
};

export default DeliveryNotifications;
