import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Ensure this matches your backend URL

// Function to get all orders
export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data; // Return only the data part of the response
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error; // Re-throw the error to be handled in the component
    }
};

// Function to create a new order
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data; // Return only the data part of the response
    } catch (error) {
        console.error("Error creating order:", error);
        throw error; // Re-throw the error to be handled in the component
    }
};
