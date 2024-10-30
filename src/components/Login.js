// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
`;

const LoginBox = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 360px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  padding-left: 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #007bff;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FooterText = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #aaa;
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication logic based on user type
    if (username === 'admin' && password === 'admin123') {
      setError('');
      onLogin(); // Call onLogin to update auth state
      navigate('/'); // Redirect to Admin Dashboard
    } else if (username === 'customer' && password === 'customer123') {
      setError('');
      onLogin(); // Call onLogin to update auth state
      navigate('/customer-dashboard'); // Redirect to Customer Dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Welcome Back!</Title>
        <Form onSubmit={handleLogin}>
          <InputField>
            <Icon>👤</Icon>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          </InputField>
          <InputField>
            <Icon>🔒</Icon>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </InputField>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <LoginButton type="submit">Login</LoginButton>
        </Form>
        <FooterText>© 2024 Tailoring Management System. All Rights Reserved.</FooterText>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
