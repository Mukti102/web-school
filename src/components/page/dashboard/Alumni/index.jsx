import React, { useEffect } from "react";
import Table from "../ui/Table";
import { DeleteBtn, EditBtn } from "../ui/Action";
import HeadingH4 from "../../../HeadingH4";
import AddButton from "../ui/AddButton";
import useFetch from "../../../../hooks/useFetch";
import AppStore from "../../../../store/AppStore";
import { htmlToText } from "html-to-text";
import { limit } from "../../../../utils/method";

export default function AlumniDashboard() {
  const { setTemporyData, temporyData } = AppStore((state) => state);
  const { data } = useFetch("alumnis");
  useEffect(() => {
    if (data) setTemporyData(data);
  }, [data]);
  return (
    <div className="overflow-hidden pt-5 shadow-primary px-6  bg-white w-full gap-10">
      <div className="justify-between flex">
        <HeadingH4>Alumni Sekolah</HeadingH4>
        <AddButton name={"alumni"} />
      </div>
      {/* content */}
      <div className="overflow-hidden   pt-5 pb-10  bg-white  w-full">
        <div className="border-[1.5px] border-gray-100 p-5 ">
          <table class="min-w-full mt-0 border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Nama
                </th>
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Testimoni
                </th>
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Komentar
                </th>
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Photo
                </th>
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Angkatan
                </th>
                <th class="px-4 py-2 border border-gray-300 font-[600] text-sm text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {temporyData?.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-gray-400 font-semibold py-2"
                  >
                    Tidak Ada Data
                  </td>
                </tr>
              )}
              {temporyData?.map((item, i) => (
                <tr key={i}>
                  <td class="px-4 py-2 border border-gray-300 text-xs">
                    {item?.name}
                  </td>
                  <td class="px-4 py-2 border border-gray-300 text-xs">
                    {item?.response}
                  </td>
                  <td class="px-4 py-2 border border-gray-300 text-xs">
                    {limit(htmlToText(item?.comment), 30)}
                  </td>
                  <td class="px-4 py-2 border border-gray-300 text-xs">
                    <div className="w-10">
                      <img src={item?.photo} alt="ss" />
                    </div>
                  </td>
                  <td class="px-4 py-2 border border-gray-300 text-xs">
                    {item?.angkatan}
                  </td>
                  <td class=" flex justify-center items-center py-5 gap-2 border  text-xs">
                    <DeleteBtn url={`alumnis/${item?.id}`} />
                    <EditBtn url={`${item?.id}/edit`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
