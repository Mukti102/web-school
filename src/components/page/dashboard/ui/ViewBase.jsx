import HTMLReactParser from "html-react-parser";
import React from "react";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import { convertYtToEmbed, getCurrentEndpoint } from "../../../../utils/method";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import LoadingText from "./LoadingBtn";
import { FaDownload } from "react-icons/fa";

export default function ViewBase({ children, isLoading, data, type = "base" }) {
  const { title, author, created_at, video_path, thumbnail, description } =
    data;

  return (
    <div className="overflow-hidden relative py-10  px-5 shadow-primary bg-white  rounded-lg  w-full">
      {isLoading && <LoadingText />}
      {/* title */}
      <div className="text-4xl max-w-3xl  font-semibold capitalize break-words">
        {title}
      </div>
      {/* <div className="text-4xl max-w-xl bg-red-300  font-medium">{title}</div> */}
      <div className="flex gap-10 mt-3 text-secondary">
        <div className="flex gap-2 items-center">
          <span className="text-primary text-lg">
            <IoIosTime />
          </span>
          <span className="text-sm text-gray-400 ">{created_at}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-primary text-xl">
            <IoIosPerson />
          </span>
          <span className="text-sm text-gray-400 ">{author}</span>
        </div>
      </div>
      {/* image */}
      <div className="w-full  h-[500px] mt-5">
        {type === "base" ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            className="w-full h-full"
            src={
              data?.length !== 0
                ? convertYtToEmbed(video_path)
                : "https://www.youtube.com/embed/Q49pnA4jsp8"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>

      {/* article */}
      <div className="w-full mt-5">
        <article className="leading-7 prose  prose-slate">
          {HTMLReactParser(`${description}`)}
        </article>

        {children}
      </div>
    </div>
  );
}
