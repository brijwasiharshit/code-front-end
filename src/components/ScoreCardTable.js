import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, IconButton } from '@mui/material';
import { FaExpandArrowsAlt, FaTrash } from 'react-icons/fa';

const rows = [
    { id: 1, name: "Harshit", date: "2021/03/14  3:41PM", score: 2, percentage: "00:15:45", status: "pass", action: "none" },
    { id: 2, name: "Mayank", date: "2021/03/14  3:41PM", score: 7, percentage: "00:15:45", status: "fail", action: "none" },
    { id: 3, name: "Ritik", date: "2021/03/14  3:41PM", score: 10, percentage: "00:15:45", status: "pass", action: "none" },
];

const columns = [
    { field: 'name', headerName: 'Name / Username', width: 300 },
    { field: 'date', headerName: 'Date/Time', width: 250 },
    { field: 'score', headerName: 'Score', width: 100 },  
    { field: 'percentage', headerName: 'Percentage', width: 200 },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        renderCell: (params) => (
            <Box
                sx={{
                    backgroundColor: params.value === 'pass' ? '#4caf50' : '#f44336',
                    color: 'white',
                    textAlign: 'center',
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    minWidth: '80px',
                }}
            >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {params.value}
                </Typography>
            </Box>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 100,
        renderCell: (params) => (
            <Box>
                <IconButton aria-label="expand" size="small" sx={{ color: '#ff9800' }}>
                    <FaExpandArrowsAlt fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small" sx={{ color: '#f44336', ml: 1 }}>
                    <FaTrash fontSize="inherit" />
                </IconButton>
            </Box>
        ),
    },
];

const ScoreCardTable = () => {
    return (
        <Box sx={{ height: 400, width: '85%', margin: '0 auto', mt: 4, boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                sx={{
                    '& .MuiDataGrid-row': {
                        bgcolor: 'background.paper',
                    },
                    '& .MuiDataGrid-row:nth-of-type(odd)': {
                        bgcolor: 'grey.100',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        bgcolor: 'grey.200',
                        color: 'black',
                        fontSize: 16,
                    },
                    '& .MuiDataGrid-footerContainer': {
                        bgcolor: 'grey.200',
                        color: 'black',
                    },
                }}
            />
        </Box>
    );
}

export default ScoreCardTable;
