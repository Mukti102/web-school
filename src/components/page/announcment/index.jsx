import React from "react";
import Detail from "../../ui/Detail";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import HTMLReactParser from "html-react-parser";

export default function Announcment() {
  const { id } = useParams();
  const { isLoading, data } = useFetch("announcment/" + id);
  const { title, created_at, date, author, thumbnail, description } = data;
  return (
    <Detail>
      {/* title */}
      <div className="text-4xl max-w-3xl  font-medium break-words">{title}</div>
      <div className="flex gap-10 mt-3">
        <div className="flex gap-2 items-center">
          <span className="text-primary text-lg">
            <IoIosTime />
          </span>
          <span className="text-sm  dark:text-text text-gray-600">
            {created_at}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-primary text-xl">
            <IoIosPerson />
          </span>
          <span className="text-sm dark:text-text ext-gray-600">{author}</span>
        </div>
      </div>
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
        <article className="prose dark:prose-invert">
          {HTMLReactParser(`${description}`)}
        </article>
        <table className="mt-5  font-medium">
          <tbody>
            <tr>
              <td>Penulis</td>
              <td className="font-normal">: Ahmad</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td className="font-normal">: {date}</td>
            </tr>
            <tr>
              <td className="pr-4">Lampiran </td>
              <a href="" className="flex">
                :
                <button className="flex gap-3 px-5 items-center bg-primary text-white py-2 rounded-sm mx-1 text-xs">
                  <FaDownload />
                  Download
                </button>
              </a>
            </tr>
          </tbody>
        </table>
      </div>
    </Detail>
  );
}
