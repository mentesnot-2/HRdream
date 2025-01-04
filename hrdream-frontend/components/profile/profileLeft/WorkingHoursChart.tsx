"use client";

import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ChartOptions,
    ChartData,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const WorkingHoursChart: React.FC = () => {
    const chartRef = useRef<any>(null);

    const maxHours = 8;

    const data: ChartData<'bar'> = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Working Hours',
                data: [1, 5, 4, 8, 3, 5, 6],
                backgroundColor: 'rgba(0, 124, 255, 1)',
                barThickness: 10,
                barPercentage: 0.5,
                borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
            },
            {
                label: 'Background',
                data: Array(7).fill(maxHours),
                backgroundColor: 'rgba(197, 224, 255, 1)',
                barThickness: 10,
                barPercentage: 0.5,
                borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
                max: maxHours,
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
                    color: 'rgba(107, 114, 128, 1)',
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) =>
                        `${tooltipItem.raw as number} hours`,
                },
            },
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
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
        <div className="mx-auto bg-white p-4 rounded-md mt-4 w-full shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4">Total Working Hours</h2>
            <div className="relative h-36">
                <Bar ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default WorkingHoursChart;
