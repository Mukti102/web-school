import React, { useEffect } from "react";
import ViewAll from "../view/ViewAll";
import useFetch from "../../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import AppStore from "../../../store/AppStore";

export default function AllAnnouncment() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { data, links, meta } = useFetch(
    page ? `announcment?page=${page}` : "announcment"
  );
  const { setLinksPaginates } = AppStore((state) => state);
  useEffect(() => {
    setLinksPaginates([links, meta]);
  }, [data]);
  return (
    <ViewAll items={data} name={"announcment"}>
      Pengumuman Terbaru
    </ViewAll>
  );
}
