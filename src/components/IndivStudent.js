import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const data = {
  name: 'Harshit',
  email: 'harshit@123',
  questions: 10,
  obtMarks: 25 / 100,
  percentage: '25%',
  status: 'pass',
  timeTaken: '00:11:22',
  accuracy: '10%',
  percentile: '25%',
  speed: 16.67
};

const IndivStudent = () => {
  return (
    <Grid container spacing={2} sx={{ maxWidth: '100%', overflowX: 'hidden', padding: '20px', backgroundColor: '#f4f6f8' }}>
      <Grid item xs={12}>
        <Typography variant='h3' sx={{ margin: '20px 0', textAlign: 'center', color: '#3f51b5', fontWeight: 'bold' }}>
          Quiz Name
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px dotted gray', padding: '15px 0px' }}>
            <Typography variant='h6' sx={{ color: '#333' }}>Name: {data.name}</Typography>
            <Typography variant='h6' sx={{ color: '#333' }}>Email: {data.email}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Questions: {data.questions}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Obtained Marks: {data.obtMarks.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Percentage: {data.percentage}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px', display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Status:</Typography>
              <Typography variant='h6' sx={{ color: data.status === 'pass' ? 'green' : 'red', marginLeft: '5px' }}>{data.status}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Time Taken: {data.timeTaken}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Accuracy: {data.accuracy}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Percentile: {data.percentile}</Typography>
            </Box>
            <Box sx={{ flex: '1 1 20%', minWidth: '150px' }}>
              <Typography variant='h6' sx={{ color: '#333' }}>Speed: {data.speed.toFixed(2)}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default IndivStudent;
