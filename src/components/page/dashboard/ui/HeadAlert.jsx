import React from "react";

export default function HeadAlert() {
  return (
    <div
      id="alert-border-1"
      class="flex items-center rounded-2xl p-4 py-10 mb-4 text-gray-800 border-t-4 border-blue-300 bg-blue-50 dark:text-gray-800 dark:bg-blue-200 dark:border-blue-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div class="ms-3 text-lg font-semibold">Input Pendaftaran</div>
    </div>
  );
}
