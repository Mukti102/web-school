import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../anim/FadeUp";
import { limit, limitTitle } from "../../utils/method";
import { htmlToText } from "html-to-text";
export default function SingleCard({ name, item }) {
  return (
    <FadeUp>
      <a
        rel="noopener noreferrer"
        href={`/${name}/${item.id}`}
        className={`max-w-sm block overflow-hidden shadow-md mx-auto group hover:no-underline dark:bg-card bg-card focus:no-underline  `}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="presentation"
          className="object-cover hover:scale-105 transition-all duration-500 w-full h-52 dark:bg-gray-500"
          src={item?.thumbnail}
        />
        <div className={`py-5 px-3  space-y-2`}>
          <h3 className="text-xl font-semibold group-hover:underline group-focus:underline text-text dark:text-text">
            {limitTitle(item.title)}
          </h3>
          <span className="text-xs  text-secondary dark:text-secondary">
            {item?.created_at ? item?.created_at : item?.date}
          </span>
          <p className="sm:text-sm dark:text-gray-400 text-gray-600">
            {htmlToText(limit(item.description, 80))}
          </p>
        </div>
      </a>
    </FadeUp>
  );
}
