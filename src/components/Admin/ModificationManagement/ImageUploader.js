// src/components/Admin/ModificationManagement/ImageUploader.js

import React, { useState } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ImageUploader = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    if (image) {
      onUpload(image);
    } else {
      alert('Please select an image before uploading.');
    }
  };

  return (
    <UploadContainer>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <Button onClick={handleUpload}>Upload Image</Button>
    </UploadContainer>
  );
};

export default ImageUploader;
