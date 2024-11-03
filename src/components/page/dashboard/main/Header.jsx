import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidNotificationOff } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import AuthStore from "../../../../store/AuthStore";
import SpinLoading from "../../../ui/SpinLoading";
import { Link, NavLink } from "react-router-dom";
import AppStore from "../../../../store/AppStore";
export default function Header({ setOpen, open }) {
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = AuthStore((state) => state);
  const { authUser } = AppStore((state) => state);
  const handleLogout = async () => {
    setIsLoading(true);
    const res = await logout();
    setIsLoading(false);
  };

  // profile
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open state
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex-auto  px-5 z-50  dark:shadow-primary h-16 bg-opacity-80 backdrop-blur-md bg-white items-center  flex justify-between">
      <div>
        {/* hammburger menu */}
        <button onClick={() => setOpen(!open)}>
          <span className="text-2xl">
            <GiHamburgerMenu />
          </span>
        </button>
      </div>
      <div className="relative" ref={dropdownRef}>
        {/* Profile picture */}
        <div
          className="relative sm:w-10 sm:h-10 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
          onClick={toggleDropdown}
        >
          {authUser?.profile ? (
            <img
              src={authUser?.profile}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          ) : (
            <svg
              className="absolute sm:w-12 w-10 h-10 sm:h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <ul className="absolute right-12 -top-5 sm:top-0 sm:z-[1000] mt-2 w-32 bg-white border text-sm border-gray-200 rounded-md shadow-lg ">
            <li className="px-4 py-2  sm:text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              <Link to={"/dashboard/profile"}>Profile</Link>
            </li>
            <li
              onClick={handleLogout}
              className="px-4 py-2 sm:text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {isLoading ? "Logout..." : "Logout"}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
