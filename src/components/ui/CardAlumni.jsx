import React from "react";

export default function CardAlumni({ item }) {
  return (
    <div className="px-3 py-2">
      <figure className="items-center  w-full flex flex-col justify-center p-8 text-center bg-white border-b shadow-md border-gray-200 rounded-lg  md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item?.response}
          </h3>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            reiciendis earum eos repellat corrupti necessitatibus totam non
            ipsam harum quis, laudantium vero minima nihil, maxime iusto soluta
            tenetur vel error!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full object-cover w-9 h-9"
            src={item?.photo}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div className="text-sm capitalize text-gray-500 dark:text-gray-400 ">
              {item?.name}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
