import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import useFetch from "../../../../hooks/useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Kunjungan Website",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Okt",
  "Nov",
  "Dec",
];

export function LineChart() {
  const [allData, setAllData] = useState(null);
  const response = useFetch("visitors");

  useEffect(() => {
    setAllData(response?.data);
  }, [response]);

  // Map visitor data to corresponding months
  const visitorsPerMonth = labels.map((_, index) => {
    return allData?.filter((i) => i.month == index + 1).length;
  });

  const dummyVisitor = labels.map(() =>
    faker.number.int({ min: 100, max: 1000 })
  );

  // Check if visitorsPerMonth contains all zeros
  const isAllZero = visitorsPerMonth?.every((value) => value === 0);

  // If visitorsPerMonth is all zeros, use dummyVisitor data
  const finalData = isAllZero ? dummyVisitor : visitorsPerMonth;

  const data = {
    labels,
    datasets: [
      {
        label: "Jumlah Kunjungan",
        data: finalData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
