// src/components/Admin/Feedback/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import FeedbackList from './FeedbackList';
import RespondToFeedback from './RespondToFeedback';
import FeedbackAnalysis from './FeedbackAnalysis';

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

const Feedback = () => {
  const [activePage, setActivePage] = useState('list');

  return (
    <Container>
      <Sidebar>
        <h2>Feedback Management</h2>
        <SidebarButton active={activePage === 'list'} onClick={() => setActivePage('list')}>
          Feedback List
        </SidebarButton>
        <SidebarButton active={activePage === 'respond'} onClick={() => setActivePage('respond')}>
          Respond to Feedback
        </SidebarButton>
        <SidebarButton active={activePage === 'analysis'} onClick={() => setActivePage('analysis')}>
          Feedback Analysis
        </SidebarButton>
      </Sidebar>

      <Content>
        {activePage === 'list' && <FeedbackList />}
        {activePage === 'respond' && <RespondToFeedback />}
        {activePage === 'analysis' && <FeedbackAnalysis />}
      </Content>
    </Container>
  );
};

export default Feedback;
