import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RequestStore from "../../../../store/RequestStore";

export default function SmallBtn({
  text = "Lihat",
  bg = "bg-green-200",
  color = "text-green-500",
  url,
  type = "link",
}) {
  const { get } = RequestStore((state) => state);
  const navigate = useNavigate();
  const request = async () => {
    if (type === "link") {
      return;
    }
    try {
      const res = await get(url);
      if (res?.status === "success") {
        navigate(-1);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Status Telah Di Ubah",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Gagal Di Ubah",
      });
    }
  };

  return (
    <Link
      onClick={request}
      to={type === "link" ? url : null}
      class={`flex items-center rounded-sm sm:rounded ${bg} px-2 sm:px-4 py-0.5 text-[6px] sm:text-xs font-medium capitalize leading-normal ${color}  transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-opacity-90 focus:bg-primary-accent-300  focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none`}
    >
      {text}
    </Link>
  );
}
