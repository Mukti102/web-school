import React from "react";
import CardFasilities from "./ui/CardFasilities";
import HeadingH1 from "./ui/HeadingH1";
import useFetch from "../hooks/useFetch";
export default function Fasilities() {
  const { data, isLoading } = useFetch("facilities", 4);
  return (
    <>
      <section className="py-5">
        <HeadingH1 all={"fasilitas"}>Fasilitas Sekolah</HeadingH1>
        <div className="grid mt-4 sm:mt-10  justify-center px-5 sm:px-14 grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <CardFasilities key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
