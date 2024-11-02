import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useFetch from "../../../../hooks/useFetch";
import RequestStore from "../../../../store/RequestStore";

export default function BarChart() {
  const { get } = RequestStore((state) => state);
  const [dataPerYears, setDataPerYears] = useState(null);

  const years = dataPerYears?.map((i, _) => {
    return i?.angkatan;
  });

  const getDataPerYears = async () => {
    const res = await get("gelombang");
    setDataPerYears(res?.data);
  };

  useEffect(() => {
    getDataPerYears();
  }, []);

  const labels = years;
  const countStudentsPerYears = dataPerYears?.map((i, idx) => {
    return i?.students?.length;
  });

  const maleStudents = dataPerYears?.map((i, idx) => {
    return i?.students?.filter((j) => j?.gender === "laki-laki").length;
  });

  const femaleStudents = dataPerYears?.map((i, idx) => {
    return i?.students?.filter((j) => j?.gender === "perempuan").length;
  });

  const datas = {
    labels,
    datasets: [
      {
        label: "Jumlah",
        data: countStudentsPerYears,
        backgroundColor: "rgba(17, 94, 255, 0.8)",
      },
      {
        label: "Putra",
        data: maleStudents,
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
      {
        label: "Putri",
        data: femaleStudents,
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Siswa SDN Kemuning Sari Lor 02",
      },
    },
  };

  return <Bar options={options} data={datas} />;
}
