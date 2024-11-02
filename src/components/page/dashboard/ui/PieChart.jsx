import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";
import RequestStore from "../../../../store/RequestStore";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const { get } = RequestStore((state) => state);
  const { data } = useFetch("jurusan");
  const [students, setStudents] = useState(null);

  const getStudents = async () => {
    const res = await get("students");
    setStudents(res?.data);
  };

  useEffect(() => {
    getStudents();
  }, [data]);

  const peminatjurusan = data?.map(
    (i, _) => students?.filter((e) => e?.jurusan?.title === i?.title)?.length
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Jurusan Yang Di Minati Siswa",
      },
    },
  };

  const dataChart = {
    labels: data?.map((option) => option?.title),
    datasets: [
      {
        label: "# of Students",
        data: peminatjurusan,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Pie
      style={{ background: "white", padding: "2px" }}
      options={options}
      data={dataChart}
    />
  );
}
