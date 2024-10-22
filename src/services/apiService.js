// To handle API requests (orders, clients)

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Laravel backend URL

export const fetchOrders = () => {
  return axios.get(`${API_URL}/orders`);
};

export const createOrder = (orderData) => {
  return axios.post(`${API_URL}/orders`, orderData);
};
