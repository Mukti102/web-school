import React from "react";
import TableUser from "./TableUser";

export default function User() {
  return (
    <div className="overflow-hidden   px-5 shadow-primary bg-white  w-full">
      <TableUser name={"user"} title={"User"} />
    </div>
  );
}
