import React from "react";
import { limit, limitTitle } from "../utils/method";
import HeadingH2 from "./ui/HeadingH2";
import SmallCard from "./ui/SmallCard";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FadeUp } from "./anim/FadeUp";

export default function Card({ name, children }) {
  const { isLoading, data } = useFetch(name, 3);
  const [firstData, ...restData] = data;
  return (
    <FadeUp>
      <a
        rel="noopener noreferrer"
        href={`/${name == "articles" ? "berita" : name}/${firstData?.id}`}
        className={`max-w-sm overflow-hidden  mx-auto  hover:no-underline focus:no-underline dark:bg-gray-50`}
      >
        <HeadingH2>{children}</HeadingH2>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          role="presentation"
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={firstData?.thumbnail}
        />
        <div className={`py-3  px-0 space-y-2`}>
          <h3 className="sm:text-xl text-lg font-medium sm:font-semibold text-text group-hover:underline group-focus:underline">
            {limit(firstData?.title || "lorem iosum dolor", 50)}
          </h3>
          <span className="text-xs  text-secondary">
            {firstData?.created_at ? firstData?.created_at : firstData?.date}
          </span>
        </div>
        {restData?.map((item, index) => (
          <SmallCard name={name} key={index} {...{ name, item }} />
        ))}
        <div className="w-full mt-0 sm:mt-6 items-center justify-between  flex">
          <div></div>
          <a href={`/${name == "articles" ? "berita" : name}`}>
            <button className="text-3xl opacity-95 text-primary">
              <FiArrowRight />
            </button>
          </a>
        </div>
      </a>
    </FadeUp>
  );
}
