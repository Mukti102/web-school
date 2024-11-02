import React, { useEffect } from "react";
import CardArticle from "./ui/CardArticle";
import { FaChevronRight } from "react-icons/fa";
import { apiClient } from "../api/api";
import CardSekeleton from "./ui/CardSekeleton";
import useFetch from "../hooks/useFetch";
export default function ArticleNews() {
  const { isLoading, data } = useFetch("articles", 3);
  console.log({ isLoading, data });
  return (
    <section className="mt-20 px-14">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Article Dan Berita</h1>
          <p className="text-xs">Aktivitas Terbasru Sekolah</p>
        </div>
        <a href="/berita" className="text-xl hover:text-primary">
          <FaChevronRight />
        </a>
      </div>
      <div className="flex flex-wrap gap-10  w-full mt-7">
        {isLoading && (
          <>
            <CardSekeleton />
            <CardSekeleton />
            <CardSekeleton />
          </>
        )}
        {data.map((item, index) => (
          <CardArticle item={item} key={index} />
        ))}
      </div>
    </section>
  );
}
