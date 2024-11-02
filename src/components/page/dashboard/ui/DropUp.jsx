import React from "react";
import { Dropdown, Ripple, initTWE } from "tw-elements";
import { BsThreeDotsVertical } from "react-icons/bs";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const defaultOptions = [
  { id: 1, name: "DiBuka" },
  { id: 2, name: "DiTutup" },
];

export default function DropUp({ options = defaultOptions, id }) {
  const { get } = RequestStore((state) => state);
  const navigate = useNavigate();
  initTWE({ Dropdown, Ripple });
  const handleAccept = async () => {
    try {
      const res = await get(`students/accept/${id}`);
      if (res?.status == "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data Berhasil Di Tambahkan",
        });
        navigate(`/dashboard/pendaftaran`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async () => {
    try {
      const res = await get(`students/reject/${id}`);
      if (res?.status == "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data Berhasil Di Tambahkan",
        });
        navigate(`/dashboard/pendaftaran`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="relative" data-twe-dropdown-position="dropleft">
      <button
        class="flex items-center rounded-full py-2  text-black  justify-center text-lg font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-gray-100 focus:bg-primary-accent-300  focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none "
        type="button"
        id="dropdownMenuButton1u"
        data-twe-dropdown-toggle-ref
        aria-expanded="false"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <BsThreeDotsVertical />
      </button>
      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
        aria-labelledby="dropdownMenuButton1u"
        data-twe-dropdown-menu-ref
      >
        <li>
          <a
            class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
            href="#"
            onClick={handleAccept}
            data-twe-dropdown-item-ref
          >
            Di Terima
          </a>
        </li>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
            href="#"
            onClick={handleReject}
            data-twe-dropdown-item-ref
          >
            Di Tolak
          </a>
        </li>
      </ul>
    </div>
  );
}
