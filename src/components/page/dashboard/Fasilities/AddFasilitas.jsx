import React, { useEffect, useRef, useState } from "react";
import { FormAdd } from "../ui/Form";
import AppStore from "../../../../store/AppStore";
import { FaCamera } from "react-icons/fa";
import TextField from "../ui/TextField";
import { IoClose } from "react-icons/io5";
import UploadGaleries from "../ui/UploadGaleries";
import useGaleryUpload from "../../../../hooks/useGaleryUpload";

export default function AddFasilitas() {
  const { handleChange, setInitialFormData } = AppStore((state) => state);
  const { uploadRef, galery, handleUpload, setGalery } = useGaleryUpload();
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      description: "",
      galery: [],
    });
  }, []);
  return (
    <div className="overflow-hidden py-5 px-5 shadow-primary bg-white rounded-lg w-full">
      <h1 className="text-2xl font-bold">Tambahkan Fasilitas</h1>
      <div>
        <FormAdd url="facilities">
          <TextField
            label={"Judul"}
            name={"title"}
            handleChange={handleChange}
            placeholder={"Tambahkan Judul...."}
          />
          <TextField
            label={"Penulis"}
            name={"author"}
            handleChange={handleChange}
            placeholder={"Tambahkan Penulis..."}
          />
          <TextField
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
          />
          <UploadGaleries
            galeries={galery}
            uploadRef={uploadRef}
            handleUpload={handleUpload}
            setGalery={setGalery}
          />
        </FormAdd>
      </div>
    </div>
  );
}
