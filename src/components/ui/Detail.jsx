import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import LatestNews from "../LatestNews";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import parse from "html-react-parser";
import LatestEvents from "./LatestEvents";

export default function Detail({ children }) {
  const LatestNew = lazy(() => import("../LatestNews"));
  const mt = window.location.pathname.includes("extracuriculer/");
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`${
          !mt ? "sm:pt-32 pt-20" : null
        } h-max sm:flex text-text bg-background w-full px-3 gap-10 sm:px-10`}
      >
        <article className="sm:w-[70%] w-full">{children}</article>
        <div className="sm:w-[30%] w-full">
          <LatestNew />
          <LatestEvents />
        </div>
      </div>
    </Suspense>
  );
}
