// components/TrendsChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface TrendsChartProps {
    data: {
        interest_over_time: {
            timeline_data: {
                date: string;
                values: { value: string }[];
            }[];
        };
    };
    selectedPeriod: string;
}

const TrendsChart: React.FC<TrendsChartProps> = ({ data, selectedPeriod }) => {
    // Extract data for chart
    const timelineData = data?.interest_over_time?.timeline_data || [];
    const filteredData = timelineData.filter(item => item.date.includes(selectedPeriod));
    const labels = filteredData.map(item => item.date);
    const values = filteredData.map(item => item.values[0].value);

    // Chart.js data format
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Interest Over Time',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => `Value: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='min-w-max min-h-max'>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default TrendsChart;