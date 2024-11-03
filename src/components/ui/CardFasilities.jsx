import React from "react";
import { GiClassicalKnowledge } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import { motion } from "framer-motion";
import { FadeUp } from "../anim/FadeUp";
export default function CardFasilities({ item }) {
  return (
    <FadeUp>
      <a
        href={`/fasilitas/${item?.id}`}
        className=" p-0 h-20 sm:h-44 bg-primary group  mt-0 flex group items-end  dark:bg-gray-800 relative  dark:border-gray-700"
      >
        <div className="w-full  h-full overflow-hidden bg-primary">
          <img
            src={item?.thumbnail}
            className="w-full h-full  object-cover group-hover:scale-105 transition-all duration-500 ease-in-out group-hover:opacity-50"
            alt=""
          />
        </div>
        <div className="absolute  scale-0 left-0 right-0   top-0  bottom-0 sm:group-hover:scale-100 group-hover:scale-90 flex justify-center transition-all duration-20000 items-center">
          <span className="text-white text-center text-xl sm:text-3xl">
            {/* <CiCirclePlus /> */}
            <h1>{item?.title}</h1>
          </span>
        </div>
        {/* <div className="text-gray-100 dark:text-black absolute -bottom-7  mx-auto px-10 flex max-w-max  py-4  bg-primary">
          Perpustakaan
        </div> */}
      </a>
    </FadeUp>
  );
}
