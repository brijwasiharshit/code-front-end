import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Score',
    },
  ],
  width: 500,
  height: 300,
};

const dataset = [
  {
    score: 50,
    type: 'Correct',
  },
  {
    score: 20,
    type: 'Incorrect',
  },
  {
    score: 30,
    type: 'Skipped',
  },
  {
    score: 100,
    type: 'Total',
  },
];

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ label: 'Score', dataKey: 'score' }]}
      yAxis={[{ scaleType: 'band', dataKey: 'type' }]}
      series={[{ dataKey: 'score'}]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
