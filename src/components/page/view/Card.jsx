import React from "react";
import { limit, limitTitle } from "../../../utils/method";
import parse from "html-react-parser";

export default function Card({ item, name = "berita" }) {
  return (
    <a
      href={`/${name}/${item.id}`}
      className="flex sm:gap-4 gap-3 pb-5 mt-5 border-b-[1px] border-gray-300"
    >
      <div className="sm:w-1/3 w-[45%] bg-red-300 h-full">
        <img
          src={
            item?.thumbnail
              ? item?.thumbnail
              : "https://ugm.ac.id/wp-content/uploads/2024/08/ini-dari-ig-snac-uksw-560x376.jpg"
          }
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      {/* text */}
      <div className="flex-1  flex-col justify-between h-full">
        <h3 className="sm:text-[1.3rem] w-[90%] text-[.8rem] leading-4 sm:leading-6  font-medium">
          {limit(item.title, 100)}
        </h3>
        <div className="sm:text-sm text-[.5rem] flex gap-4  sm:my-2 text-gray-400">
          <span className="capitalize">
            {item?.category ? item?.category?.name : name}
          </span>
          <span>{item?.created_at ? item?.created_at : item?.date}</span>
        </div>
        {/* <p className="font-light text-[.6rem] sm:text-sm sm:mt-2 mt-0.5">
          {limit(parse(`${item?.description}`), 100)}
        </p> */}
      </div>
    </a>
  );
}
