import React from "react";
import AddButton from "../ui/AddButton";
import Table from "../ui/Table";

export default function DashboardEvents() {
  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white   w-full">
      <Table name={"agenda"} title={"Agenda"} />
    </div>
  );
}
