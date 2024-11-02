import React from "react";

export default function CardSekeleton() {
  const countCards = [1, 2, 3];
  return (
    <div className="container px-5  sm:px-14 w-full sm:max-w-full  p-6 space-y-6 sm:space-y-12">
      <div className="grid justify-center  grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countCards?.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col m-8 rounded shadow-md w-full sm:w-80 animate-pulse h-96"
          >
            <div className="h-48 rounded-t bg-card"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200 dark:bg-black">
              <div className="w-full h-6 rounded bg-card"></div>
              <div className="w-full h-6 rounded bg-card"></div>
              <div className="w-3/4 h-6 rounded bg-card"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
