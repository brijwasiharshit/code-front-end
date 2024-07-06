import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const IconBox = () => {
    let marksObtained = "50";
    let accuracy = "71";
    let timeTaken = "00:30:25";

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', margin: '10px auto' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx = {{display : 'flex', justifyContent : 'center'}}>
                    <Avatar src="assets/icons8-correct-96.png" />
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{marksObtained}/100</Typography>
                    <Typography variant="h7">Marks Obtained</Typography>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx = {{display : 'flex', justifyContent : 'center'}}>
                    <Avatar src="assets/percentage-discount-svgrepo-com (2).svg" />
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{accuracy}%</Typography>
                    <Typography variant="h7">Accuracy</Typography>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx = {{display : 'flex', justifyContent : 'center'}}>
                    <Avatar src="assets/clock-svgrepo-com.png" />
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{timeTaken}</Typography>
                    <Typography variant="h7">Time Taken</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default IconBox;
