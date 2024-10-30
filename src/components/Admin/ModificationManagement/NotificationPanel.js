// src/components/Admin/ModificationManagement/NotificationPanel.js

import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  padding: 2rem;
  background-color: #e9f7ef;
  border: 1px solid #d4edda;
  border-radius: 8px;
  color: #155724;
  text-align: center;
`;

const NotificationPanel = ({ message }) => {
  return <Panel>{message}</Panel>;
};

export default NotificationPanel;
