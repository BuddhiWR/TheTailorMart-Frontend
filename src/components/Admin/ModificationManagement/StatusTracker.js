// src/components/Admin/ModificationManagement/StatusTracker.js

import React from 'react';
import styled from 'styled-components';

const TrackerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Stage = styled.div`
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#007bff' : '#aaa')};
`;

const StatusTracker = ({ stage }) => {
  return (
    <TrackerContainer>
      <Stage active={stage === 'upload'}>Image Upload</Stage>
      <Stage active={stage === 'feedback'}>Feedback</Stage>
      <Stage active={stage === 'resubmit'}>Resubmission</Stage>
      <Stage active={stage === 'complete'}>Complete</Stage>
    </TrackerContainer>
  );
};

export default StatusTracker;
