import React from "react";
import CardExtracuriculer from "./ui/CardExtracuriculer";
import HeadingH1 from "./ui/HeadingH1";
import useFetch from "../hooks/useFetch";
export default function Extracuriculer() {
  const { data, isLoading } = useFetch("extrakurikuler", 4);
  return (
    <div className="py-5 text-text">
      <HeadingH1 all={"extracuriculer"}>Extracuriculer</HeadingH1>
      <section className="my-2 sm:my-10 px-5 sm:px-14">
        <div className="grid justify-center grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <CardExtracuriculer key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
