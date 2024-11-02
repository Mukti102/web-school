import React, { useRef, useState } from "react";
import { Modal, Ripple, initTWE } from "tw-elements";
export default function MakeSurePopu({
  close,
  handleSubmit,
  message = "Are you sure you want to delete this product?",
}) {
  initTWE({ Modal, Ripple });
  const closeRef = useRef(null);

  return (
    <>
      {/* <!--Vertically centered modal--> */}
      <div
        data-twe-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-gray-800 bg-opacity-50"
        id="makeSurePopup"
        tabindex="-1"
        aria-labelledby="makeSurePopupTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-twe-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <form className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-white z-[100000] p-2 mt-10">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100  dark:border-white/10"></div>

            {/* <!-- Modal body --> */}
            <div className="mt-7">
              <svg
                class="mx-auto mb-4 text-gray-400 w-16 h-16 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 class="mb-5 text-lg text-center font-normal text-gray-500 dark:text-gray-400">
                {message}
              </h3>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex gap-8 flex-shrink-0 flex-wrap items-center justify-center rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
              <button
                onClick={handleSubmit}
                type="button"
                className="ms-1 inline-block hover:bg-red-500 rounded-md bg-red-600 px-6 pb-2 pt-2.5 text-sm font-medium  leading-normal text-gray-50 shadow-primary-1 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-1 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2  dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Yakin
              </button>
              <button
                onClick={close}
                ref={closeRef}
                type="button"
                className="inline-block rounded-md border bg-gray-100 bg-primary-100 px-6 pb-2 pt-2.5 text-sm font-medium  leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                data-twe-modal-dismiss
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Tutup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
