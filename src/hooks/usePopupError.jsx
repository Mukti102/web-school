import React, { useState } from "react";

export default function PopupError({ erorValidate, setErorValidate }) {
  return (
    <div
      id="#error"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <button
        onClick={() => setErorValidate(null)}
        className="absolute top-0  right-0 px-4 py-3"
      >
        X
      </button>
      <strong className="font-bold">Error !</strong>
      <ul>
        {Object.keys(erorValidate)?.map((key) => (
          <li key={key} className="sm:text-sm text-xs">
            {erorValidate[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
