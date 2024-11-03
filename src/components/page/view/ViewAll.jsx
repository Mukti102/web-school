import React, { useEffect } from "react";
import Detail from "../../ui/Detail";
import Card from "./Card";
import Paginate from "../../ui/Paginate";

export default function ViewAll({ name, children, items = [] }) {
  // Scroll ke atas setiap kali items berubah
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // "smooth" untuk efek smooth scroll
    });
  }, [items]); // Depen
  return (
    <Detail>
      <section className="sm:px-6">
        <div className="sm:text-4xl text-2xl font-medium">
          <h1>{children}</h1>
        </div>
        <div className="w-full sm:mt-5">
          {items?.map((item, index) => (
            <Card name={name} item={item} key={index} />
          ))}
          <div className="flex justify-between">
            <Paginate name={name} />
          </div>
        </div>
      </section>
    </Detail>
  );
}
