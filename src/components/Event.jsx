import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import CardEvent from "./ui/CardEvent";
import { apiClient } from "../api/api";
import CardSekeleton from "./ui/CardSekeleton";
import useFetch from "../hooks/useFetch";
import HeadingH1 from "./ui/HeadingH1";
import Caraosel from "./page/dashboard/ui/Caraosel";
export default function Event() {
  // cek isMobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const { isLoading, data } = useFetch("agenda", 3);
  return (
    <section className="mt-0 overflow-hidden pb-10 relative px-0 bg-no-repeat bg-cover bg-fixed bg-center ">
      <HeadingH1 all={"/agenda"}>Agenda Terbaru</HeadingH1>
      {isLoading ? (
        <CardSekeleton />
      ) : (
        <div className="sm:px-5 px-0">
          <Caraosel slidesToShow={isMobile ? 1 : 3} data={data} />
        </div>
      )}
    </section>
  );
}
