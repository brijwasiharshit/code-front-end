import React from 'react';
import { Button, SvgIcon, Box } from '@mui/material';

const DownloadIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-7 2.17L8.83 10h2.34V5h2.66v5h2.34L12 11.17zM5 18v2h14v-2H5z" />
    </SvgIcon>
);

const DownloadButton = ({ onClick }) => (
    <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={onClick}
        sx = {{margin : '20px 0px'}}
    >
        Download
    </Button>
);

export default DownloadButton;
