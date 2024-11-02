import React from "react";
import { TiNews } from "react-icons/ti";
import { limit } from "../../utils/method";
import { limitTitle } from "../../utils/method";
export default function CardArticle({ item }) {
  return (
    <a
      href={`/berita/${item.id}`}
      className="max-w-[30%] p-0  rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="w-full  shadow-md overflow-hidden rounded-lg relative">
        <div className="w-32 absolute top-0 left-0 h-7 px-3 text-sm text-secondary rounded-br-lg flex items-center bg-secondary">
          <div className="flex gap-2 items-center text-white">
            <span className="text-lg">
              <TiNews />
            </span>
            <span className="text-sm">Berita</span>
          </div>
        </div>
        <img
          src={item.thumbnail}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <a href="#">
        <h5 className="mb-2 mt-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-6">
          {limitTitle(item.title)}
        </h5>
      </a>
      <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
        {limit(item.description)}
      </p>
      <div>
        <a
          href={`/berita/${item.id}`}
          type="button"
          class="text-white bg-theory hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          Selengkapnya
        </a>
      </div>
    </a>
  );
}
