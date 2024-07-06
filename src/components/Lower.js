import { Box } from '@mui/material';
import React from 'react';
import Table from './Table';
import PointsTable from './Table';
import BottomButtons from './BottomButtons';

const Lower = () => {
  return (
    <Box>
        <PointsTable />
        <BottomButtons />
    </Box>
  )
}

export default Lower;