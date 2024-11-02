import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import UploadGaleries from "../ui/UploadGaleries";
import useGaleryUpload from "../../../../hooks/useGaleryUpload";

export default function AddJurusan() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { uploadRef, galery, setGalery, handleUpload } = useGaleryUpload();
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      description: "",
      galery: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Jurusan</h1>
      <div>
        <FormAdd url="jurusan">
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
