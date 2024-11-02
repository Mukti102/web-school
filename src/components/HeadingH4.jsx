import React from "react";

export default function HeadingH4({ children }) {
  return (
    <div className="sm:text-2xl text-xl py-1 sm:py-3 w-max pr-20 border-b border-primary font-semibold">
      <h2>{children}</h2>
    </div>
  );
}
