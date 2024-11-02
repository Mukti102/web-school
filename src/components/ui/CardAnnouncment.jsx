import React from "react";
import { GrAnnounce } from "react-icons/gr";

export default function CardAnnouncment() {
  return (
    <div className="max-w-[30%] p-0  rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full shadow-md  overflow-hidden rounded-lg relative">
        <div className="w-max absolute top-0 left-0 h-7 px-3 text-sm text-secondary rounded-br-lg flex items-center bg-secondary">
          <div className="flex gap-2 items-center text-white">
            <span className="text-lg">
              <GrAnnounce />
            </span>
            <span className="text-xs">Pengumuman</span>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/564x/8b/82/0c/8b820ce177f7814d1e239f9c3a0e2c99.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <a href="#">
        <h5 className="mb-2 mt-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-6">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
    </div>
  );
}
