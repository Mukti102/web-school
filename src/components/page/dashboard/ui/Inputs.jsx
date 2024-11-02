import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";

export const InputOption = ({
  name,
  placeholder = "Jenis Kelamin",
  label,
  handleChange,
  options,
}) => {
  return (
    <div>
      <label className="text-sm  text-gray-700" htmlFor="select">
        {label}
      </label>
      <select
        id="select"
        name={name}
        onChange={handleChange}
        class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected>
          {placeholder}
        </option>
        {options &&
          options.map((option) => (
            <option value={option?.value ? option?.value : option?.id}>
              {option?.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export const TagInput = ({ label = "Tag", name = "tags", values = null }) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const { setInitialFormData, FormData } = AppStore((state) => state);
  // Tambah tag
  const addTag = (event) => {
    if (event.key === "Enter" && input) {
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
        setInitialFormData({
          ...FormData,
          tags: [...tags, input.trim()],
        });
      }
      setInput("");
    }
  };
  useEffect(() => {
    if (values) {
      setTags(JSON.parse(values));
    }
  }, [values]);
  // Hapus tag
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label for="small-input" class="block mb-1 text-sm   text-gray-700 ">
        {label}
      </label>
      <div className="flex flex-wrap items-center border  rounded p-2 gap-2">
        {tags?.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded"
          >
            {tag}
            <span
              onClick={() => removeTag(index)}
              className="ml-2 cursor-pointer text-blue-600 hover:text-blue-800"
            >
              x
            </span>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={addTag}
          placeholder="Press Enter to add tag"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-100 text-xs focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};
