import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import ViewBase from "../ui/ViewBase";
import { getCurrentEndpoint } from "../../../../utils/method";

export default function ViewExtrakurikuler() {
  const { id } = useParams();
  const current = getCurrentEndpoint();
  const { isLoading, data } = useFetch(`${current}/${id}`);
  const { galery } = data;
  return (
    <ViewBase data={data} isLoading={isLoading}>
      <h1 className="text-2xl font-bold  my-3">Galery</h1>
      <div className="grid gap-5 grid-cols-4 mt-4">
        {galery?.map((item, index) => (
          <img
            key={index}
            src={item?.photo}
            className="h-32 w-full object-cover rounded-lg"
            alt=""
          />
        ))}
      </div>
    </ViewBase>
  );
}
