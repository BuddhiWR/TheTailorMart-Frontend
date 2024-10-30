import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header'; // Import Header component correctly
import Footer from './components/Footer'; // Import Footer component correctly
import OrderList from './components/OrderList'; // Import OrderList component correctly
import OrderForm from './components/OrderForm'; // Import OrderForm component correctly
import ClientList from './components/ClientList'; // Import ClientList component correctly
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard component correctly
import CustomerDashboard from './components/CustomerDashboard'; // Import CustomerDashboard component correctly
import Login from './components/Login'; // Import Login component

// Import Admin Module Components
import CustomerManagement from './components/Admin/CustomerManagement';
import AppointmentSchedule from './components/Admin/AppointmentSchedule';
import OrderManagement from './components/Admin/OrderManagement';
import InventoryManagement from './components/Admin/InventoryManagement';
import OrderConfirmationManagement from './components/Admin/OrderConfirmationManagement';
import ReportManagement from './components/Admin/ReportManagement';
import FinancialManagement from './components/Admin/FinancialManagement';
import UserAuthenticationManagement from './components/Admin/UserAuthenticationManagement';
import ModificationManagement from './components/Admin/ModificationManagement';
import Feedback from './components/Admin/Feedback';
import DeliveryTracking from './components/Admin/DeliveryTracking';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  // Callback function to set authentication status and store it in localStorage
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  // Callback function to handle logout and clear localStorage
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    // Sync with localStorage whenever authentication state changes
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="app-container">

          {/* ----Render Header only if the user is authenticated */}
          {isAuthenticated && <Header onLogout={handleLogout} />}

        <main>
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            {/* Protected Routes */}
            <Route path="/" element={isAuthenticated ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="/customer-dashboard" element={isAuthenticated ? <CustomerDashboard /> : <Navigate to="/login" />}/>
            <Route path="/orders" element={isAuthenticated ? <OrderList /> : <Navigate to="/login" />} />
            <Route path="/new-order" element={isAuthenticated ? <OrderForm /> : <Navigate to="/login" />} />
            <Route path="/clients" element={isAuthenticated ? <ClientList /> : <Navigate to="/login" />} />

            {/* Admin Module Routes */}
            <Route path="/Admin/CustomerManagement" element={isAuthenticated ? <CustomerManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/AppointmentSchedule" element={isAuthenticated ? <AppointmentSchedule /> : <Navigate to="/login" />}/>
            <Route path="/Admin/OrderManagement" element={isAuthenticated ? <OrderManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/InventoryManagement"element={isAuthenticated ? <InventoryManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/OrderConfirmation" element={isAuthenticated ? <OrderConfirmationManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/ReportManagement"element={isAuthenticated ? <ReportManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/FinancialManagement" element={isAuthenticated ? <FinancialManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/UserAuthentication" element={isAuthenticated ? <UserAuthenticationManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/ModificationManagement" element={isAuthenticated ? <ModificationManagement /> : <Navigate to="/login" />}/>
            <Route path="/Admin/Feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />}/>
            <Route path="/Admin/DeliveryTracking" element={isAuthenticated ? <DeliveryTracking /> : <Navigate to="/login" />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
