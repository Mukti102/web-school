import React, { useEffect, useState } from "react";
import { IoIosTime, IoIosTimer, IoMdPerson } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import book from "../../../assets/book.png";
import Calendar from "react-calendar";
import CardInformation from "./ui/CardInformation";
import { PieChart } from "./ui/PieChart";
import BarChart from "./ui/BarChart";
import { IoClose } from "react-icons/io5";
import ClockTime from "./ui/ClockTime";
import AppStore from "../../../store/AppStore";
import useFetch from "../../../hooks/useFetch";
import CardsContainer from "./ui/CardsContainer";
import { apiClient } from "../../../api/api";
import { LineChart } from "./ui/LineChart";
import BoxUser from "./users/BoxUser";
import CardPendaftaran from "./pendaftaran/CardPendaftaran";
import TodoLists from "./ui/TodoLists";

export default function Main() {
  const [value, onChange] = useState(new Date());
  const user = JSON.parse(localStorage.getItem("user"));
  const { setCategory, categories } = AppStore((state) => state);
  const { setOptions, options } = AppStore((state) => state);
  const { data } = useFetch("jurusan");
  const { isAdmin } = AppStore((state) => state);
  useEffect(() => {
    setOptions({
      ...options,
      jurusan: data,
    });
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="col-span-2 columns-1">
        <div className="overflow-hidden pb-3 sm:pb-5 px-3 sm:px-5 shadow-primary bg-white  rounded-lg ">
          {/* box */}
          <div className="rounded-lg text-white h-max sm:h-52 justify-between  bg-gradient-to-tr from-primary dark:to-[#E85C0D] to-purple-500 mt-5 flex">
            <div className=" p-5 w-[60%]">
              <h3 className="font-semibold tracking-wider text-sm sm:text-xl">
                Welcome Back , {user?.name}
              </h3>
              <p className="sm:text-xs text-[10px] mt-1 leading-4.5 text-gray-100 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                obcaecati perspiciatis Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Odit expedita
              </p>
            </div>
            <div className="w-max px-3">
              <img
                src={book}
                alt="avatar"
                className="sm:w-52 w-32  shad drop-shadow-sm h-48  sm:h-52 mx-auto rounded-full object-cover"
              />
            </div>
          </div>
          {isAdmin && <CardsContainer />}
          {!isAdmin && (
            <div className="my-5   w-full">
              <CardPendaftaran />
            </div>
          )}
        </div>
        {isAdmin && (
          <>
            {/* charts */}
            <div className="grid  gap-3 grid-cols-1 sm:grid-cols-2">
              <BoxUser />
              <div className="bg-white mt-3 px-5  p-3 rounded-lg shadow-primary">
                <PieChart />
              </div>
            </div>
            <div className="my-3 grid grid-cols-1 gap-2">
              <div className="bg-white  p-3 rounded-lg shadow-primary">
                <BarChart />
              </div>
              {/* line charts */}
              <div className="bg-white p-3 rounded-lg shadow-primary">
                <LineChart />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="overflow-hidden    h-max pb-4 col-span-1 ">
        {isAdmin && (
          <div className="shadow-primary pb-3 px-2 rounded-lg  bg-white">
            <ClockTime />
            <Calendar
              className={"w-full bg-transparent border-none rounded-lg"}
              onChange={onChange}
              value={value}
            />
          </div>
        )}
        <TodoLists />
      </div>
    </div>
  );
}
