import { Box, Typography } from '@mui/material'
import React from 'react';
const CompletionTime = () => {
    const quizTitle = "History Quiz";
  return (
    <Box style = {{margin : '20px auto', width : '800px'}}>
        <Typography variant = "h4" style = {{display : 'inline'}}>You have completed </Typography>
        <Typography variant = "h3" style = {{display : 'inline'}}>{quizTitle}</Typography>
    </Box>
  )
}

export default CompletionTime;