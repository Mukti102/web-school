import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import AppStore from "../../../../store/AppStore";
import { adminListSidebar, userListSidebar } from "./index";
import useFetch from "../../../../hooks/useFetch";
export default function Sidebar({ open, width, setOpen }) {
  const { data } = useFetch("profile-school");
  const [logo, setLogo] = useState(null);
  const { isAdmin } = AppStore((state) => state);
  const [ListSidebar, setListSidebar] = useState([]);
  useEffect(() => {
    if (isAdmin) {
      setListSidebar(adminListSidebar);
    } else {
      setListSidebar(userListSidebar);
    }
  }, [isAdmin]);

  useEffect(() => {
    if (data) {
      setLogo(data[0]);
    }
  }, [data]);
  return (
    <motion.div
      initial={{ width: width }} // Initial width (when closed)
      animate={{ width: width }} // Animate to full width when open
      transition={{ duration: 0.1, ease: "easeInOut", type: "tween" }}
      className={`transition-all ${
        open ? "block absolute z-10" : "hidden"
      } sm:block sm:static min-h-screen duration-200 rounded-none rounded-tr-none shadow-primary px-0  ease-in-out text-gray-800 bg-opacity-80 backdrop-blur-lg bg-white h-full`}
      style={{ width: "18rem" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className={` py-2 shadow-md  px-4 items-center gap-1 flex  w-full text-center ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="w-12 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={logo ? logo?.logo : ""}
            alt=""
          />
        </div>
        <span className="text-xl uppercase text-gray-600 font-bold">
          Dashboard
        </span>
      </motion.div>

      <ul className="w-full h-screen scrollbar-style  pb-20 overflow-y-auto px-1.5">
        {/* Sidebar items */}
        {ListSidebar?.map((item, index) => (
          <SidebarItem item={item} key={index} isOpen={open} />
        ))}
      </ul>
    </motion.div>
  );
}

function SidebarItem({ item, isOpen }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <li>
      {item.subItems ? (
        <>
          <div
            onClick={handleDropdownToggle}
            className={`w-full py-2.5 my-1 hover:text-white items-center px-3 flex gap-3 text-gray-600 group cursor-pointer rounded-lg ${
              isOpen ? "justify-between" : "justify-center"
            } hover:bg-primary`}
          >
            <div className="flex gap-3">
              <span className="text-xl">{item.icon ? <item.icon /> : "T"}</span>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-[1rem] font-[500]"
                >
                  {item.name}
                </motion.span>
              )}
            </div>
            {isOpen && (
              <span className="text-2xl">
                {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </span>
            )}
          </div>
          {isDropdownOpen && isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4"
            >
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink
                    to={subItem.link}
                    className={`w-full py-2.5 mt-1 items-center hover:text-white  px-2 text-gray-600 hover:bg-primary rounded-lg flex gap-3`}
                  >
                    <span className="text-sm">
                      {subItem.icon ? <subItem.icon /> : "T"}
                    </span>
                    {isOpen && (
                      <span className="text-[1rem] font-[500]">
                        {subItem.name}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </>
      ) : (
        <NavLink
          to={item.link}
          className={`w-full ${
            isOpen ? "justify-start" : "justify-center"
          } py-2.5 my-1 items-center px-3 flex gap-3 text-gray-600 group hover:text-white hover:bg-primary rounded-lg`}
        >
          <span className="text-xl">{item.icon ? <item.icon /> : "T"}</span>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-[1rem] font-[500]"
            >
              {item.name}
            </motion.span>
          )}
        </NavLink>
      )}
    </li>
  );
}
