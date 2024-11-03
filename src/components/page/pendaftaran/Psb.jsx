import React, { useEffect } from "react";
import Button from "../../ui/Button";
import CardGelombang, { Alert } from "./CardGelombang";
import Step from "./Step";
import useFetch from "../../../hooks/useFetch";

export default function Psb() {
  const [pendaftarans, setPendaftarans] = React.useState([]);
  const { data, isLoading } = useFetch("gelombang");

  useEffect(() => {
    if (data) {
      const openRegister = data?.filter((item) => item.status === "open");
      setPendaftarans(openRegister);
    }
  }, [data]);

  return (
    <div className="w-full pt-16 dark:bg-gray-900 bg-white pb-10 text-black">
      {/* Hero section */}
      <div
        className="w-full relative flex items-center px-5 sm:px-10 h-60 sm:h-[70vh] lg:h-screen"
        style={{
          backgroundImage:
            "url(https://ugm.ac.id/wp-content/uploads/2023/04/Home-Sec-Pengabdian.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="w-full sm:w-1/2 z-50 text-white dark:text-primary px-1 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Penerimaan Siswa Baru
          </h1>
          <p className="mt-1 sm:mt-5 dark:text-secondary text-gray-200 text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, et?
            Necessitatibus dolore pariatur aperiam harum.
          </p>
          <div className="flex gap-3 sm:gap-5 mt-2 sm:mt-6">
            <Button link="/login">Daftar Akun</Button>
          </div>
        </div>
      </div>

      {/* Pendaftaran Card Section */}
      <div className="w-[91%] sm:w-[80%] rounded-md sm:relative static -top-10 sm:-top-20 mx-auto sm:pb-12 dark:bg-gray-800 bg-gray-50 p-3 sm:p-7 shadow-md dark:shadow-black">
        <h5 className="mb-2 text-lg sm:text-2xl font-semibold sm:font-bold tracking-tight text-gray-900 dark:text-white">
          Penerimaan Siswa Baru Tahun Akademik {pendaftarans?.[0]?.angkatan}
        </h5>
        <div className="flex flex-col sm:flex-row gap-3 sm:mt-5">
          {pendaftarans?.length === 0 && <Alert />}
          {pendaftarans?.map((item) => (
            <CardGelombang key={item?.id} item={item} />
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="w-full mt-10 px-5 sm:px-10">
        <h5 className="text-lg sm:text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Tahap-Tahap Pendaftaran
        </h5>
        <div className="px-5 sm:px-20 md:px-44 py-5 sm:py-10 w-full mx-auto">
          <Step />
        </div>
      </div>
    </div>
  );
}

export function CardStep({ data }) {
  return (
    <div className="p-4 sm:p-5 h-40 sm:h-48 group rounded-md hover:bg-primary shadow-primary bg-gray-50 hover:text-white dark:text-black">
      <h2 className="font-semibold text-[0.9rem] sm:text-[1rem]">
        {data?.title}
      </h2>
      <p className="mt-2 sm:mt-4 text-sm sm:text-sm">{data?.description}</p>
    </div>
  );
}
