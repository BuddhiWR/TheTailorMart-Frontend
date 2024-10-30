// src/components/CustomerDashboard.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaTshirt,
  FaRuler,
  FaCheck,
  FaCreditCard,
  FaClipboardList,
  FaTruck,
  FaComment
} from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f7f8fa;
  min-height: 100vh;
  position: relative;
`;

const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns */
  gap: 1.5rem;
  max-width: 900px; /* Adjust to control the overall width */
  margin: 0 auto; /* Center the grid */
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CustomerDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <DashboardContainer>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <DashboardTitle>Customer Dashboard</DashboardTitle>
      <DashboardGrid>
        <Card>
          <IconWrapper><FaCalendarAlt /></IconWrapper>
          <CardTitle>Check Tailor Availability</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaPencilAlt /></IconWrapper>
          <CardTitle>Customize Design</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaTshirt /></IconWrapper>
          <CardTitle>Fabric Selection</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaRuler /></IconWrapper>
          <CardTitle>Measurement Input</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaCheck /></IconWrapper>
          <CardTitle>Order Confirmation</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaCreditCard /></IconWrapper>
          <CardTitle>Payment Options</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaClipboardList /></IconWrapper>
          <CardTitle>Order Review and Modifications</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaTruck /></IconWrapper>
          <CardTitle>Delivery Tracking</CardTitle>
        </Card>
        <Card>
          <IconWrapper><FaComment /></IconWrapper>
          <CardTitle>Provide Feedback</CardTitle>
        </Card>
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default CustomerDashboard;
