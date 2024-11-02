import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import Detail from "../../ui/Detail";
import CreatedAt from "../../ui/DetailsHead";
import DetailsHead from "../../ui/DetailsHead";
import { htmlToText } from "html-to-text";
export default function DetailPrestation() {
  const { id } = useParams();
  const { isLoading, data } = useFetch(`prestasi/${id}`);
  const {
    title,
    date,
    status_winner,
    penyelenggara,
    juara,
    thumbnail,
    description,
  } = data || {};
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Detail>
      <DetailsHead author={"surya mulyono"} created_at={date} title={title} />
      {/* image */}
      <div className="w-full h-96 mt-5">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* article */}
      <div className="w-full mt-5">
        <article className="prose text-white sm:text-base text-xs">
          {htmlToText(description)}
        </article>
      </div>
      <div className="sm:max-w-2xl w-full p-3 sm:p-5  mt-5 dark:bg-card bg-gray-200 shadow-sm ">
        <table className="sm:text-base text-[.6rem]">
          <tbody>
            <tr>
              <td className="pr-10">Juara</td>
              <td className="p-1 sm:p-2">:</td>
              <td className="font-light text-secondary">{juara}</td>
            </tr>
            <tr>
              <td className="pr-10">Status</td>
              <td className="p-1 sm:p-2">:</td>
              <td className="font-light text-secondary">{status_winner}</td>
            </tr>
            <tr>
              <td className="pr-10">Penyelenggara</td>
              <td className="p-1 sm:p-2">:</td>
              <td className="font-light text-secondary">{penyelenggara}</td>
            </tr>
            <tr>
              <td className="pr-10">Tanggal</td>
              <td className="p-1 sm:p-2">:</td>
              <td className="font-light text-secondary">{date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Detail>
  );
}
