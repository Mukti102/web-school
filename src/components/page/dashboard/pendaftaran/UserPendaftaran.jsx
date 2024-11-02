import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import SmallBtn from "../ui/SmallBtn";

export default function UserPendaftaran() {
  const { id } = JSON.parse(localStorage.getItem("user"));
  const { data, isLoading } = useFetch(`students?user_id=${id}`);
  const [registerHistory, setRegisterHistory] = useState([]);
  useEffect(() => {
    if (data) {
      setRegisterHistory(data);
    }
  }, [data]);
  return (
    <>
      <div className="w-full sm:overflow-x-auto ">
        <table className="mt-0 border-collapse border border-gray-300 sm:min-w-[600px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 font-semibold text-[8px] text-xs sm:text-sm text-center">
                No
              </th>
              <th className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 font-semibold text-[8px] text-xs sm:text-sm text-center">
                Angkatan
              </th>
              <th className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 font-semibold text-[8px] text-xs sm:text-sm text-center">
                Gelombang
              </th>
              <th className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 font-semibold text-[8px] text-xs sm:text-sm text-center">
                Status
              </th>
              <th className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 font-semibold text-[8px] text-xs sm:text-sm text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {registerHistory?.map((item, index) => (
              <tr key={item?.id}>
                <td className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 text-[8px] sm:text-xs text-center font-normal">
                  {index + 1}
                </td>
                <td className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 text-[8px] sm:text-xs text-center font-normal">
                  {item?.angkatan?.angkatan}
                </td>
                <td className="px-[7px] sm:px-4 py-1 sm:py-2 border border-gray-300 text-[8px] sm:text-xs text-center font-normal">
                  Gelombang {item?.angkatan?.gelombang_ke}
                </td>
                <td className="px-3 py-1 sm:py-2 border border-gray-300 text-[8px] sm:text-xs text-center font-normal">
                  <span
                    className={`px-2 py-0.5 bg-green-100 ${
                      item?.status === "belum di Proses"
                        ? "bg-orange-200 text-orange-600"
                        : item?.status === "di terima"
                        ? "bg-green-200 text-green-500"
                        : "bg-red-200 text-red-500"
                    } font-medium rounded-full capitalize sm:text-xs text-[7px]`}
                  >
                    {item?.status}
                  </span>
                </td>
                <td className="px-[7px] sm:px-4 sm:flex py-1 sm:py-2 gap-2 text-[8px] sm:text-xs">
                  <div className="flex gap-1 ">
                    <SmallBtn
                      url={`${item?.angkatan?.id}/detail/${item?.id}/edit`}
                      text="Edit"
                      bg="bg-yellow-200"
                      color="text-yellow-500"
                    />
                    <SmallBtn
                      text="Lihat"
                      bg="bg-blue-200"
                      color="text-blue-500"
                      url={`${item?.angkatan?.id}/detail/${item?.id}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {isLoading && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center animate-pulse text-[8px] text-xs sm:text-sm font-semibold text-gray-400 py-1 sm:py-2"
                >
                  Loading...
                </td>
              </tr>
            )}
            {registerHistory.length === 0 && !isLoading && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-[8px] text-xs sm:text-sm font-semibold text-gray-400 py-1 sm:py-2"
                >
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
