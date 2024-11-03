import React from "react";
import CardSekeleton from "../../ui/CardSekeleton";
import CardFasilities from "../../ui/CardFasilities";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Loading";

export default function AllFasilitas() {
  const { data, isLoading } = useFetch("facilities");
  return (
    <React.Fragment>
      <div className="my-0 px-5 sm:px-10 pt-20 sm:pt-32 text-text bg-background">
        <h1 className="sm:font-bold text-xl sm:text-3xl">Semua Fasilitas</h1>
      </div>
      <div className="grid grid-cols-2 pt-5 px-5 sm:px-10 bg-background flex-wrap gap-3 sm:gap-10  w-full">
        {isLoading && <Loading></Loading>}
        {data.map((item, index) => (
          <CardFasilities item={item} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
}
