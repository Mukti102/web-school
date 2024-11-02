import React from "react";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { GiClassicalKnowledge } from "react-icons/gi";

export default function CardGaleri() {
  return (
    <div className=" overflow-hidden group p-0 h-72 cursor-pointer my-0 bg-primary  dark:bg-gray-800 relative dark:border-gray-700">
      <img
        src="https://i.pinimg.com/564x/31/7b/38/317b38c53445c11c6ebc7947bd5112dd.jpg"
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
        alt=""
      />
    </div>
  );
}
