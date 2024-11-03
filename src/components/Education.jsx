import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { htmlToText } from "html-to-text";
export default function Education() {
  const { data, isLoading } = useFetch("pendidikan-page");
  return (
    <div className="w-full sm:flex flex sm:flex-row flex-col-reverse  justify-between items-center my-10 px-3 sm:px-14">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.7 },
        }}
        className="sm:w-1/2"
      >
        <span>
          <h1 className=" after:contents-[''] font-semibold after:block after:w-10 after:h-1 after:bg-primary text-primary after:rounded-full my-3 sm:my-7  text-2xl sm:text-4xl">
            {data[0]?.title}
          </h1>
        </span>
        <p className="text-text leading-5 sm:text-sm text-xs font-light">
          {htmlToText(data[0]?.description)}
        </p>
        <Button link="/Pendidikan">SELENGKAPNYA</Button>
      </motion.div>
      <div className="sm:w-[40%] w-full h-[20rem]  sm:h-[35rem]  relative ">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          whileInView={{
            transitionDelay: 1,
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7 },
          }}
          className="w-80 h-56 sm:block hidden -left-24 border-[6px] border-gray-100 -bottom-10 absolute z-40"
        >
          <img
            src={data[0]?.lanscape_photo}
            className="w-full object-cover h-full"
            alt=""
          />
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.7 },
          }}
          className="h-full w-full object-cover"
          src={data[0]?.potret_photo}
          alt=""
        />
      </div>
    </div>
  );
}
