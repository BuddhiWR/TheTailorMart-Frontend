import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';

const OrderList = () => {
    console.log("Rendering OrderList");

    const [orders, setOrders] = useState([]); // State to manage fetched orders
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to manage errors

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrders(); // Fetch orders directly
                console.log('Data fetched:', response);
                
                // Check if the response contains data in the expected structure
                if (response && response.data && Array.isArray(response.data)) {
                    setOrders(response.data); // Update state with the fetched orders
                } else {
                    console.warn("The API response does not contain an array.");
                    setOrders([]); // Set as an empty array if data is not an array
                }
            } catch (error) {
                console.error("There was an error fetching the orders!", error);
                setError("There was an error fetching the orders!");
            } finally {
                setLoading(false); // Mark loading as complete
            }
        };

        fetchOrders();
    }, []);

    // If loading, show a loading message
    if (loading) {
        return <p>Loading...</p>;
    }

    // If there was an error, show an error message
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Order List</h1>
            {orders.length === 0 ? (
                <p>No orders available.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderList;
