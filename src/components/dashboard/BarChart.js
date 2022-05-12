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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Daily Order Trend",
    },
  },
};

const labels = [
  "Jan 1",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Jan 15",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Jan 31",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        6, 5, 8, 4, 6, 4, 5, 6, 7, 5, 6, 7, 8, 3, 7, 8, 6, 8, 4, 5, 6, 7, 5, 8,
        7, 8, 9, 7, 8, 9, 3,
      ],
      backgroundColor: "rgb(33, 113, 181)",
    },
    {
      label: "Dataset 2",
      data: [
        5, 4, 5, 7, 8, 9, 4, 5, 6, 7, 8, 5, 7, 8, 4, 7, 8, 9, 7, 8, 9, 3, 4, 5,
        6, 7, 8, 9, 3, 4, 5,
      ],
      backgroundColor: "rgb(249, 216, 73)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
