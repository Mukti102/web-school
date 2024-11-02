import React from "react";
import { TiNews } from "react-icons/ti";
import { limit, limitTitle } from "../../utils/method";

export default function CardPrestation({ item }) {
  return (
    <a
      rel="noopener noreferrer"
      href={`/prestasi/${item.id}`}
      className="max-w-sm shadow-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-52 dark:bg-gray-500"
        src={item?.thumbnail}
      />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
          {/* {item.title} */}
          Lorem ipsum, dolor sit amet consectetur adipisicing
        </h3>
        <span className="text-xs  text-gray-600">{item?.date}</span>
        {/* <p>{limit(item.description)}</p> */}
      </div>
    </a>
  );
}
