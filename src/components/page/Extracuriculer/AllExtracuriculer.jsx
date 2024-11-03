import React from "react";
import Loading from "../../Loading";
import CardEvent from "../../ui/CardEvent";
import useFetch from "../../../hooks/useFetch";
import CardExtracuriculer from "../../ui/CardExtracuriculer";

export default function AllExtracuriculer() {
  const { data, isLoading } = useFetch("extrakurikuler");
  return (
    <React.Fragment>
      <div className="my-0 px-5 sm:px-10 pt-20 sm:pt-32 text-text bg-background">
        <h1 className="sm:font-bold text-xl sm:text-3xl">
          Semua Extrakurikuler
        </h1>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 px-5 sm:px-10 bg-background flex-wrap gap-4 sm:gap-10 w-full sm:pt-6 pt-3">
        {isLoading && <Loading></Loading>}
        {data?.map((item, index) => (
          <CardExtracuriculer item={item} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
}
