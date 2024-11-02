import React, { useEffect } from "react";
// import { CardStep } from "../../pendaftaran/Psb";
import HeadingH4 from "../../../HeadingH4";
import { IoClose } from "react-icons/io5";
import useFetch from "../../../../hooks/useFetch";
import AppStore from "../../../../store/AppStore";
import { BiPlus } from "react-icons/bi";
import RequestStore from "../../../../store/RequestStore";

export default function PendaftaransRule() {
  const { data } = useFetch("pendaftaran-rule");
  const { temporyData, setTemporyData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { destroy } = RequestStore((state) => state);
  useEffect(() => {
    setTemporyData(data);
  }, [data]);
  useEffect(() => {
    setInitialFormData({
      title: "",
      description: "",
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await destroy(`pendaftaran-rule/${id}`);
      console.log(res);
      if (res?.data?.status === "success") {
        const filtered = temporyData?.filter((item) => item?.id !== id);
        setTemporyData(filtered);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <HeadingH4>Langkah Langkah Pendaftaran</HeadingH4>
      </div>
      <div className="grid justify-center mt-10 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {temporyData?.map((item, i) => {
          return <CardWrap key={i} handleDelete={handleDelete} item={item} />;
        })}
        <AddCard />
      </div>
    </div>
  );
}

const CardWrap = ({ item, handleDelete }) => {
  return (
    <>
      <div className="relative">
        <button
          onClick={() => handleDelete(item?.id)}
          className="absolute -right-3 -top-3 text-2xl text-red-600"
        >
          <IoClose />
        </button>
        <CardStep data={item} />
      </div>
    </>
  );
};

const AddCard = () => {
  return (
    <button
      data-twe-toggle="modal"
      data-twe-target="#exampleModalVarying"
      data-twe-whatever="@mdo"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="border-[1.5px] cursor-pointer border-dashed rounded-lg border-gray-300 flex justify-center items-center"
    >
      <button className="text-7xl text-gray-200">
        <BiPlus />
      </button>
    </button>
  );
};
