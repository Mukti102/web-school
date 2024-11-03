import React from "react";
import HeadingH1 from "./ui/HeadingH1";
import { FadeRight, FadeUp } from "./anim/FadeUp";
import useFetch from "../hooks/useFetch";
import { limit } from "../utils/method";

export default function Videos() {
  const { data, isLoading } = useFetch("video", 3);
  const firstData = data[0];

  return (
    <section className="py-5 bg-primary text-white dark:text-black">
      <HeadingH1 all={"/video"}>Video</HeadingH1>
      <FadeUp>
        <div className="sm:flex px-4 sm:px-14 flex-wrap gap-6 text-white  dark:text-black  w-full">
          <div className="flex-1 my-1 sm:my-10">
            {/* image */}
            <div>
              <img
                src={firstData?.thumbnail}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            {/* text */}
            <div className="my-3">
              <a
                href={`video/${firstData?.id}`}
                className="font-medium hover:underline text-xl"
              >
                {firstData?.title}
              </a>
              <p className="text-sm my-1">{firstData?.created_at}</p>
            </div>
          </div>
          <div className="block flex-1 mt-2 gap-3 py-0 sm:py-5">
            {data?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export function Card({ item }) {
  return (
    <a
      href={`video/${item?.id}`}
      className="flex hover:underline gap-3 py-1 sm:py-3 border-b-[1px] border-gray-300 border-opacity-50"
    >
      {/* Image container with fixed size */}
      <div className="sm:w-1/4 w-1/3 h-20 flex-shrink-0">
        <img
          src={item?.thumbnail}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      {/* Text content with flexible width */}
      <div className="sm:flex-grow flex-col justify-center py-2 items-center space-y-1">
        <div>
          <h2 className="sm:text-[1.100rem] text-sm font-medium">
            {limit(item?.title, 50)}
          </h2>
        </div>
        <div>
          <p className="text-[9px]">{item?.created_at}</p>
        </div>
      </div>
    </a>
  );
}
