import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import ClientList from './components/ClientList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header for navigation */}
        <Header />

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* Define Routes for different pages */}
            <Route path="/" element={<Dashboard />} />  {/* Dashboard as home */}
            <Route path="/orders" element={<OrderList />} />  {/* List of Orders */}
            <Route path="/new-order" element={<OrderForm />} />  {/* New Order Form */}
            <Route path="/clients" element={<ClientList />} />  {/* List of Clients */}
          </Routes>
        </main>

        {/* Footer for general information */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
