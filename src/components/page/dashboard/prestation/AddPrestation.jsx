import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";

export default function AddPrestation() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      time: "",
      status_winner: "",
      penyelenggara: "",
      juara: "",
      description: "",
      date: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Prestasi</h1>
      <div>
        <FormAdd url="prestasi">
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
            label={"Juara"}
            name={"juara"}
            handleChange={handleChange}
            placeholder={"Tambahkan Juara..."}
            type="text"
          />
          <TextField
            label={"status winner"}
            name={"status_winner"}
            handleChange={handleChange}
            placeholder={"Tambahkan Juara..."}
            type="text"
          />
          <TextField
            label={"Penyelenggara"}
            name={"penyelenggara"}
            handleChange={handleChange}
            placeholder={"Tambahkan Penyelenggara..."}
          />
          <TextField
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
          />
          <TextField
            label={"Waktu"}
            name={"time"}
            handleChange={handleChange}
            type="time"
          />
          <TextField
            label={"Tanggal"}
            name={"date"}
            handleChange={handleChange}
            type="date"
          />
        </FormAdd>
      </div>
    </div>
  );
}
