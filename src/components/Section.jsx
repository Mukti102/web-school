import React from "react";
import CardArticle from "./ui/CardArticle";
import { FaChevronRight } from "react-icons/fa";
import CardPrestation from "./ui/CardPrestation";
import useFetch from "../hooks/useFetch";
import CardSekeleton from "./ui/CardSekeleton";
import { Link } from "react-router-dom";
import HeadingH1 from "./ui/HeadingH1";
import Card from "./Card";
import Skeleton from "./ui/Skeleton";
export default function Section() {
  const { isLoading, data } = useFetch("prestasi", 3);
  if (isLoading) {
    return <CardSekeleton />;
  }
  return (
    <section className="bg-background py-2">
      <div className="container px-0 max-w-7xl  p-6 space-y-6 sm:space-y-1">
        <div className="grid px-5 sm:px-14 justify-center grid-cols-1   gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card type="base" name="prestasi">
            Prestasi
          </Card>
          <Card type="base" name="articles">
            Berita
          </Card>
          <Card name={"announcment"}>Pengumuman</Card>
        </div>
      </div>
    </section>
  );
}
