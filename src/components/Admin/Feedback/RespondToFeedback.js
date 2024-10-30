// src/components/Admin/Feedback/RespondToFeedback.js

import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RespondToFeedback = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    alert('Response sent!');
    setResponse('');
  };

  return (
    <div>
      <h3>Respond to Feedback</h3>
      <TextArea
        rows="4"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Write your response here"
      />
      <Button onClick={handleSubmit}>Send Response</Button>
    </div>
  );
};

export default RespondToFeedback;
