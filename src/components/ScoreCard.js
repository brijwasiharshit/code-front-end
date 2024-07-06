import React from 'react';
import { Grid, Typography, Paper, Avatar, useMediaQuery, useTheme, Box } from '@mui/material';
import ScoreCardTable from './ScoreCardTable';

const ScoreCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        maxWidth: '100%',
        overflowX: 'hidden',
        padding: '20px',
      }}
    >
      {/* Quiz Name */}
      <Box sx={{ marginY: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: isMobile ? '90%' : '80%' }}>
        <Typography variant={isMobile ? 'h5' : 'h3'} gutterBottom>
          SSC CHSL Prelims Practice test 1
        </Typography>
        <Avatar alt="Avatar" src="/assets/resDownSVG.svg" sx={{ width: '40px', height: '40px', borderRadius: '5px' }} />
      </Box>

      {/* Details Section */}
      <Box width={isMobile ? '90%' : '85%'} sx={{ marginBottom: '20px' }}>
        <Grid container spacing={isMobile ? 2 : 3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, bgcolor: '#1976d2', color: 'white', borderRadius: 2 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                {isMobile ? 'Qs: 10' : 'Questions: 10'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, bgcolor: '#4caf50', color: 'white', borderRadius: 2 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                {isMobile ? 'Marks: 100' : 'Maximum Marks: 100'}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, bgcolor: '#f44336', color: 'white', borderRadius: 2 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                Time: 30 mins
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, bgcolor: '#ff9800', color: 'white', borderRadius: 2 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                Passing %: 50%
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* ScoreCardTable Component */}
     
        <ScoreCardTable />
     
    </Grid>
  );
}

export default ScoreCard;
