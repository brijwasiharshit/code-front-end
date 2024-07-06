import React from 'react';
import { Box } from '@mui/material';
import BarChart from './BarChart';
import RoundChart from './PieChart';
import HorizontalBars from './BarChart';

const Charts = () => {
  let skipped = 30;
  let correct = 50;
  let incorrect = 20;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft : '16vw'}}>
      <RoundChart skipped={skipped} correct={correct} incorrect={incorrect} />
      <HorizontalBars />
    </Box>
  );
}

export default Charts;
