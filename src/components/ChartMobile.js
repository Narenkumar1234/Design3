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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const startValue = 20;
const increment = 5;
const numDataPoints = 7; // To go up to 65, we need 20 data points (20 + 2.5*19 = 65)

const labels = Array.from(
  { length: numDataPoints },
  (_, index) => startValue + increment * index
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false, // Disable the legend labels
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, // Disable the y-axis grid lines
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        color: "gray",
        font: {
          weight: "bold", // Make the y-axis values bold
        },
      },
    },
    y: {
      stacked: true,

      ticks: {
        stepSize: 100, // Set the interval between ticks to 100
        font: {
          weight: "bold", // Make the y-axis values bold
        },
        color: "gray",
        callback: function (value) {
          // Add a dollar sign before the y-axis values
          return `$${value}`;
        },
      },
      grid: {
        borderWidth: 1, // Set the border width to 1
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [40, 50, 60, 70, 80, 90, 100],
      barThickness: 10,
      backgroundColor: "rgb(3,0,163)",
    },
    {
      label: "Dataset 2",
      data: [40, 50, 60, 70, 80, 90, 100],

      barThickness: 10,

      backgroundColor: "rgb(73,53,255)",
    },
    {
      label: "Dataset 3",
      data: [40, 50, 60, 70, 80, 90, 100],

      barThickness: 10,

      backgroundColor: "rgb(133,175,255)",
    },
  ],
};

export default function ChartMobile() {
  return <Bar options={options} data={data} />;
}
