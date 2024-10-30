// src/components/Admin/Feedback/FeedbackAnalysis.js

import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const StatBox = styled.div`
  padding: 1.5rem;
  background-color: #e0f7fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeedbackAnalysis = () => {
  return (
    <div>
      <h3>Feedback Analysis</h3>
      <p>Analyze feedback trends and customer satisfaction metrics here.</p>
      <StatsContainer>
        <StatBox>
          <h4>Positive Feedback</h4>
          <p>75%</p>
        </StatBox>
        <StatBox>
          <h4>Neutral Feedback</h4>
          <p>15%</p>
        </StatBox>
        <StatBox>
          <h4>Negative Feedback</h4>
          <p>10%</p>
        </StatBox>
      </StatsContainer>
    </div>
  );
};

export default FeedbackAnalysis;
