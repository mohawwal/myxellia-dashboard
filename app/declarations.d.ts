declare module 'react-apexcharts' {
  import React from 'react';

  interface ApexChartProps {
    options: unknown;
    series: unknown[];
    type: string;
    height: number | string;
    width?: number | string;
  }

  const ReactApexChart: React.FC<ApexChartProps>;
  export default ReactApexChart;
}