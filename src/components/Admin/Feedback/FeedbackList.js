// src/components/Admin/Feedback/FeedbackList.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SearchBar = styled.input`
  padding: 0.8rem;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const FeedbackItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeedbackDate = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const FeedbackText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const SortButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  margin-left: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeedbackList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [feedbackItems, setFeedbackItems] = useState([
    { id: 1, date: '2024-10-01', text: 'Great service and support!' },
    { id: 2, date: '2024-09-20', text: 'Product quality could be improved.' },
    { id: 3, date: '2024-09-15', text: 'Loved the customization options.' },
    // Add more feedback items as needed
  ]);

  const filteredFeedback = feedbackItems
    .filter((item) =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  return (
    <Container>
      <Title>Feedback List</Title>

      <SearchBar
        type="text"
        placeholder="Search feedback..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SortButton onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by Date ({sortOrder === 'asc' ? 'Oldest' : 'Newest'})
        </SortButton>
      </div>

      {filteredFeedback.map((item) => (
        <FeedbackItem key={item.id}>
          <FeedbackHeader>
            <FeedbackDate>{new Date(item.date).toLocaleDateString()}</FeedbackDate>
          </FeedbackHeader>
          <FeedbackText>{item.text}</FeedbackText>
        </FeedbackItem>
      ))}
    </Container>
  );
};

export default FeedbackList;
