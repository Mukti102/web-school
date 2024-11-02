import React from "react";
import useFetch from "../../../hooks/useFetch";
import { htmlToText } from "html-to-text";
import { limit } from "../../../utils/method";
// import { motion } from "framer-motion";
export default function CardJurusan({ item }) {
  return (
    <div
      href={`/fasilitas/1`}
      className="rounded-xl overflow-hidden  p-0 h-[27rem] bg-primary  mt-9 flex group items-end  dark:bg-gray-800 bg-cover relative  dark:border-gray-700"
      style={{
        backgroundImage: `url('${item?.thumbnail}')`,
      }}
    >
      <div className="absolute right-0 left-0 top-0 bottom-0 bg-black bg-opacity-20"></div>
      <div className="w-full group h-full flex justify-center items-center ">
        <div
          className="text-center absolute right-0 left-0 top-0  group-hover:bottom-0
        transition-all duration-300 ease-in bottom-0 sm:-bottom-32 group-hover:bg-opacity-40  bg-black bg-opacity-50 sm:bg-opacity-20 z-50 flex flex-col justify-end"
        >
          <div className="text-text px-5 py-2">
            <h4 className="text-lg">{item?.id}</h4>
            <h2 className="py-1 border-b-[1.5px] border-primary text-2xl font-bold text-white">
              {item?.title}
            </h2>
            <article className="text-xs font-light text-white mt-7">
              {limit(htmlToText(limit(item?.description, 100)))}
            </article>
            <a
              href={`jurusan/${item?.id}`}
              className="text-primary mt-5 text-xs font-semibold"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
