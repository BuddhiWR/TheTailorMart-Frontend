// src/components/Admin/ReportManagement/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import GenerateFinancialReport from './GenerateFinancialReport';
import GenerateCustomerReport from './GenerateCustomerReport';
import GeneratePerformanceMetrics from './GeneratePerformanceMetrics';

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
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReportManagement = () => {
  const [activePage, setActivePage] = useState("");

  return (
    <Container>
      <Sidebar>
        <h2>Report Management</h2>
        <SidebarButton onClick={() => setActivePage("customerReport")}>
          Generate Customer Report
        </SidebarButton>
        <SidebarButton onClick={() => setActivePage("performanceMetrics")}>
          Generate Performance Metrics
        </SidebarButton>
        <SidebarButton onClick={() => setActivePage("financialReport")}>
          Generate Financial Report
        </SidebarButton>
      </Sidebar>

      <Content>
        {activePage === "customerReport" && <GenerateCustomerReport />}
        {activePage === "performanceMetrics" && <GeneratePerformanceMetrics />}
        {activePage === "financialReport" && <GenerateFinancialReport />}
      </Content>
    </Container>
  );
};

export default ReportManagement;
