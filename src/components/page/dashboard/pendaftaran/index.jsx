import React, { useEffect } from "react";
import ToolBarList from "../ui/ToolBarList";
import { IoIosLaptop } from "react-icons/io";
import { SiSessionize } from "react-icons/si";
import { FaLaptopFile } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import MainPendaftaran from "./Main";
import Gelombang from "./Gelombang";
import ModalForm from "./ModalForm";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";
import PendaftaransRule from "./PendaftaransRule";
export default function Pendaftaran() {
  const { isAdmin } = AppStore((state) => state);
  const toolBar = [
    {
      name: "Gelombang",
      icon: SiSessionize,
    },
    {
      name: "Front End",
      icon: FaLaptopFile,
    },
  ];
  const [target, setTarget] = React.useState(toolBar[0].name);
  const { setTemporyData, temporyData, setInitialFormData, FormData } =
    AppStore((state) => state);

  const { data } = useFetch("gelombang");
  useEffect(() => {
    if (data) {
      setTemporyData(data);
    }
  }, [data]);
  if (!isAdmin) {
    return (
      <div className="overflow-hidden py-5 shadow-primary px-3  sm:px-6  bg-white w-full flex gap-10">
        <Gelombang />
      </div>
    );
  }
  return (
    <div>
      <div className="overflow-hidden pt-5 shadow-primary px-6  bg-white w-full flex gap-10">
        <ToolBarList list={toolBar} target={target} setTarget={setTarget} />
      </div>

      {/* content */}
      <div className="overflow-hidden   pt-5 pb-20 px-2 sm:px-6  bg-white  w-full">
        <div className="border-[1.5px] border-gray-100 p-2 sm:p-5 ">
          {target === "Front End" && (
            <MainPendaftaran title={"Halaman Utama"} />
          )}
          {target === "Gelombang" && <Gelombang />}
        </div>
      </div>
    </div>
  );
}
