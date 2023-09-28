import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, Chart, registerables } from 'chart.js';

Chart.register(CategoryScale);
Chart.register(...registerables);

interface BarChartProps {
  rating: string | null;
}

const BarChart = ({ rating }: BarChartProps) => {
  const [chartData, setChartData] = useState({
    labels: ['Rating'],
    datasets: [
      {
        label: 'Rating',
        data: [rating],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: [rating]
        }
      ]
    }));
  }, [rating]);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
