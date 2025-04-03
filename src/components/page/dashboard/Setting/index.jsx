import React from "react";
import ToolBarList from "../ui/ToolBarList";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import AppSetting from "../../../../store/AppSetting";
import HeroSetting from "./HeroSetting";
import PendidikanPage from "./PendidikanPage";
import SocialMedia from "./SocialMedia";
import Menus from "./Menus";

export default function Setting() {
  const { heroImage, setHeroImage } = AppSetting();
  const toolBar = [
    {
      name: "Hero",
      icon: IoIosLaptop,
      component: HeroSetting,
    },
    {
      name: "Pendidikan",
      icon: MdOutlineCastForEducation,
      component: PendidikanPage,
    },
    {
      name: "Sosial Media",
      icon: MdOutlinePhoneIphone,
      component: "",
    },
    {
      name: "Menu",
      icon: MdOutlinePhoneIphone,
      component: "",
    },
  ];
  const [target, setTarget] = React.useState(toolBar[0].name);
  return (
    <>
      <div className="overflow-hidden pt-5 px-6 bg-white w-full flex gap-10">
        <ToolBarList list={toolBar} target={target} setTarget={setTarget} />
      </div>

      {/* content */}
      <div className="overflow-hidden px-5 pt-10 pb-20  bg-white  w-full">
        <div className="border-[1.5px] border-gray-200 p-5">
          {target == "Hero" && <HeroSetting />}
          {target == "Pendidikan" && <PendidikanPage />}
          {target == "Sosial Media" && <SocialMedia />}
          {target == "Menu" && <Menus />}
        </div>
      </div>
    </>
  );
}
