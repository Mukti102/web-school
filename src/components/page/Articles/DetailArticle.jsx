import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../../api/api";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Loading";
import Detail from "../../ui/Detail";
import parse from "html-react-parser";
import CreatedAt from "../../ui/DetailsHead";
import DetailsHead from "../../ui/DetailsHead";

export default function DetailArticle() {
  const { id } = useParams();
  const { data, isLoading } = useFetch("articles/" + id);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  const { title, created_at, author, thumbnail, description, tags } = data;
  const linkTags = tags ? JSON.parse(tags) : tags;

  return (
    <Detail>
      {/* head */}
      <DetailsHead author={author} created_at={created_at} title={title} />
      {/* image */}
      <div className="w-full h-48 sm:h-96 mt-5">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* article */}
      <div className="w-full mt-5">
        <article className="leading-7 sm:text-base text-sm prose dark:prose-invert prose-slate prose-font-normal">
          {description !== undefined ? parse(description) : ""}
        </article>
      </div>
      {/* tags */}
      <div className="flex sm:text-sm text-xs items-center mt-10 gap-1">
        <span>TAGS:</span>
        {linkTags?.map((i, idx) => (
          <a
            key={idx}
            className="bg-primary/20 hover:text-white hover:bg-primary  px-3 py-1"
            href={`/berita/tags/${i}`}
          >
            {i}
          </a>
        ))}
      </div>
    </Detail>
  );
}
