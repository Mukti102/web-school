import React from "react";

export default function SubmitButton({
  name = "Simpan",
  handleOnclick,
  type = "submit",
  bg = null,
}) {
  return (
    <button
      onClick={handleOnclick}
      type={type}
      class={`text-white   mt-10 ${
        bg
          ? bg
          : "bg-gradient-to-br from-primary dark:to-orange-300 to-blue-500 hover:bg-gradient-to-bl"
      } font-normal sm:font-medium rounded-lg text-xs sm:text-sm px-5 sm:px-8 py-2 sm:py-3 text-center justify-center items-center flex gap-2 me-2 mb-2`}
    >
      {name}
    </button>
  );
}
