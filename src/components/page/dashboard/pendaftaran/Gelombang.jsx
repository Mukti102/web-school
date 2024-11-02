import React, { useEffect, useState } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AddButton from "../ui/AddButton";
import ModalForm from "./ModalForm";
import useFetch from "../../../../hooks/useFetch";
import AppStore from "../../../../store/AppStore";
import SmallBtn from "../ui/SmallBtn";
import SpinLoading from "../../../ui/SpinLoading";
import UserPendaftaran from "./UserPendaftaran";
import CardGelombang from "../../pendaftaran/CardGelombang";
import CardPendaftaran from "./CardPendaftaran";
import AddGelombang from "./AddGelombang";

export default function Gelombang({ title = "Data Riwayat Pendaftaran" }) {
  const { isAdmin } = AppStore((state) => state);
  const { setTemporyData, temporyData, setInitialFormData, FormData } =
    AppStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useFetch("gelombang");
  useEffect(() => {
    setTemporyData(data);
  }, [data]);

  const backdrop = document.querySelector("[data-twe-backdrop-show]");
  useEffect(() => {
    if (isOpen) {
      if (backdrop) {
        backdrop.remove(); // Menghapus elemen backdrop
      }
    }
    if (backdrop) {
      backdrop?.remove();
    }
  }, [isOpen]);

  return (
    <div className="block w-full">
      {!isAdmin && (
        <div className="sm:w-1/2 sm:mb-7 mb-5 w-full  ">
          <CardPendaftaran />
        </div>
      )}
      <div className="sm:text-2xl text-lg pb-5 w-full text-gray-800 overflow-x-auto">
        <div className="mb-10">
          <h1 className="font-bold">{title}</h1>
          <p className="text-xs font-light">
            Berisiakn Data Riwayata Yang Pernah Di Kirim{" "}
          </p>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          data-twe-toggle="modal"
          data-twe-target="#exampleModalCenter"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className=" flex gap-5 justify-end"
        >
          {isAdmin && <AddGelombang />}
        </div>
        {isAdmin && (
          <div className="w-full overflow-x-auto">
            <table className="mt-0 text-[10px] sm:text-base border-collapse border border-gray-300 table-fixed">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[80px]">
                    No
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[100px]">
                    Angkatan
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[120px]">
                    Gelombang
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[80px]">
                    Kuota
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[120px]">
                    Total Pendaftar
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[80px]">
                    Status
                  </th>
                  <th className="px-10 py-2 border border-gray-300 font-[600] text-sm text-center min-w-[80px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center text-sm font-semibold text-gray-400 py-2"
                    >
                      Loading...
                    </td>
                  </tr>
                )}
                {temporyData?.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 border border-gray-300 text-xs text-center font-normal">
                      {i + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-xs text-center font-normal">
                      {item?.angkatan}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-xs text-center font-normal">
                      Gelombang Ke {item?.gelombang_ke}
                    </td>
                    <td className="px-4 py-1 border border-gray-300 text-xs text-center font-normal">
                      {item?.kuota} Peserta
                    </td>
                    <td className="px-4 py-1 border border-gray-300 text-xs text-center font-normal">
                      {item?.students?.length} Peserta
                    </td>
                    <td className="px-3 py-2 border border-gray-300 text-xs text-center font-normal">
                      {item?.status !== "close" ? (
                        <span className="px-4 py-0.5 bg-green-100 text-green-500 font-medium rounded-full">
                          Di Buka
                        </span>
                      ) : (
                        <span className="px-4 py-0.5 bg-red-100 text-red-500 font-medium rounded-full">
                          Di Tutup
                        </span>
                      )}
                    </td>
                    <td className="px-4 flex gap-2 py-2 text-xs">
                      <SmallBtn
                        url={`${item?.id}`}
                        bg="bg-purple-200"
                        color="text-purple-500"
                      />
                      {item?.status !== "close" ? (
                        <SmallBtn
                          url={`gelombang/switch/${item?.id}`}
                          bg="bg-red-200"
                          type="function"
                          color="text-red-500"
                          text="Tutup"
                        />
                      ) : (
                        <SmallBtn
                          url={`gelombang/switch/${item?.id}`}
                          bg="bg-green-200"
                          type="function"
                          color="text-green-500"
                          text="Buka"
                        />
                      )}
                    </td>
                  </tr>
                ))}
                {temporyData?.length === 0 && !isLoading && (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center text-sm font-semibold text-gray-400 py-2"
                    >
                      Tidak ada data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {!isAdmin && (
          <div className="w-full  overflow-x-auto">
            <UserPendaftaran />
          </div>
        )}
      </div>
    </div>
  );
}

const FormGelombang = () => {
  <FormAdd isDescription={false}>
    <TextField label={"Mulai Pendaftaran"} type="text" />
    <TextField label={"Akhir Pendaftaran"} type="text" />
    <TextField label={"Mulai Seleksi"} type="text" />
    <TextField label={"Akhir Seleksi"} type="text" />
    <TextField label={"Pengumuman"} type="text" />
  </FormAdd>;
};
