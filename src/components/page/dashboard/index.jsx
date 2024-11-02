import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./main/Sidebar";
import Header from "./main/Header";
import { Outlet } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import AppStore from "../../../store/AppStore";

export default function Dashboard() {
  const { setAuthUser, authUser } = AppStore((state) => state);
  const [open, setOpen] = useState(true);
  const user = localStorage?.getItem("user")
    ? JSON.parse(localStorage?.getItem("user"))
    : null;
  const { data, isLoading } = useFetch(`user/${user?.id}`);
  const sidebarRef = useRef(null);
  const width = open ? "18rem" : "4rem";
  useEffect(() => {
    setAuthUser(data);
  }, [data]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the screen width is mobile size (<=768px)
      if (
        window.innerWidth <= 768 &&
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setOpen(false); // Close the sidebar if clicked outside in mobile mode
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <main className="w-full flex h-screen overflow-hidden bg-gradient-to-tr from-primary to-purple-500">
      <div className="w-full bg-gray-60 bg-opacity-80 backdrop-blur-md flex">
        <div ref={sidebarRef}>
          <Sidebar open={open} setOpen={setOpen} width={width} />
        </div>
        <div className="w-full scrollbar-style overflow-y-auto">
          <Header setOpen={setOpen} open={open} />
          <div className="sm:p-5 p-2 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
