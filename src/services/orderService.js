import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Update with the correct backend URL

export const getOrders = async () => {
  return await axios.get(`${API_URL}/orders`);
};

export const createOrder = async (orderData) => {
  return await axios.post(`${API_URL}/orders`, orderData);
};
