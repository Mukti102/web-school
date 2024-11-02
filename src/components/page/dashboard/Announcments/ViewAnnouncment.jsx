import React from "react";
import ViewBase from "../ui/ViewBase";
import { useParams } from "react-router-dom";
import { getCurrentEndpoint } from "../../../../utils/method";
import useFetch from "../../../../hooks/useFetch";
import { FaDownload } from "react-icons/fa";

export default function ViewAnnouncment() {
  const { id } = useParams();
  const current = getCurrentEndpoint();
  const { isLoading, data } = useFetch(`${current}/${id}`);
  const { author, date, time } = data;
  return (
    <ViewBase data={data} isLoading={isLoading}>
      <div className="bg-gray-200 mt-5 p-4 w-max">
        <table className="text-xs  font-medium">
          <tbody>
            <tr className="py-2">
              <td>Penulis</td>
              <td className="font-normal">: {author}</td>
            </tr>
            <tr className="py-2">
              <td>Tanggal</td>
              <td className="font-normal">: {date}</td>
            </tr>
            <tr className="py-2">
              <td>Waktu</td>
              <td className="font-normal">: {time}</td>
            </tr>
            <tr className="py-2">
              <td>Lampiran</td>
              <td className="font-normal">
                <button className="text-black flex gap-2 mx-1 rounded-sm px-5 py-1 bg-primary">
                  DownLoad
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ViewBase>
  );
}
