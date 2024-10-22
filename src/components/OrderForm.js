 // To create new orders
 
import React, { useState } from 'react';
import { createOrder } from '../services/orderService';

const OrderForm = () => {
  // State to manage form input values
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  // State for form validation
  const [errors, setErrors] = useState({});
  
  // Validation function
  const validate = () => {
    const validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!description) validationErrors.description = 'Description is required';
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form input
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if any
      return;
    }

    // Data to be sent to the backend
    const orderData = { name, description };

    try {
      await createOrder(orderData); // Send data using Axios
      alert('Order created successfully!');
      setName(''); // Clear input fields
      setDescription('');
      setErrors({}); // Clear errors
    } catch (error) {
      console.error('Error creating order:', error); // Handle any backend errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} {/* Show error if validation fails */}
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>} {/* Show error if validation fails */}
      </div>
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
