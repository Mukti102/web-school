import React from "react";
import { FaCamera } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import AppStore from "../../../../store/AppStore";
import RequestStore from "../../../../store/RequestStore";
import useGaleryUpload from "../../../../hooks/useGaleryUpload";

export default function UploadGaleries({
  uploadRef,
  handleUpload,
  setGalery,
  galeries,
  name = "facilities",
  type = "add",
}) {
  const { setGaleries, FormData } = AppStore((state) => state);
  const { destroy } = RequestStore((state) => state);
  const handleDelete = async (e, item) => {
    e.preventDefault();
    if (type == "update") {
      const response = await destroy(`${name}/galery/${item?.id}`);
      if (response?.data.status == "success") {
        setGaleries(FormData.galery.filter((e) => e.id !== item?.id));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Gagal Di hapus",
        });
      }
    } else {
      setGalery(galeries.filter((i) => i.photo !== item?.photo));
    }
  };
  return (
    <div>
      <h1 className="text-sm font-semibold">Galery</h1>
      <div className="grid grid-cols-4 gap-3 mt-1">
        {galeries?.map((item, index) => (
          <div
            className="h-24 cursor-pointer border-1 relative  border-gray-300"
            key={index}
          >
            <button
              type="button"
              onClick={(e) => handleDelete(e, item)}
              className="absolute -top-1 -right-1 text-white text-sm bg-red-500 rounded-full"
            >
              <IoClose />
            </button>
            <img src={item?.photo} className="w-full h-full object-cover" />
          </div>
        ))}
        <div
          className="h-24 cursor-pointer flex items-center justify-center border-dashed border-[1.5px] border-gray-400"
          onClick={() => uploadRef.current.click()}
        >
          <input
            type="file"
            ref={uploadRef}
            onChange={handleUpload}
            className="hidden"
          />
          <span className="text-5xl text-gray-300">
            <FaCamera />
          </span>
        </div>
      </div>
    </div>
  );
}
