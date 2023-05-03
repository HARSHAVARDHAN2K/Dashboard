import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "YEAR V/S REVENUE ",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const GraphPie = () => {
  return (
    <div style={{ width: "100%", height: "40vh" }}>
      <Line data={data} />
      <h6 style={{ textAlign: "center" }}>Heading</h6>
    </div>
  );
};

export default GraphPie;
