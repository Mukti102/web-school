import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { lists } from "../constant/constanta";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";
import AuthStore from "../store/AuthStore";

export default function MobileNavbar({ handleToggle, isDarkMode }) {
  const { logout } = AuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = localStorage?.getItem("user");
  const [selectHover, setSelectHover] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isDashboard =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  const handleDropdownToggle = (index) => {
    setDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const res = await logout();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const sosial_media = [
    { id: 1, icon: <RiInstagramFill />, link: "" },
    { id: 2, icon: <FaFacebook />, link: "" },
    { id: 3, icon: <FaYoutube />, link: "" },
    { id: 4, icon: <BsTwitterX />, link: "" },
    { id: 5, icon: <FaLinkedin />, link: "" },
  ];

  return (
    <div className="fixed sm:hidden z-[10000] border-b border-theory border-1 bg-primary dark:bg-gray-900 py-0 text-light top-0 right-0 left-0">
      <div
        className={`navbar flex items-center justify-between px-5 shadow-sm h-16 ${
          isDashboard ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-xl font-semibold">Logo</h1>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-y-0 right-0 w-3/4 bg-primary dark:bg-gray-900 p-5 shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-5">
                <div className="flex justify-end mb-5">
                  <button
                    className="text-2xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <ul className="space-y-3">
                  {lists.map((item, index) => (
                    <li key={index} className="block text-lg font-[300]">
                      {item?.subLink ? (
                        <>
                          <div
                            onClick={() => handleDropdownToggle(index)}
                            className={`w-full my-1 hover:text-white items-center  flex gap-3 text-gray-100 group cursor-pointer  rounded-lg`}
                          >
                            <div className="flex gap-3">
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                                className="text-lg   font-[400]"
                              >
                                {item.name}
                              </motion.span>
                            </div>
                          </div>
                          {isDropdownOpen === index && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.subLink.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={`${subItem.link}`}
                                    className={`w-full py-1 mt-1 items-center hover:text-white  px-2 text-gray-400  rounded-lg flex gap-2`}
                                  >
                                    <span className="text-sm font-[300]">
                                      {subItem.name}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-primary"
                        >
                          {item.name}
                        </a>
                      )}
                      {/* Render subLinks if they exist */}
                    </li>
                  ))}
                  {!isAuthenticated ? (
                    <a href="/login">Login</a>
                  ) : (
                    <button onClick={handleLogout}>
                      {isLoading ? "Logout..." : "Logout"}
                    </button>
                  )}
                </ul>
              </div>
              <div className="mt-5 flex gap-4">
                {sosial_media.map((item, index) => (
                  <span
                    href={item.link}
                    key={index}
                    className="text-xl cursor-pointer"
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <Toggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
