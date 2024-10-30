// src/components/Admin/DeliveryTracking/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import OrderStatus from './OrderStatus';
import DeliverySchedules from './DeliverySchedules';
import DeliveryHistory from './DeliveryHistory';
import DeliveryNotifications from './DeliveryNotifications';

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
  background-color: ${(props) => (props.active ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-align: left;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DeliveryTracking = () => {
  const [activePage, setActivePage] = useState("");//default view empty

  return (
    <Container>
      <Sidebar>
        <h2>Delivery Tracking</h2>
        <SidebarButton active={activePage === 'orderStatus'} onClick={() => setActivePage('orderStatus')}>
          Order Status
        </SidebarButton>
        <SidebarButton active={activePage === 'deliverySchedules'} onClick={() => setActivePage('deliverySchedules')}>
          Delivery Schedules
        </SidebarButton>
        <SidebarButton active={activePage === 'deliveryHistory'} onClick={() => setActivePage('deliveryHistory')}>
          Delivery History
        </SidebarButton>
        <SidebarButton active={activePage === 'deliveryNotifications'} onClick={() => setActivePage('deliveryNotifications')}>
          Delivery Notifications
        </SidebarButton>
      </Sidebar>

      <Content>
        {activePage === 'orderStatus' && <OrderStatus />}
        {activePage === 'deliverySchedules' && <DeliverySchedules />}
        {activePage === 'deliveryHistory' && <DeliveryHistory />}
        {activePage === 'deliveryNotifications' && <DeliveryNotifications />}
      </Content>
    </Container>
  );
};

export default DeliveryTracking;
