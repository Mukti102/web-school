import React from "react";
import HeadingH4 from "../HeadingH4";
import useFetch from "../../hooks/useFetch";
import Button from "./Button";

export default function LatestEvents() {
  const { isLoading, data } = useFetch("agenda", 3);
  return (
    <div className="flex-auto mt-5">
      <HeadingH4>Agenda Terbaru</HeadingH4>
      {/* card */}
      {data.map((item, index) => (
        <CardEvent item={item} key={index} />
      ))}
      <div className="flex justify-between pl-16">
        <Button link="/agenda">Semua Agenda</Button>
      </div>
    </div>
  );
}

export function CardEvent({ item }) {
  const date = item?.created_at?.split(" ")[0];
  const month = item?.created_at?.split(" ")[1]?.substring(0, 3);
  return (
    <div className="flex w-[80%]  h-[12rem] py-4 border-b-[1px] border-gray-300">
      <div className="w-1/4 h-40 border-r-[1px]  border-gray-300 flex items-center justify-center">
        <div className="text-center text-primary">
          <h2 className="text-4xl  font-bold">{date}</h2>
          <span className="uppercase">{month}</span>
        </div>
      </div>
      <div className="px-4 w-[60%] h-full  overflow-hidden  text-wrap flex">
        <h2 className="text-lg w-full font-medium leading-6 text-primary  h-full ">
          <a
            href={`/agenda/${item.id}`}
            className="w-full hover:underline text-[1.06rem]"
          >
            {item.title}
          </a>
        </h2>
      </div>
    </div>
  );
}
