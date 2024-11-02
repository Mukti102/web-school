import React from "react";
import Detail from "../../ui/Detail";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import parse from "html-react-parser";
import { convertYtToEmbed } from "../../../utils/method";
import { htmlToText } from "html-to-text";

export default function DetailVideo() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`video/${id}`);
  return (
    <>
      <Detail>
        <div className="sm:text-4xl text-xl my-4 font-medium">
          <h1>{data?.title}</h1>
        </div>
        <iframe
          className="w-full sm:h-[400px] h-[200px]"
          src={data?.video_path ? convertYtToEmbed(data?.video_path) : ""}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="mt-5 text-xs sm:text-sm font-light">
          {parse(`${data?.description}`)}
        </p>
      </Detail>
    </>
  );
}
