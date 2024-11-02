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
import ViewAll from "../view/ViewAll";
import AppStore from "../../../store/AppStore";

export default function ArticlesTags() {
  const { tagsname } = useParams();
  const { data, links, meta } = useFetch(
    tagsname ? `articles?tagsname=${tagsname}` : "articles"
  );

  const { setLinksPaginates } = AppStore((state) => state);
  useEffect(() => {
    setLinksPaginates([links, meta]);
  }, [data]);
  return (
    <React.Fragment>
      <ViewAll items={data}>{tagsname}</ViewAll>
    </React.Fragment>
  );
}
