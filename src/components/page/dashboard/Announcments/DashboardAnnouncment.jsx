import React from "react";
import Table from "../ui/Table";

export default function DashboardAnnouncment() {
  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white   w-full">
      <Table name={"announcment"} limit={"all"} title={"Pengumuman"} />
    </div>
  );
}
