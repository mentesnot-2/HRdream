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
          "#60A5FA",
          "#34D399",
          "#A78BFA",
          "#3B82F6",
          "#22D3EE",
          "#818CF8",
        ],
        borderRadius: 8,
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
      },
      y: {
        
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-4/5 items-center max-sm:w-full">
      <h2 className="text-lg font-semibold mb-4">Employees' wellness by department</h2>
      <Bar data={data} options={options} style={{
        width: "100%",
      }}/>
    </div>
  );
};

export default EmployeeWellnessChart;
