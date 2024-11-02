import React from "react";
import ViewBase from "../ui/ViewBase";
import { useParams } from "react-router-dom";
import { getCurrentEndpoint } from "../../../../utils/method";
import useFetch from "../../../../hooks/useFetch";

export default function ViewPrestation() {
  const { id } = useParams();
  const current = getCurrentEndpoint();
  const { isLoading, data } = useFetch(`${current}/${id}`);
  const { date, juara, penyelenggara, author } = data;
  return (
    <ViewBase data={data} isLoading={isLoading}>
      <div className="bg-gray-200 mt-5 p-4 w-max">
        <table className=" text-xs   font-medium">
          <tbody>
            <tr>
              <td>Penulis</td>
              <td className="font-normal">: {author}</td>
            </tr>
            <tr>
              <td>Juara</td>
              <td className="font-normal">: {juara}</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td className="font-normal">: {date}</td>
            </tr>
            <tr>
              <td>Penyelenggara</td>
              <td className="font-normal">: {penyelenggara}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ViewBase>
  );
}
