import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
export default function AddEvent() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      implementation: "",
      time: "",
      location: "",
      kordinator: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Agenda</h1>
      <div>
        <FormAdd back={"/dashboard/agenda"} url="agenda">
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
          <TextField
            label={"Implementasi"}
            handleChange={handleChange}
            name={"implementation"}
            placeholder={""}
            type="date"
          />
          <TextField
            label={"Waktu"}
            handleChange={handleChange}
            name={"time"}
            type="time"
          />
          <TextField
            label={"Lokasi"}
            handleChange={handleChange}
            name={"location"}
            type="text"
            placeholder={"Tambah Lokasi..."}
          />
          <TextField
            label={"Kordinator"}
            handleChange={handleChange}
            name={"kordinator"}
            placeholder={"Kordinator"}
            type="text"
          />
        </FormAdd>
      </div>
    </div>
  );
}
