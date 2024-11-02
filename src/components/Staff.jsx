import React from "react";
import CardStaff from "./ui/SlideStaff";
import { FaChevronCircleRight } from "react-icons/fa";
import SlideStaff from "./ui/SlideStaff";
import { FaChevronRight } from "react-icons/fa";

export default function Staff() {
  return (
    <section className="mt-20 px-14">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Guru & Staff</h1>
          <p className="text-xs">Jurusan-Jurusan Sekolah</p>
        </div>
        <button className="text-xl">
          <FaChevronRight />
        </button>
      </div>
      <CardStaff />
    </section>
  );
}
