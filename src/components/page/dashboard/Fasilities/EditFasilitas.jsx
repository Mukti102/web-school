import React, { useEffect, useRef, useState } from "react";
import AppStore from "../../../../store/AppStore";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { FaCamera } from "react-icons/fa";
import { BiCloset } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import UploadGaleries from "../ui/UploadGaleries";
import useGaleryUpload from "../../../../hooks/useGaleryUpload";

export default function EditFasilitas({ name = "facilities" }) {
  const { handleChange, FormData, currentThumbnail, setInitialFormData } =
    AppStore((state) => state);
  const uploadRef = useRef(null);
  const { handleUpload } = useGaleryUpload();

  const { id } = useParams();
  const { loading, data } = useFetch(`${name}/${id}`);
  const { title, author, thumbnail, description, galery } = data;
  useEffect(() => {
    setInitialFormData({
      title,
      author,
      thumbnail,
      description,
      galery,
    });
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Fasilitas</h1>
      <div>
        <FormAdd url={`facilities/${id}`} type="update">
          <TextField
            label={"Judul"}
            value={FormData.title}
            name={"title"}
            handleChange={handleChange}
            placeholder={"Tambahkan Judul...."}
          />
          <TextField
            label={"Penulis"}
            name={"author"}
            value={FormData.author}
            handleChange={handleChange}
            placeholder={"Tambahkan Penulis..."}
          />
          <TextField
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            value={currentThumbnail ? currentThumbnail : FormData.thumbnail}
            type="file"
          />
          <UploadGaleries
            type="update"
            galeries={FormData.galery}
            handleUpload={handleUpload}
            uploadRef={uploadRef}
          />
        </FormAdd>
      </div>
    </div>
  );
}
