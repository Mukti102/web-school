import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AddButton({ name, isActive = true }) {
  return (
    <Link
      to={`${isActive ? `/dashboard/${name}/create` : ""}`}
      className="px-4 w-max text-sm rounded-md dark:text-black text-light flex items-center gap-1 shadow-primary font-semibold py-2 bg-primary  my-4 text-[1rem] text-white"
    >
      <span className="text-lg">
        <IoMdAdd />
      </span>
      Tambah
    </Link>
  );
}
