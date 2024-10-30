// Example for CustomerManagement/index.js
// Main CustomerManagement component

// src/components/Admin/CustomerManagement/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCustomer from './CreateCustomer';
import CustomerList from './CustomerList';
import CustomerHistory from './CustomerHistory';

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


const CustomerManagement = () => {
  const [view, setView] = useState(""); // Default view is empty
  const [customers, setCustomers] = useState([]);
  const [customerhistory, setcustomerHistory] = useState([]);

  // Function to add a new customer and update the history
  const addCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    setcustomerHistory([...customerhistory, { date: new Date().toISOString().split('T')[0], description: `Profile created for ${newCustomer.name}`, amount: "-" }]);
  
    setView("list");
};

  return (
    <Container>
      <Sidebar>
        <h2>Customer Management</h2>
        <SidebarButton onClick={() => setView("create")}>Create Profile</SidebarButton>
        <SidebarButton onClick={() => setView("list")}>Customer List</SidebarButton>
        <SidebarButton onClick={() => setView("history")}>Customer History</SidebarButton>
      </Sidebar>

      <Content>
        {view === "create" && <CreateCustomer addCustomer={addCustomer} setView={setView}/>}
        {view === "list" && <CustomerList customers={customers} />}
        {view === "history" && <CustomerHistory history={customerhistory} />}
      </Content>
    </Container>
  );
};

export default CustomerManagement;
