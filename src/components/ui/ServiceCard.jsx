import React from "react";

export default function ServiceCard({ item }) {
  return (
    <div className="rounded-md flex items-center justify-center h-28 hover:shadow-xl hover:shadow-primary-content border-primary border-[1.5px]">
      <div className="flex flex-col gap-2 items-center">
        <img
          src={item.image}
          alt={item.title}
          className="sm:w-10 sm:h-10 w-8 h-8"
        />
        <h3 className="sm:text-sm text-xs dark:text-white text-black font-medium">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
