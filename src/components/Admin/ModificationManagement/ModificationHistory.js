// src/components/Admin/ModificationManagement/ModificationHistory.js

import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 0.8rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const ModificationHistory = ({ history }) => (
  <HistoryContainer>
    <Title>Modification History</Title>
    <Table>
      <thead>
        <tr>
          <TableHeader>Stage</TableHeader>
          <TableHeader>Timestamp</TableHeader>
          <TableHeader>Feedback / Image</TableHeader>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.stage}</TableCell>
            <TableCell>{item.timestamp}</TableCell>
            <TableCell>{item.feedback || item.image ? (item.feedback || "Image Uploaded") : "-"}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </HistoryContainer>
);

export default ModificationHistory;
