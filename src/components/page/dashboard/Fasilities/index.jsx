import React from "react";
import Table from "../ui/Table";

export default function DashboardFasilitas() {
  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white    w-full">
      <Table name={"facilities"} title={"Fasilitas"} />
    </div>
  );
}
