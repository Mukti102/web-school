import React from "react";
import { motion } from "framer-motion";
export default function Toggle({ handleToggle, isDarkMode }) {
  return (
    <label
      htmlFor="Toggle2"
      className="inline-flex  px-5 items-center space-x-4  cursor-pointer dark:text-gray-800"
      onClick={handleToggle}
    >
      <span className="relative">
        <div
          className={`w-12 h-4 transition-all duration-200 rounded-full shadow ${
            isDarkMode ? "bg-primary" : "bg-gray-300"
          }`}
        ></div>
        <motion.div
          initial={{ x: !isDarkMode ? "100%" : "0%" }}
          animate={{ x: !isDarkMode ? "0%" : "100%" }}
          className={`absolute  w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-white dark:bg-primary`}
        ></motion.div>
      </span>
    </label>
  );
}
