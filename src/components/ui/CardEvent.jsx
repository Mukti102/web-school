import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FadeUp } from "../anim/FadeUp";
export default function CardEvent({ item }) {
  return (
    <FadeUp>
      <a
        href={`/agenda/${item.id}`}
        className="z-40 p-0 overflow-hidden  dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="sm:h-[30rem] h-[10rem] shadow-md overflow-hidden  relative">
          <div className="sm:w-max h-max absolute top-0 left-0 py-0 sm:py-1 px-1.5 sm:px-4 text-sm text-secondary  flex items-center bg-primary">
            <div className="flex gap-1 sm:gap-2 text-white items-center dark:text-black">
              <span className="sm:text-sm text-[7px]">
                <BsCalendarDate />
              </span>
              <span className="text-[6px] sm:text-[10px] ">
                Kamis,22 Mei 2025
              </span>
            </div>
          </div>
          <img
            src={item.thumbnail}
            className="w-full object-center h-full object-cover"
            alt=""
          />
        </div>
      </a>
    </FadeUp>
  );
}
