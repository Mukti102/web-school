import React, { useEffect, useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from "./Toggle";
import { getMenuList, lists } from "../constant/constanta";
import useFetch from "../hooks/useFetch";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNav";
import AuthStore from "../store/AuthStore";

export default function Navbar({ handleToggle, isDarkMode }) {
  const { logout } = AuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [selectHover, setSelectHover] = useState(null);
  const isAuthenticated = localStorage?.getItem("user");
  const isDashboard =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");
  const { data } = useFetch("social-media");
  const school = useFetch("profile-school");
  const logo = school?.data[0]?.logo;
  const { instagram, facebook, youtube, twitter, linkedind } = data;
  const sosial_media = [
    {
      id: 1,
      icon: <RiInstagramFill />,
      link: instagram,
    },
    {
      id: 2,
      icon: <FaFacebook />,
      link: facebook,
    },
    {
      id: 3,
      icon: <FaYoutube />,
      link: youtube,
    },
    {
      id: 4,
      icon: <BsTwitterX />,
      link: twitter,
    },
    {
      id: 5,
      icon: <FaLinkedin />,
      link: linkedind,
    },
  ];
  const [menuList, setMenuList] = useState(lists);
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

  useEffect(() => {
    const fetchMenu = async () => {
      const menuData = await getMenuList();
      setMenuList(menuData);
    };
    fetchMenu();
  }, []);

  return (
    <>
      <div className="fixed sm:block hidden z-[10000] border-b border-theory  border-1  bg-primary dark:bg-gray-900 py-0 text-light top-0 right-0 left-0">
        <div
          className={`navbar  flex items-center justify-between px-10 shadow-sm h-24     ${
            isDashboard ? "hidden" : ""
          }`}
        >
          <div className="">{logo && <img src={logo} className="w-20" />}</div>
          <div className="block">
            {/* sosial media */}
            <div className="text-light flex  justify-end">
              <ul className="flex gap-4 border-r-[1px] border-gray-300 px-10 h-9 items-center">
                {sosial_media.map((item, index) => {
                  return (
                    <motion.a
                      href={`https://${item?.link}`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      key={index}
                      className="text-xl cursor-pointer"
                    >
                      <span href={item.link}>{item.icon}</span>
                    </motion.a>
                  );
                })}
              </ul>
              <div className="pl-7 flex items-center">
                <button className="text-2xl">
                  <FiSearch />
                </button>
                <Toggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
              </div>
            </div>
            {/* list 1 */}
            <div className="mt-2">
              <ul className="flex  gap-5 font-light">
                {menuList?.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item?.link}
                      onMouseEnter={(e) => setSelectHover(e.target.innerText)}
                      onMouseLeave={() => setSelectHover(null)}
                      className="after:content-['']  group relative after:block after:h-[1.8px] after:bg-primary after:scale-0 hover:after:scale-100 after:transition-all  after:ease-in-out after:duration-300"
                    >
                      <li>{item.name}</li>
                      <AnimatePresence>
                        {item.name.includes(selectHover) && item.subLink && (
                          <motion.ul
                            onMouseEnter={(e) => setSelectHover(item.name)}
                            onMouseLeave={(e) => setSelectHover(null)}
                            initial={{
                              opacity: 0,
                              y: -10,
                            }}
                            exit={{
                              y: -10,
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.2,
                              type: "spring",
                            }}
                            className="absolute shadow-primary dark:border-[1px] dark:border-gray-700 w-max overf mt-5 p-5 pr-20 opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:duration-300 transition-opacity visibility-hidden group-hover:visibility-visible bg-background text-text h-max"
                          >
                            {item?.subLink?.map((item, index) => (
                              <a href={item.link} key={index}>
                                <motion.li
                                  initial={{
                                    y: 0,
                                  }}
                                  whileHover={{
                                    y: -2,
                                  }}
                                  className="py-2  text-[.9rem] hover:text-primary"
                                >
                                  {item.name}
                                </motion.li>
                              </a>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
                {!isAuthenticated ? (
                  <NavLink to="/login">Login</NavLink>
                ) : (
                  <button onClick={handleLogout}>
                    {isLoading ? "Logout..." : "Logout"}
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
