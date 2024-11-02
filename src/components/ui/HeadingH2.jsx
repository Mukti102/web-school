import React from "react";
import { FadeRight } from "../anim/FadeUp";

export default function HeadingH2({ children }) {
  return (
    <FadeRight>
      <div className="w-full text-text flex justify-between mb-3 sm:mb-5">
        <div className="sm:text-3xl text-2xl font-normal sm:font-semibold w-full">
          <h1 className="flex items-center capitalize justify-between w-full">
            {children}
            <span className="ml-3 flex-auto h-[1.5px] bg-primary rounded-full"></span>
          </h1>
        </div>
      </div>
    </FadeRight>
  );
}
