import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FadeRight } from "../anim/FadeUp";
export default function HeadingH1({ children, all }) {
  return (
    <FadeRight>
      <div className="w-full flex justify-between px-5  sm:px-14">
        <div className="sm:text-3xl text-2xl font-medium sm:font-semibold ">
          <h1 className="flex  items-center capitalize justify-between">
            {children}
            {/* <span className="ml-3 sm:block w-80 h-[1px] bg-theory block"></span> */}
          </h1>
        </div>
        <div className="text-lg sm:block hidden group font-medium cursor-pointer">
          <a
            href={all}
            className="after:contents-['']   after:hover:h-[2px] after:block after:w-full block after:mt-1 after:h-[1px] after:bg-primary after:rounded-full"
          >
            <span className="flex uppercase gap-2 items-center">
              Lihat Semua
              <span className="sm:text-2xl text-lg">
                <HiOutlineArrowLongRight />
              </span>
            </span>
          </a>
        </div>
      </div>
    </FadeRight>
  );
}
