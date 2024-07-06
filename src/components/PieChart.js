import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';

const RoundChart = ({ skipped, correct, incorrect }) => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: correct },
              { id: 1, value: incorrect },
              { id: 2, value: skipped },
            ],
          },
        ]}
        width={400}
        height={200}
      />
      <div style={{ position: 'absolute', bottom: '-30px' }}>
        <span style={{ display: 'inline-block', transform: 'translateX(-50%)' }}>Question Report</span>
      </div>
    </Box>
  );
};

export default RoundChart;
