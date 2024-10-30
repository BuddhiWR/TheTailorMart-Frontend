// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link> | 
        <Link to="/orders">Orders</Link> | 
        <Link to="/new-order">New Order</Link> | 
        <Link to="/clients">Clients</Link>
      </nav>
    </header>
  );
};

export default Header;
