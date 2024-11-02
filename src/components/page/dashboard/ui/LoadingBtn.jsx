import React from "react";

export default function LoadingText() {
  return (
    <div class="flex items-center absolute right-0 left-0 bottom-0 top-0 justify-center   border border-gray-200 rounded-lg bg-gray-50 ">
      <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-gray-300 rounded-full animate-pulse  dark:text-gray-600">
        loading...
      </div>
    </div>
  );
}
