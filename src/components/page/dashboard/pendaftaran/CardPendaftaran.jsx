import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { Link } from "react-router-dom";
export default function CardPendaftaran() {
  const { id } = JSON.parse(localStorage.getItem("user"));
  const [information, setInformation] = useState([]);
  const { data } = useFetch("gelombang");

  useEffect(() => {
    if (data) {
      setInformation(data);
    }
  }, [data]);
  const gelombangsOpen = information?.filter((item) => item.status === "open");
  const statusRegistrant = gelombangsOpen[0]?.students?.filter(
    (item) => item.user_id === id
  );
  return (
    <>
      {statusRegistrant?.length === 0 && (
        <HaventRegister gelombang={gelombangsOpen[0]} />
      )}
      {statusRegistrant?.length > 0 &&
        statusRegistrant[0].status === "belum di Proses" && <HaventProcess />}

      {statusRegistrant?.length > 0 &&
        statusRegistrant[0].status === "di terima" && <SuccessCard />}

      {statusRegistrant?.length > 0 &&
        statusRegistrant[0].status === "tidak di terima" && <FailCard />}
    </>
  );
}

const HaventRegister = ({ gelombang }) => {
  return (
    <div
      id="alert-additional-content-1"
      class="p-4 mb-1 sm:mb-4  text-blue-800 w-full  border border-blue-300 rounded-lg bg-blue-50  "
      role="alert"
    >
      <div class="flex items-center">
        <span class="sr-only">Info</span>
        <h3 class="sm:text-sm text-sm font-medium">
          Pendaftaran Angkatan {gelombang?.angkatan}
        </h3>
      </div>
      <div class="mt-1 mb-1 sm:mb-4 text-[11px] sm:text-xs">
        Pendaftaran{" "}
        <span className="font-medium">
          Gelombang ke {gelombang?.gelombang_ke}
          {""}
        </span>
        Telah Di Buka Dengan Kuota{" "}
        <span className="font-medium"> Peserta {gelombang?.kuota}</span>
      </div>
      <div class="flex justify-end">
        <Link
          to={`/dashboard/pendaftaran/${gelombang?.id}/create`}
          class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-[11px] sm:text-xs px-5 sm:px-3 py-1.5 mt-1 sm:py-1.5 me-2 text-center inline-flex items-center "
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

const HaventProcess = () => {
  return (
    <div
      id="alert-additional-content-1"
      class="p-4 mb-1 sm:mb-4 text-yellow-800 w-full  border border-yellow-300 rounded-lg bg-yellow-50  "
      role="alert"
    >
      <div class="flex items-center">
        <span class="sr-only">Info</span>
        <h3 class="sm:text-lg text-sm font-medium">Pendaftaran Angkatan</h3>
      </div>
      <div class="mt-1 mb-1  sm mb-1:sm:mb-4 text-[11px] sm:text-xs">
        Pendaftaran <span className="font-medium">Gelombang ke</span>{" "}
        Pendaftaran Anda Sedang Di{" "}
        <span className="font-medium"> Verifikasi</span> Silahkan Cek secara
        Berkala
      </div>
      <div class="flex justify-end">
        <Link
          to={"/dashboard/pendaftaran"}
          class="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-[11px] sm:text-xs px-5 sm:px-3 py-1.5 mt-1 sm:py-1.5 me-2 text-center inline-flex items-center "
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

const SuccessCard = () => {
  return (
    <div
      id="alert-additional-content-1"
      class="p-4 mb-1 sm:mb-4 text-green-800 w-full w-full border border-green-300 rounded-lg bg-green-50  "
      role="alert"
    >
      <div class="flex items-center">
        <span class="sr-only">Info</span>
        <h3 class="sm:text-lg text-sm font-medium">Selamat Anda Lulus</h3>
      </div>
      <div class="mt-1 mb-1 sm:mb-4 text-[11px] sm:text-xs">
        Silahkan Cetak Bukti Pendaftaran Dan Kirimkan ke Panitia Pendaftaran
      </div>
      <div class="flex justify-end">
        <Link
          to={"/dashboard/pendaftaran"}
          class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-[11px] sm:text-xs px-5 sm:px-3 py-1.5 mt-1 sm:py-1.5 me-2 text-center inline-flex items-center "
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

const FailCard = () => {
  return (
    <div
      id="alert-additional-content-1"
      class="p-4 mb-1 sm:mb-4 text-red-800 w-full w-full border border-red-300 rounded-lg bg-red-50  "
      role="alert"
    >
      <div class="flex items-center">
        <span class="sr-only">Info</span>
        <h3 class="sm:text-lg text-sm font-medium">Pendaftaran Angkatan</h3>
      </div>
      <div class="mt-1 mb-1 sm:mb-4 text-[11px] sm:text-xs">
        Pendaftaran <span className="font-medium">Gelombang ke</span>
        Pendaftaran Anda Sedang Di{" "}
        <span className="font-medium"> Verifikasi</span> Silahkan Cek secara
        Berkala
      </div>
      <div class="flex justify-end">
        <Link
          to={"/dashboard/pendaftaran"}
          class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-[11px] sm:text-xs px-5 sm:px-3 py-1.5 mt-1 sm:py-1.5 me-2 text-center inline-flex items-center "
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};
