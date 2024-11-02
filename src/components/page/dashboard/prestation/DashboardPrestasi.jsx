import React from "react";
import Table from "../ui/Table";

export default function DashboardPrestasi() {
  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white   w-full">
      <Table name={"prestasi"} limit={"all"} title={"Prestasi"} />
    </div>
  );
}
