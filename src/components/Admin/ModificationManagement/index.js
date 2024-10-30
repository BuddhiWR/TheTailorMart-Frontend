// src/components/Admin/ModificationManagement/index.js

import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import FeedbackForm from './FeedbackForm';
import NotificationPanel from './NotificationPanel';
import StatusTracker from './StatusTracker';
import ModificationHistory from './ModificationHistory';

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

const ModificationManagement = () => {
  const [stage, setStage] = useState('upload'); // stages: upload, feedback, resubmit, complete, history
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const [history, setHistory] = useState([]); // Track modification history

  // Add an entry to history on each stage change
  const addHistoryEntry = (stageName, extraInfo = {}) => {
    const timestamp = new Date().toLocaleString();
    setHistory((prevHistory) => [
      ...prevHistory,
      { stage: stageName, timestamp, ...extraInfo },
    ]);
  };

  // Handle image upload and move to feedback stage
  const handleImageUpload = (img) => {
    setImage(img);
    addHistoryEntry('Upload Final Image', { image: true });
    setStage('feedback');
  };

  // Handle feedback submission and move to resubmission stage
  const handleFeedbackSubmit = (comments) => {
    setFeedback(comments);
    addHistoryEntry('Customer Feedback', { feedback: comments });
    setStage('resubmit');
  };

  // Handle final resubmission completion
  const handleResubmit = () => {
    addHistoryEntry('Resubmitted Modification');
    setStage('complete');
    alert('Notification sent: Your order is now complete!');
  };

  return (
    <Container>
      <Sidebar>
        <h2>Modification Management</h2>
        <SidebarButton active={stage === 'upload'} onClick={() => setStage('upload')}>
          Upload Final Image
        </SidebarButton>
        <SidebarButton active={stage === 'feedback'} onClick={() => setStage('feedback')}>
          Customer Feedback
        </SidebarButton>
        <SidebarButton active={stage === 'resubmit'} onClick={() => setStage('resubmit')}>
          Resubmit Modification
        </SidebarButton>
        <SidebarButton active={stage === 'complete'} onClick={() => setStage('complete')}>
          Completion Notification
        </SidebarButton>
        <SidebarButton active={stage === 'history'} onClick={() => setStage('history')}>
          Modification History
        </SidebarButton>
      </Sidebar>

      <Content>
        <StatusTracker stage={stage} />
        
        {stage === 'upload' && <ImageUploader onUpload={handleImageUpload} />}
        {stage === 'feedback' && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
        {stage === 'resubmit' && <ImageUploader onUpload={handleResubmit} />}
        {stage === 'complete' && <NotificationPanel message="Your order modifications are complete!" />}
        {stage === 'history' && <ModificationHistory history={history} />}
      </Content>
    </Container>
  );
};

export default ModificationManagement;
