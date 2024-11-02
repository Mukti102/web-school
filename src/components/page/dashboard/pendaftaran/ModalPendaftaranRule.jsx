import React, { useRef, useState } from "react";
import AppStore from "../../../../store/AppStore";
import RequestStore from "../../../../store/RequestStore";

export default function ModalPendaftaranRule() {
  const { store } = RequestStore((state) => state);
  const { setTemporyData, temporyData } = AppStore((state) => state);
  const closeRef = useRef();
  const [inputValue, setInputValue] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await store(`pendaftaran-rule`, inputValue);
      if (res?.status == "success") {
        closeRef.current.click();
        setTemporyData([...temporyData, inputValue]);
        setInputValue({ title: "", description: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-toggle="modal"
        data-twe-target="#exampleModalVarying"
        data-twe-whatever="@mdo"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Open modal for @mdo
      </button> */}
      {/* <!-- Modal --> */}
      <div
        data-twe-modal-init
        class="fixed left-0 top-0 z-[1055] pt-32 hidden bg-black bg-opacity-20 h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalVarying"
        tabindex="-1"
        aria-labelledby="exampleModalVaryingLabel"
        aria-hidden="true"
      >
        <div
          data-twe-modal-dialog-ref
          class="pointer-events-none  relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto  relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-white">
            <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
              <h5
                class="text-xl font-medium leading-normal text-surface dark:text-white"
                id="exampleModalVaryingLabel"
              >
                New message to
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                data-twe-modal-dismiss
                aria-label="Close"
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div class="relative flex-auto p-4" data-twe-modal-body-ref>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label
                    for="recipient-name"
                    class="text-neutral-500 dark:text-neutral-700"
                  >
                    Judul
                  </label>
                  <input
                    value={inputValue?.title}
                    name="title"
                    onChange={handleChange}
                    type="text"
                    class="relative m-0 -me-0.5 block w-full flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-100 focus:shadow-inset focus:outline-none dark:border-neutral-300 dark:bg-gray-100 dark:text-neutral-800 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="message-text"
                    class="text-neutral-500 dark:text-neutral-700"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    value={inputValue?.description}
                    name="description"
                    onChange={handleChange}
                    class="relative m-0 -me-0.5 block w-full flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-100 focus:shadow-inset focus:outline-none dark:border-neutral-300 dark:bg-gray-100 dark:text-neutral-800 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
              <button
                ref={closeRef}
                type="button"
                class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                data-twe-modal-dismiss
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Close
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                class="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white dark:text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/20 dark:hover:shadow-dark-mild dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
