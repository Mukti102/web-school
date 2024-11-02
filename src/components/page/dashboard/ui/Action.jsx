import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

import RequestStore from "../../../../store/RequestStore";

import { MdFileUpload } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import ModalAction from "./ModalAction";
import MakeSurePopu from "./MakeSurePopu";

export default function ViewBtn({ url }) {
  return (
    <Link
      to={url}
      className="bg-green-600 text-white text-sm font-semibold px-2 py-1.5 rounded-md"
    >
      <IoEyeSharp />
    </Link>
  );
}

export function EditBtn({ url }) {
  return (
    <Link
      to={url}
      className="bg-yellow-400 text-white text-sm font-semibold px-2 py-1.5 rounded-md"
    >
      <MdEdit />
    </Link>
  );
}
export function DeleteBtn({ url }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Remove backdrop on modal open
  useEffect(() => {
    const backdrop = document.querySelector("[data-twe-backdrop-show]");
    if (isOpen && backdrop) {
      backdrop.remove(); // Remove backdrop when modal is open
    }
  }, [isOpen]);

  const { destroy } = RequestStore((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      console.error("No URL provided for deletion.");
      return;
    }

    // Show confirmation popup
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // If user confirms, proceed with deletion
    if (result.isConfirmed) {
      const response = await destroy(url);
      console.log(response);
      if (response?.data?.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data has been deleted successfully",
        });
        navigate(-1); // Go back after deletion
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete data",
        });
      }
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="bg-red-600 text-white text-sm font-semibold px-2 py-1.5 rounded-md"
    >
      <FaTrashAlt />
    </button>
  );
}
export function AcceptedBtn({ url }) {
  const { get } = RequestStore((state) => state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await get(url);
    if (res?.status == "success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Di Terima",
      });
      window.location.reload();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="bg-green-400 text-white text-lg font-semibold px-1.5 py-1.5  rounded-md"
      >
        <FiCheckCircle />
      </button>
    </form>
  );
}
export function RejectBtn({ url }) {
  const { get } = RequestStore((state) => state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await get(url);
    if (res?.status == "success") {
      Swal.fire({
        icon: "error",
        title: "Reject",
        text: "Di Tolak",
      });
      window.location.reload();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="bg-red-500 text-white text-lg font-semibold px-1.5 py-1.5  rounded-md"
      >
        <FiX />
      </button>
    </form>
  );
}
