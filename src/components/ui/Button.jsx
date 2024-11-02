import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Button({ children, link = "/" }) {
  return (
    <a
      href={link}
      className="sm:px-8 px-4 w-max dark:text-black text-light flex items-center gap-2 font-semibold py-2.5 sm:py-3 bg-primary sm:my-6 my-3 text-sm sm:text-[1rem] text-white"
    >
      {children}
      <span className="text-lg">
        <GoArrowRight />
      </span>
    </a>
  );
}
