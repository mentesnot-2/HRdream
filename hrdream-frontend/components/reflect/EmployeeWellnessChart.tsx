"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeWellnessChart: React.FC = () => {
  const data = {
    labels: ["Finance", "HR", "IT", "Marketing", "Design", "Management"],
    datasets: [
      {
        label: "Employees' wellness score",
        data: [20, 40, 25, 60, 90, 35],
        backgroundColor: [
          "#60A5FA", // Light blue
          "#34D399", // Light green
          "#A78BFA", // Light purple
          "#3B82F6", // Blue
          "#22D3EE", // Cyan
          "#818CF8", // Indigo
        ],
        borderRadius: 8,
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // Makes the bars horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Set maximum scale
      },
      y: {
        
        grid: {
          display: false, // Hide gridlines on the y-axis
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Employees' wellness by department</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EmployeeWellnessChart;
