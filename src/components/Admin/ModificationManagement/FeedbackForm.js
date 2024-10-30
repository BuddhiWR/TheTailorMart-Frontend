// src/components/Admin/ModificationManagement/FeedbackForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeedbackForm = ({ onSubmit }) => {
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    onSubmit(comments);
  };

  return (
    <FormContainer>
      <textarea
        placeholder="Enter your feedback or modification requests here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit Feedback</Button>
    </FormContainer>
  );
};

export default FeedbackForm;
