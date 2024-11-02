import React from "react";

export default function ToolBarList({ list, target, setTarget }) {
  return (
    <div className="overflow-hidden pt-5 border-b-[1px]  w-full flex">
      {list.map((item, index) => (
        <button
          key={index}
          onClick={() => setTarget(item.name)}
          className={`flex ${
            target === item.name
              ? "text-gray-800 shadow-lg border-[1.5px] border-b-0 border-gray-100"
              : "text-teal-500 border-b-[1.5px] border-gray-100"
          }  gap-2 font-normal py-2 px-5  items-center`}
        >
          <span className="text-lg">
            <item.icon />
          </span>
          {item.name}
        </button>
      ))}
    </div>
  );
}
