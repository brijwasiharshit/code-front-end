import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { subject: "Maths", marks: 10 / 20, incorrect: 8, skipped: 2, time: "00:15:45", score: 10 },
    { subject: "English", marks: 11 / 20, incorrect: 2, skipped: 7, time: "00:15:45", score: 11 },
    { subject: "Science", marks: 7 / 20, incorrect: 3, skipped: 10, time: "00:15:45", score: 7 },
    { subject: "History", marks: 9 / 20, incorrect: 4, skipped: 7, time: "00:15:45", score: 9 },
    { subject: "Geography", marks: 13 / 20, incorrect: 3, skipped: 4, time: "00:15:45", score: 13 },
];

export default function PointsTable() {
  return (
    <TableContainer sx={{ maxWidth: 1200, margin : '0px auto' }} component={Paper}>
      <Table sx={{ maxWidth: 1200, margin : '0px auto' }} aria-label="simple table">
        <TableHead align="center" sx = {{backgroundColor : '#fec901',border : '2px solid black'}}>
          <TableRow>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}}>Subject</TableCell>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}} align="center">Marks</TableCell>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}} align="center">Incorrect</TableCell>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}} align="center">Skipped</TableCell>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}} align="center">Time</TableCell>
            <TableCell sx = {{fontWeight : '700',border : '2px solid black'}} align="center">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.subject}
        
            >
              <TableCell component="th" scope="row" sx = {{backgroundColor : '#f4f0e2', border : '2px solid black'}}>
                {row.subject}
              </TableCell>
              <TableCell align="center" sx = {{border : '2px solid black'}}>{row.marks}</TableCell>
              <TableCell align="center" sx = {{border : '2px solid black'}}>{row.incorrect}</TableCell>
              <TableCell align="center" sx = {{border : '2px solid black'}}>{row.skipped}</TableCell>
              <TableCell align="center" sx = {{border : '2px solid black'}}>{row.time}</TableCell>
              <TableCell align="center" sx = {{border : '2px solid black'}}>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
