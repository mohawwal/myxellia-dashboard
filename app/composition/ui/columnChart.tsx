'use client';
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const dataset = [
  { month: "Jan", revenue: 35, profit: 23, loss: 17 },
  { month: "Feb", revenue: 41, profit: 20, loss: 15 },
  { month: "Mar", revenue: 37, profit: 8,  loss: 15 },
  { month: "Apr", revenue: 22, profit: 13, loss: 21 },
  { month: "May", revenue: 43, profit: 27, loss: 14 },
  { month: "Jun", revenue: 38, profit: 15, loss: 12 },
  { month: "Jul", revenue: 45, profit: 18, loss: 16 },
  { month: "Aug", revenue: 28, profit: 22, loss: 19 },
  { month: "Sep", revenue: 27, profit: 12, loss: 10 },
];

export default function RevenueChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          categoryGapRatio: 0.4,
          barGapRatio: 1.3,
          tickLabelStyle: { fill: "#919191", fontSize: 10, fontWeight: 400 },
          disableTicks: true,
          disableLine: true,
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 50,
          tickNumber: 6,
          valueFormatter: (value: number) => `${value}m`,
          tickLabelStyle: { fill: "#919191", fontSize: 10, fontWeight: 400 },
          disableTicks: true,
        },
      ]}
      series={[
        { dataKey: "revenue", label: "Revenue", color: "#4545FE" },
        { dataKey: "profit", label: "Profit", color: "#12B76A" },
        { dataKey: "loss", label: "Loss", color: "#F04438" },
      ]}
      height={230}
      slots={{ legend: () => null }}
      margin={{ left: 3 }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.line}`]: {
          stroke: '#919191',
        },
      }}
    />
  );
}