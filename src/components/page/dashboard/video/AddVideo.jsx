import React, { useEffect } from "react";
import AppStore from "../../../../store/AppStore";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";

export default function AddVideo() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      video_path: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Artikel</h1>
      <div>
        <FormAdd url="video">
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
            label={"video url"}
            name={"video_path"}
            handleChange={handleChange}
            placeholder={"Tambahkan link video..."}
          />
          <TextField
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
          />
        </FormAdd>
      </div>
    </div>
  );
}
