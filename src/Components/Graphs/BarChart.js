import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./style.css";

const BarChart = () => {
  const labels = [2000, 2001, 2002, 2003, 2004, 2005];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div style={{ width: "90%", marginLeft: "5%", height: "50vh" }}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
