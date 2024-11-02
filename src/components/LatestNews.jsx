import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import HeadingH4 from "./HeadingH4";

export default function LatestNews() {
  const { isLoading, data } = useFetch("articles", 4);
  if (isLoading) return <Loading />;
  return (
    <div className="flex-auto mt-5 sm:m-0">
      <HeadingH4>Berita Terbaru</HeadingH4>
      {/* card */}
      {data.map((article, index) => (
        <CardNews item={article} key={index} />
      ))}
    </div>
  );
}

export function CardNews({ item }) {
  return (
    <a
      href={`/berita/${item?.id}`}
      className="max-w-sm sm:py-5 py-3 block border-b-[1px] border-secondary"
    >
      <h2 className="text-medium sm:text-base text-sm">{item?.title}</h2>
      <span className="sm:my-2  text-[.7rem] text-secondary sm:font-normal font-light">
        {item?.created_at}
      </span>
    </a>
  );
}
