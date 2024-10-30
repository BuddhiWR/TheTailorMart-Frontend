import React, { useState } from 'react';
import styled from 'styled-components';
import GenerateInvoice from './GenerateInvoice';
import MaintainMeasurements from './MaintainMeasurements';
import InvoiceSummary from './InvoiceSummary';

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
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-align: left;

  &:hover {
    background-color: #0056b3;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 0.9rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  
`;

// Styling for Sidebar, SidebarButton, Content, etc. remains the same...

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalCloseButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #c82333;
  }
`;

const OrderConfirmationManagement = ({ reviewOrder }) => {
    const [view, setView] = useState("");//default veiw empty
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState([
      { id: 1, product: "Shirt", quantity: 2, status: "Active" },
      { id: 2, product: "Dress", quantity: 1, status: "Active" },
      { id: 3, product: "Suit", quantity: 1, status: "Pending" }
    ]);

    const [invoiceSummaries, setInvoiceSummaries] = useState([]); // State to store summaries

  // Function to add an invoice summary
  const addInvoiceSummary = (summary) => {
    setInvoiceSummaries([...invoiceSummaries, summary]);
  };


  // Function to handle the review action
  const handleReview = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true); // Open modal on review
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <Container>
      <Sidebar>
        <h2>Order Confirmation Management</h2>
        <SidebarButton onClick={() => setView("confirm")}>Confirm Orders</SidebarButton>
        <SidebarButton onClick={() => setView("invoice")}>Generate Invoice</SidebarButton>
        <SidebarButton onClick={() => setView("measurements")}>Maintain Measurements</SidebarButton>
        <SidebarButton onClick={() => setView("summary")}>Invoice Summary</SidebarButton>

      </Sidebar>

      <Content>
        {view === "confirm" && (
          <>
            <Title>Confirm Orders</Title>
            
            <Table>
              <thead>
                <tr>
                  <TableHeader>Order ID</TableHeader>
                  <TableHeader>Product</TableHeader>
                  <TableHeader>Quantity</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleReview(order)}>Review</Button>
                      <Button
                        onClick={() => {
                          setSelectedOrder(order); // Set the selected order
                          setView("invoice"); // Switch view to Generate Invoice
                        }}
                        style={{ backgroundColor: '#007bff' }}
                      >
                        Create Invoice
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </>
        )}

        {view === "invoice" && selectedOrder && (
          <GenerateInvoice order={selectedOrder} sendInvoice={(order) => console.log(`Invoice sent for Order ${order.id}`)} 
          addInvoiceSummary={addInvoiceSummary} // Pass addInvoiceSummary function
          />
        )}

        {view === "measurements" && selectedOrder && (
          <MaintainMeasurements order={selectedOrder} />
        )}

        {view === "summary" && (
          <InvoiceSummary summaries={invoiceSummaries} />
        )}
      </Content>

      {/* Modal for order details */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Product:</strong> {selectedOrder.product}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
          </ModalContent>
        </ModalOverlay>
      )}


    </Container>
  );
};

export default OrderConfirmationManagement;
