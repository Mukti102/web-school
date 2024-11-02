import React, { useEffect } from "react";
import ViewAll from "../view/ViewAll";
import useFetch from "../../../hooks/useFetch";
import usePaginate from "../../../hooks/usePaginate";
import AppStore from "../../../store/AppStore";
import { useSearchParams } from "react-router-dom";
export default function AllArticle() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { data, links, meta } = useFetch(
    page ? `articles?page=${page}` : "articles"
  );

  const { setLinksPaginates } = AppStore((state) => state);
  useEffect(() => {
    setLinksPaginates([links, meta]);
  }, [data]);
  return (
    <React.Fragment>
      <ViewAll items={data}>Berita Terbaru</ViewAll>
    </React.Fragment>
  );
}
