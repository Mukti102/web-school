import React from "react";
import banner from "../../public/banner.png";
export default function Banner() {
  return (
    <div className="w-full mt-10  my-0 px-4 sm:px-20 h-52 sm:h-96 overflow-hidden">
      <img
        className="w-full shadow-lg  rounded-lg h-full object-cover"
        src={banner}
        alt=""
      />
    </div>
  );
}
