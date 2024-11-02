import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import axios from "axios";
import { BASE_URL, apiClient } from "../../../../api/api";
import TextEditor from "./TextEditor";
import AppStore from "../../../../store/AppStore";
export default function TextField({
  label,
  type = "text",
  name,
  placeholder,
  handleChange,
  value,
  errorValidation,
  options,
  desvalue,
  optional = false,
  isMultiple = false,
}) {
  return (
    <div>
      <label
        for="small-input"
        className={`${type === "hidden" ? "hidden" : ""} block mb-1.5 ${
          optional === false && "after:content-['*'] after:text-red-400"
        } text-sm font-medium  text-gray-600`}
      >
        {label}:
      </label>
      {type == "text" && (
        <>
          <input
            name={name}
            onChange={handleChange}
            value={value}
            type="text"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "hidden" && (
        <>
          <input
            name={name}
            onChange={handleChange}
            value={value}
            type="hidden"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "number" && (
        <>
          <input
            name={name}
            onChange={handleChange}
            value={value}
            type="number"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "email" && (
        <>
          <input
            name={name}
            onChange={handleChange}
            value={value}
            type="email"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "password" && (
        <>
          <input
            name={name}
            onChange={handleChange}
            value={value}
            type="password"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "file" && (
        <>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            onChange={handleChange}
            name={name}
            type="file"
            {...(isMultiple ? { multiple: true } : {})}
          ></input>
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
          <img
            src={value && value}
            className={` ${value && "h-40"}  object-cover mt-4 `}
          />
          {isMultiple == true && value?.length > 0 && (
            <div className="grid gap-1 mt-3 grid-cols-3">
              {value?.map((val, index) => (
                <img
                  src={val?.photo}
                  className="h-32 object-cover mt-4"
                  alt=""
                  key={index}
                />
              ))}
            </div>
          )}
        </>
      )}
      {type == "date" && (
        <>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            onChange={handleChange}
            name={name}
            value={value}
            type="date"
          ></input>
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "time" && (
        <>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            onChange={handleChange}
            name={name}
            value={value}
            type="time"
          ></input>
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
      {type == "textarea" && (
        <TextEditor handleChange={handleChange} value={desvalue} name={name} />
      )}
      {/* {type == "textarea" && (
        <textarea
          id="message"
          name={name}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={handleChange}
        ></textarea>
      )} */}
      {type == "options" && (
        <>
          <select
            id={name}
            name={name}
            class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0" desiabled>
              Pilih
            </option>
            {options?.map((item) => (
              <option className="text-black" key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errorValidation && (
            <p className="text-red-500 my-1 text-xs">{errorValidation}</p>
          )}
        </>
      )}
    </div>
  );
}
