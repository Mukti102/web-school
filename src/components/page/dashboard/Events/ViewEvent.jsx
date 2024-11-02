import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { IoIosTime, IoMdPerson } from "react-icons/io";
import HTMLReactParser from "html-react-parser";

export default function ViewEvent() {
  const { id } = useParams();
  const { isLoading, data } = useFetch(`agenda/${id}`);
  return (
    <div className="overflow-hidden py-10  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <div className="flex mt-10 flex-col items-center">
        <span className="text-4xl font-bold text-center">
          <h1>{data?.title}</h1>
        </span>
        <div className="flex gap-10  my-5 text-xs">
          <div className="flex gap-2 items-center">
            <span>
              <IoMdPerson />
            </span>
            <span>{data?.author}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <IoIosTime />
            </span>
            <span>{data?.created_at}</span>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="text-[1rem] leading-7">
        <p>{HTMLReactParser(`${data?.description}`)}</p>
      </div>
      {/* table */}
      <div className="w-[40rem] p-4 font-medium mt-5 bg-gray-200">
        <table className="text-sm">
          <tbody>
            <tr>
              <td className="pr-10">Pelaksanaan</td>
              <td className="p-2">:</td>
              <td className="font-normal">{data?.implementation}</td>
            </tr>
            <tr>
              <td className="pr-10">Waktu</td>
              <td className="p-2">:</td>
              <td className="font-normal">{data.time} - Selesai</td>
            </tr>
            <tr>
              <td className="pr-10">Lokasi</td>
              <td className="p-2">:</td>
              <td className="font-normal">{data?.location}</td>
            </tr>
            <tr>
              <td className="pr-10">Kordinator</td>
              <td className="p-2">:</td>
              <td className="font-normal">{data?.kordinator}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* image */}
      <div className="w-[70%] mx-auto mt-10 bg-theory overflow-hidden">
        <img
          src={data.thumbnail}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
