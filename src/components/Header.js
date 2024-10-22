// For navigation and branding

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/new-order">Create Order</Link></li>
          <li><Link to="/clients">Clients</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;