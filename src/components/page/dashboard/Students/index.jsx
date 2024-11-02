import React from "react";
import StudentTable from "../ui/StudentTable";

export default function Students() {
  return (
    <div className="overflow-hidden pt-5 px-5 shadow-primary bg-white  w-full">
      <StudentTable name={"students"} title={"Siswa Baru"} />
    </div>
  );
}
