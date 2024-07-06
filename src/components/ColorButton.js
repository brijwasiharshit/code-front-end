// ColorButton.js
import React from 'react';
import { Button, styled } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fec901',
  color: 'black',
  textTransform: 'none',
  padding: '8px 16px', 
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#fec908',
  },
}));

export default ColorButton;
