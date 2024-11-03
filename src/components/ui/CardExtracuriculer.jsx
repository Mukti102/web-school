import React from "react";
import { GiClassicalKnowledge } from "react-icons/gi";
import { FadeUp } from "../anim/FadeUp";

export default function CardExtracuriculer({ item }) {
  console.log(item?.thumbnail);
  return (
    <FadeUp>
      <a
        href={`/extracuriculer/${item?.id}`}
        className="p-0 sm:h-52 h-28 block overflow-hidden  dark:bg-gray-800 relative dark:border-gray-700"
      >
        <img
          src={`${item?.thumbnail}`}
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="w-full hidden bg-yellow-300 h-4 bottom-0 absolute right-0"></span>
      </a>
    </FadeUp>
  );
}
