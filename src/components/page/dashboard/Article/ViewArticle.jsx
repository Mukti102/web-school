import React from "react";
import { useParams } from "react-router-dom";
import { getCurrentEndpoint } from "../../../../utils/method";
import useFetch from "../../../../hooks/useFetch";
import ViewBase from "../ui/ViewBase";

export default function ViewArticle() {
  const { id } = useParams();
  const current = getCurrentEndpoint();
  const { isLoading, data } = useFetch(`${current}/${id}`);
  const { title, created_at, author, thumbnail, description } = data;
  return (
    <ViewBase data={data} isLoading={isLoading}>
      <div className="bg-gray-200 mt-5 p-4 w-max">
        <table className=" text-xs  font-medium">
          <tbody>
            <tr>
              <td>Penulis</td>
              <td className="font-normal">: {author}</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td className="font-normal">: {created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ViewBase>
  );
}
