import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { limit } from "../../../utils/method";
import HeadingH1 from "../../ui/HeadingH1";
import Skeleton from "../../ui/Skeleton";
import SingleCard from "../../ui/SingleCard";
import { FadeUp } from "../../anim/FadeUp";
import { htmlToText } from "html-to-text";

export default function Articles() {
  const { isLoading, data } = useFetch("articles", 4);
  const [firstData, ...restData] = data;
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <>
      <section className="sm:py-10 py-5 text-text">
        <HeadingH1 all={"/berita"}>Berita Terbaru</HeadingH1>
        <div className="container px-3 sm:px-14 max-w-7xl p-6 space-y-6 sm:space-y-12">
          <FadeUp>
            <a
              rel="noopener noreferrer"
              href={`/berita/${firstData?.id}`}
              className="block shadow-md max-w-sm bg-card dark:bg-card gap-3 mx-auto sm:max-w-full group hover:no-underline  focus:no-underline lg:grid lg:grid-cols-12"
            >
              <img
                src={firstData?.thumbnail}
                alt="Website Design System"
                className="object-cover object-top w-full h-64 sm:h-80 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="sm:p-6 p-3 space-y-2  lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-2xl group-hover:underline text-text group-focus:underline">
                  {firstData?.title}
                </h3>
                <span className="text-xs text-secondary">
                  {firstData?.created_at}
                </span>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                  {firstData
                    ? htmlToText(limit(firstData?.description, 300))
                    : ""}
                </p>
              </div>
            </a>
          </FadeUp>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restData?.map((item, index) => (
              <SingleCard name={"berita"} item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
