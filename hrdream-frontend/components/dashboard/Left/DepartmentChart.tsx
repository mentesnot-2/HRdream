"use client";

import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ChartOptions,
    ChartData,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

interface DepartmentChartProps {
    labels: string[];
    data: number[];
    colors?: string[];
}
const defaultColors = [
    "rgba(0, 124, 255, 1)",
    "rgba(63, 194, 196, 1)",
    "rgba(152, 159, 254, 1)",
    "rgba(0, 124, 255, 1)",
    "rgba(62, 194, 195, 1)",
    "rgba(152, 159, 254, 1)",
];
const forBackground = [
    "rgba(197, 224, 255, 1)",
    "rgba(185, 230, 232, 1)",
    "rgba(214, 214, 253, 1)",
    "rgba(197, 224, 255, 1)",
    "rgba(185, 230, 232, 1)",
    "rgba(214, 214, 253, 1)"
]

const DepartmentChart: React.FC<DepartmentChartProps> = ({ labels, data, colors }) => {
    const chartRef = useRef<ChartJS<"bar"> | null>(null);

    const maxEmployees = 10;

    const chartData: ChartData<"bar"> = {
        labels: labels,
        datasets: [
            {
                label: "Employees",
                data: data,
                backgroundColor: colors || defaultColors.slice(0, data.length),
                barThickness: 10,
                barPercentage: 0.5,
                borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
            },
            {
                label: 'Background',
                data: Array(data.length).fill(maxEmployees),
                backgroundColor: forBackground,
                barThickness: 10,
                barPercentage: 0.5,
                borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
                max: maxEmployees,
                ticks: {
                    stepSize: 2,
                },
                grid: {
                    display: false,
                    drawTicks: false,
                },
            },
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: "rgba(107, 114, 128, 1)",
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw as number} employees`,
                },
            },
        },
        animation: {
            duration: 2000,
            easing: "easeInOutQuart",
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const chart = chartRef.current;
                    if (chart) {
                        chart.reset();
                        chart.update();
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (chartRef.current?.canvas) {
            observer.observe(chartRef.current.canvas);
        }

        return () => {
            if (chartRef.current?.canvas) {
                observer.unobserve(chartRef.current.canvas);
            }
        };
    }, []);

    return (
        <div className="relative h-40">
            <Bar ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default DepartmentChart;
