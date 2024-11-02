import React from "react";
import { IoIosPerson, IoIosTime } from "react-icons/io";

export default function DetailsHead({ author, created_at, title }) {
  return (
    <>
      <div className="sm:text-4xl text-2xl max-w-3xl  font-medium break-words">
        {title}
      </div>
      <div className="flex gap-10 mt-3 text-secondary">
        <div className="flex sm:gap-2 gap-1 items-center">
          <span className="text-primary text-sm sm:text-lg">
            <IoIosTime />
          </span>
          <span className=" sm:text-sm text-[.6rem] ">{created_at}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-primary text-sm sm:text-xl">
            <IoIosPerson />
          </span>
          <span className="sm:text-sm text-[.6rem] ">{author}</span>
        </div>
      </div>
    </>
  );
}
