import React from "react";
import { Link } from "react-router-dom";
import AppStore from "../../../store/AppStore";

export default function CardGelombang({ item }) {
  const { isAuthenticated } = AppStore((state) => state);
  const user = localStorage.getItem("user");
  console.log(isAuthenticated);
  return (
    <>
      <div
        id="alert-additional-content-3"
        class="p-5 mt-7 mb-4 w-full sm:w-1/2 text-green-800 border border-green-300 rounded-lg bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:border-green-800"
        role="alert"
      >
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <h3 class="sm:text-lg text-sm font-medium">
            Pendaftaran Angkatan {item?.angkatan}
          </h3>
        </div>
        <div class="mt-2 mb-4 text-[10px] sm:text-sm">
          Pendaftaran{" "}
          <span className="font-medium">
            Gelombang ke {item?.gelombang_ke}{" "}
          </span>
          Telah Di Buka Dengan Kuota{" "}
          <span className="font-medium">{item?.kuota} Peserta</span>
        </div>
        <div class="flex justify-end">
          <a
            href={
              isAuthenticated || user
                ? `/dashboard/pendaftaran/${item?.id}`
                : "/login"
            }
            type="button"
            class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-[10px] sm:text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <svg
              class="me-2 hidden h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            Daftar Sekarang
          </a>
          <button
            type="button"
            class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-[10px] sm:text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
            data-dismiss-target="#alert-additional-content-3"
            aria-label="Close"
          >
            Dismiss
          </button>
        </div>
      </div>
    </>
  );
}

export const Alert = () => {
  return (
    <div
      class="p-4 mb-4 text-[10px] sm:text-sm border border-red-300 dark:border-red-800 mt-10 text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400 "
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-3 h-3 sm:w-4 sm:h-4 me-2 sm:me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="font-medium">Info:</span> Belum Ada Gelombang Pendaftaran
      Yang Di Buka Silahkan Cek Secara Berkala
    </div>
  );
};
