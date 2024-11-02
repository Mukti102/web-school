import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CardAlumni from "./ui/CardAlumni";
import useFetch from "../hooks/useFetch";

export default function Alumnis() {
  const isDarkMode = localStorage.getItem("darkMode");
  const [isGradient, setIsGradient] = useState(isDarkMode);
  const { data } = useFetch("alumnis");
  useEffect(() => {
    isDarkMode && setIsGradient(!isGradient);
  }, [isDarkMode]);
  return (
    <div className="relative z-30 mt-10">
      <section className="overflow-hidden relative px-5 sm:px-14 bg-no-repeat bg-cover bg-fixed bg-center pb-0 py-0 text-black">
        <div className="flex justify-between mb-10">
          <div className="z-50 w-max mx-auto text-text text-center">
            <h1 className="font-bold text-2xl sm:text-3xl">Testimoni Alumni</h1>
          </div>
        </div>
        <Marquee
          // gradient
          gradientColor={`${isGradient === false ? "white" : "#001827"}`}
          direction="right"
        >
          {data?.map((e, i) => {
            return <CardAlumni key={i} item={e} />;
          })}
        </Marquee>
      </section>
    </div>
  );
}
