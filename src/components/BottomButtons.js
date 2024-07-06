// BottomButtons.js
import React from 'react';
import { Box } from '@mui/material';
import ColorButton from './ColorButton';

const BottomButtons = () => {
  return (
    <Box sx={{ width: '400px', display: 'flex', justifyContent: 'space-between', margin: '10px auto' }}>
      <ColorButton sx={{ margin: '10px' }}>Restart</ColorButton>
      <ColorButton sx={{ margin: '10px' }}>Top List</ColorButton>
      <ColorButton sx={{ margin: '10px' }}>Answer Sheet</ColorButton>
    </Box>
  );
}

export default BottomButtons;
