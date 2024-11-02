import React from "react";
import { limitTitle } from "../../utils/method";
import { FadeRight } from "../anim/FadeUp";

export default function SmallCard({ item, name }) {
  return (
    <FadeRight>
      <a
        rel="noopener noreferrer"
        href={`${name}/${item.id}`}
        className="max-w-sm mb-5 mt-2 mx-auto hover:no-underline focus:no-underline flex h-[4rem] gap-1 items-center overflow-hidden"
      >
        <div className="w-[100px] h-[4rem] flex-shrink-0">
          <img
            role="presentation"
            className="object-cover transition-all duration-500 w-full h-full block dark:bg-gray-500"
            src={item?.thumbnail}
          />
        </div>
        <div className="pl-2 flex-auto flex flex-col h-full justify-between space-y-0">
          <h3 className="text-[.9rem] font-medium hover:underline group-focus:underline w-full text-text">
            {limitTitle(item.title)}
          </h3>
          <span className="sm:text-[.7rem] text-[.6rem] font-light text-secondary">
            {item?.created_at}
          </span>
          {/* <p>{limit(item.description)}</p> */}
        </div>
      </a>
    </FadeRight>
  );
}
