import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoIosTime } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import Loading from "../../Loading";
import useFetch from "../../../hooks/useFetch";
import Detail from "../../ui/Detail";
import HTMLReactParser from "html-react-parser";
export default function Detaildata() {
  const { id } = useParams();
  const { isLoading, data } = useFetch(`agenda/${id}`);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Detail>
        <div className="flex mt-3 sm:mt-10 flex-col items-center">
          <span className="sm:text-4xl text-2xl font-bold text-center">
            <h1>
              Webinar - Strategi Menjadi Contoh Teladan bagi Warga Sekolah
            </h1>
          </span>
          <div className="flex gap-10 my-3  sm:my-5 text-xs">
            <div className="flex gap-2 items-center">
              <span className="text-primary sm:text-lg text-sm">
                <IoMdPerson />
              </span>
              <span className="sm:text-sm text-[.6rem]">
                Yusuh Supriadi sp.d
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-primary sm:text-lg text-sm">
                <IoIosTime />
              </span>
              <span className="sm:text-sm text-[.6rem]">20 agustus 2026</span>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="text-[1rem] leading-7">
          <article className="prose  dark:prose-invert prose-slate">
            {HTMLReactParser(`${data?.description}`)}
          </article>
        </div>
        {/* table */}
        <div className="sm:w-[40rem] w-full p-2 sm:p-4 mt-5 bg-gray-200 shadow-sm dark:bg-card">
          <table className="sm:text-sm text-xs">
            <tbody>
              <tr>
                <td className="pr-10">Pelaksanaan</td>
                <td className="p-2">:</td>
                <td className="font-light text-secondary">
                  {data?.implementation}
                </td>
              </tr>
              <tr>
                <td className="pr-10">Waktu</td>
                <td className="p-2">:</td>
                <td className="font-light text-secondary">
                  {data.time} - Selesai
                </td>
              </tr>
              <tr>
                <td className="pr-10">Lokasi</td>
                <td className="p-2">:</td>
                <td className="font-light text-secondary">{data?.location}</td>
              </tr>
              <tr>
                <td className="pr-10">Kordinator</td>
                <td className="p-2">:</td>
                <td className="font-light text-secondary">
                  {data?.kordinator}
                </td>
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
      </Detail>
    );
  }
}
