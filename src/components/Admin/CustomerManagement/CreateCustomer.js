// src/components/Admin/CustomerManagement/CreateCustomer.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FileInput = styled.input`
  font-size: 1rem;
`;

const CreateCustomer = ({ addCustomer }) => {
  const [customerId, setCustomerId] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
  });

  // Generate Customer ID on component load
  useEffect(() => {
    const generatedId = `CUST-${Math.floor(100000 + Math.random() * 900000)}`;
    setCustomerId(generatedId);
  }, []);

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  // Commented out as it's currently unused
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file and text data
    const data = new FormData();
    data.append('customer_id', customerId);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('address', formData.address);
    data.append('gender', formData.gender);
    if (profilePhoto) {
      data.append('profile_photo', profilePhoto);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/customers', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Customer created:', response.data);

      // Uncomment if you need to use addCustomer to update the state in a parent component
      // addCustomer(response.data);
      
      // Optional: Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
      });
      setProfilePhoto(null);
      setCustomerId(`CUST-${Math.floor(100000 + Math.random() * 900000)}`);
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <FormContainer>
      <Title>Create Customer Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="cid">Customer ID:</Label>
        <Input type="text" id="cid" name="cid" value={customerId} readOnly />

        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="phone">Mobile:</Label>
        <Input type="tel" id="phone" name="phone" required />

        <Label htmlFor="address">Address:</Label>
        <Input type="text" id="address" name="address" required />

        <Label htmlFor="gender">Gender:</Label>
        <Select id="gender" name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Label htmlFor="photo">Profile Photo:</Label>
        <FileInput type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />

        <Button type="submit">Create Profile</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateCustomer;
