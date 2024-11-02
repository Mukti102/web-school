import React, { useEffect, useState } from "react";
import AppSetting from "../../../../store/AppSetting";
import UploadImage from "../ui/UploadImage";
import useFetch from "../../../../hooks/useFetch";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";
import Caraosel from "../ui/Caraosel";
import Hero from "../../../Hero";
import PreviewCaraosel from "./PreviewCaraosel";
export default function HeroSetting() {
  const [images, setImages] = useState([]);
  const { heroImage, setHeroImage } = AppSetting();
  const { store, get } = RequestStore();
  const { data } = useFetch("hero-images");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    try {
      const res = await store("hero-images", { image: file });
      if (res) {
        setImages([
          ...images,
          { id: images[images.length - 1]?.id + 1, image: url },
        ]);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.message?.image[0];
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (images.length == 1) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Minimal 1 gambar",
      });
      return;
    }
    const res = await get(`hero-images/${id}`);
    setImages(images.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (data) setImages(data);
  }, [data]);
  return (
    <form action="">
      <div className="grid  grid-cols-1 gap-5">
        <div class=" mt-5 justify-center w-full">
          <h2 className="mb-2  font-bold text-2xl">Masukan Gambar</h2>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {images?.map((item) => (
              <div key={item?.id} className="h-40 relative rounded shadow-md ">
                <img
                  src={item?.image}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <button
                  onClick={(e) => handleDelete(e, item?.id)}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full"
                >
                  <IoClose />
                </button>
              </div>
            ))}
            <UploadImage handleUpload={handleUpload} />
          </div>
        </div>
        <div className="text-gray-600 mt-10">
          <div>
            <PreviewCaraosel title={"Preview"} listImages={images} />
          </div>
        </div>
      </div>
    </form>
  );
}
