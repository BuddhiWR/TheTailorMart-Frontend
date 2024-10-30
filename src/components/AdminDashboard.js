// src/components/AdminDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaCalendarAlt, FaClipboardList, FaBoxes, FaCheckSquare, FaFileAlt, FaChartLine, FaKey, FaEdit, FaTruck,FaComments } from 'react-icons/fa';

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;

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

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <DashboardContainer>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <DashboardTitle>Admin Dashboard</DashboardTitle>
      <DashboardGrid>
        <Card onClick={() => handleNavigation('/Admin/CustomerManagement')}>
          <IconWrapper><FaUser /></IconWrapper>
          <CardTitle>Customer Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/AppointmentSchedule')}>
          <IconWrapper><FaCalendarAlt /></IconWrapper>
          <CardTitle>Appointments Schedule</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/OrderManagement')}>
          <IconWrapper><FaClipboardList /></IconWrapper>
          <CardTitle>Order Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/InventoryManagement')}>
          <IconWrapper><FaBoxes /></IconWrapper>
          <CardTitle>Inventory Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/OrderConfirmation')}>
          <IconWrapper><FaCheckSquare /></IconWrapper>
          <CardTitle>Order Confirmation Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/ReportManagement')}>
          <IconWrapper><FaFileAlt /></IconWrapper>
          <CardTitle>Report Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/FinancialManagement')}>
          <IconWrapper><FaChartLine /></IconWrapper>
          <CardTitle>Financial Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/UserAuthentication')}>
          <IconWrapper><FaKey /></IconWrapper>
          <CardTitle>User Authentication Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/ModificationManagement')}>
          <IconWrapper><FaEdit /></IconWrapper>
          <CardTitle>Modification Management</CardTitle>
        </Card>
        <Card onClick={() => handleNavigation('/Admin/DeliveryTracking')}>
          <IconWrapper><FaTruck /></IconWrapper>
          <CardTitle>Delivery Tracking</CardTitle>
        </Card>

        <Card onClick={() => handleNavigation('/Admin/Feedback')}>
          <IconWrapper><FaComments/></IconWrapper>
          <CardTitle>Feedback</CardTitle>
        </Card>
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default AdminDashboard;
