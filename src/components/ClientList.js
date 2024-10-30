// To display list of clients

// ClientList.js
import React from 'react';

const ClientList = () => {
  // Replace this with real data fetching
  const clients = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' }
  ];

  return (
    <div>
      <h1>Client List</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
