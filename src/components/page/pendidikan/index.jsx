import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import HeadingH2 from "../../ui/HeadingH2";
import CardJurusan from "../jurusan/CardJurusan";
import parse from "html-react-parser";
import { motion } from "framer-motion";
export default function Pendidikan() {
  const [state, setState] = useState();
  const { id } = useParams();
  const { isLoading, data } = useFetch(`/jurusan`);
  const result = useFetch("pendidikan-page");

  useEffect(() => {
    if (result) {
      setState(result?.data[0]);
    }
  }, [result]);
  return (
    <>
      <div className="sm:pb-52 pb-0 mt-20 bg-background">
        <div className="w-full h-64 sm:h-screen overflow-hidden z-40">
          <img
            src="https://ugm.ac.id/wp-content/uploads/2023/06/109A2298.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="bg-primary w-[90%] sm:w-1/2 text-white dark:text-black mx-5 sm:mx-20 bottom-20 sm:-bottom-64  z-50 p-5 sm:p-7 relative sm:absolute">
          <h1 className="text-white dark:text-black text-2xl sm:text-3xl font-semibold sm:py-4 border-b-[1.5px] border-yellow-300">
            {state ? state?.title : "Pendidikan"}
          </h1>
          <article className="prose sm:mt-5 mt-2 sm:text-base text-xs font-normal">
            {parse(`${state?.description}`)}
          </article>
        </div>
      </div>
      <div className="sm:px-14 px-5 py-5 bg-background">
        <HeadingH2>Jurusan-Jurusan Sekolah</HeadingH2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="text-secondary text-xs leading-5 sm:text-base"
        >
          Berikut Jurusan-Jurusan Yang Di Sediakan Sekolah Untuk Anda
        </motion.p>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((e, i) => (
            <CardJurusan key={i} item={e} />
          ))}
        </div>
      </div>
    </>
  );
}
