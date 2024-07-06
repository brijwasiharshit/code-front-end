import { Avatar, Box, styled } from '@mui/material';
import React from 'react';
import CompletionTime from './CompletionTime';
import IconBox from './IconBox';
import Charts from './Charts';
import ColorButton from './ColorButton';

const Upper = () => {
  return (
    <Box>
      <CompletionTime />
      <IconBox />
      <Charts />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '30px' }}>
        <ColorButton> 
          <Avatar src="https://openmoji.org/data/color/svg/E253.svg" /> Share Result
        </ColorButton>
      </Box>
    </Box>
  );
}

export default Upper;
