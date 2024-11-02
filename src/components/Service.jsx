import React from "react";
import ServiceCard from "./ui/ServiceCard";
import { service } from "../data/service";

export default function Service() {
  return (
    <section className="sm:mt-24 mt-5 px-5 sm:px-14">
      <span className="font-bold text-xl sm:text-2xl">
        <h1>Layanan Unggulan</h1>
      </span>
      <div className="grid sm:grid-cols-6 md:grid-cols-7 grid-cols-3 gap-3 sm:gap-5 w-full mt-5 sm:mt-6">
        {service.map((item) => (
          <ServiceCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
