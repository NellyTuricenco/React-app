import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Volvo", "Hyundai", "Audi", "BMW", " Honda", " Kia"],
          datasets: [
            {
              label: "% of votes in 2019",
              data: [15, 31, 11, 17, 12, 14],
              backgroundColor: "rgba(216, 61, 216)",
              borderColor: "rgba(85, 17, 85)",
              borderWidth: 2,
            },
            {
              label: "% of votes in 2020",
              data: [10, 35, 9, 13, 16, 17],
              backgroundColor: "rgba(170, 61, 216)",
              borderColor: "rgba(85, 17, 85)",
              borderWidth: 2,
            },
          ],
        }}
        height={200}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "black",
              fontSize: 14,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
