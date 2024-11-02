import React, { useEffect } from "react";
import CardSekeleton from "../../ui/CardSekeleton";
import CardPrestation from "../../ui/CardPrestation";
import useFetch from "../../../hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
import ViewAll from "../view/ViewAll";
import AppStore from "../../../store/AppStore";

export default function AllPrestation() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { data, links, meta } = useFetch(
    page ? `prestasi?page=${page}` : "prestasi"
  );
  const { setLinksPaginates } = AppStore((state) => state);
  useEffect(() => {
    setLinksPaginates([links, meta]);
  }, [data]);
  return (
    <ViewAll name={"prestasi"} items={data}>
      Prestasi Terbaru
    </ViewAll>
  );
}
