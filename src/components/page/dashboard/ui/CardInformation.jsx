import React from "react";

export default function CardInformation({
  Icon,
  count,
  title,
  bgColor = "bg-[#E85C0D]",
}) {
  return (
    <div className={`px-6 py-6 shadow-primary rounded-lg ${bgColor}`}>
      <div className="flex gap-3 relative text-white">
        <span className="text-6xl absolute right-0 -top-4 opacity-35 ">
          {Icon}
        </span>
        <div className="text-white">
          <p className="text-3xl my-1 font-bold">{count}</p>
          <p className="text-sm ">{title}</p>
        </div>
      </div>
    </div>
  );
}
