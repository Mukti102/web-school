import React from "react";

export default function Skeleton() {
  return (
    <div className="container px-5 sm:px-14 max-w-7xl p-6 space-y-6 sm:space-y-12">
      <div
        rel="noopener noreferrer"
        className="block shadow-md max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline h-72 focus:no-underline lg:grid lg:grid-cols-12 bg-gray-200 dark:bg-black"
      >
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"></h3>
          <span className="text-xs text-gray-600"></span>
          <p></p>
        </div>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t bg-card"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200 dark:bg-black">
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-3/4 h-6 rounded bg-card"></div>
          </div>
        </div>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t bg-card"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200 dark:bg-black">
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-3/4 h-6 rounded bg-card"></div>
          </div>
        </div>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t bg-card"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200 dark:bg-black">
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-full h-6 rounded bg-card"></div>
            <div className="w-3/4 h-6 rounded bg-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
