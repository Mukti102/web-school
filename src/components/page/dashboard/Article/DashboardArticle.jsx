import React from "react";
import { IoMdAdd } from "react-icons/io";
import Table from "../ui/Table";
import AddButton from "../ui/AddButton";
import ModalAction from "../ui/ModalAction";
export default function DashboardArticle() {
  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white   w-full">
      <Table limit={"all"} name={"articles"} title={"Artikel"} />
    </div>
  );
}
