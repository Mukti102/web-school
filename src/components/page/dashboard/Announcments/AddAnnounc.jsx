import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
export default function AddAnnoucment() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      date: "",
      time: "",
      lampiran: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Pengumuman</h1>
      <div>
        <FormAdd back={"/dashboard/announcment"} url="announcment">
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
            label={"Waktu"}
            handleChange={handleChange}
            name={"time"}
            placeholder={"Buyerkan Waktu..."}
            type="text"
          />
          <TextField
            label={"Tanggal"}
            handleChange={handleChange}
            name={"date"}
            placeholder={"Tanggal..."}
            type="date"
          />
          <TextField
            label={"Lampiran"}
            handleChange={handleChange}
            name={"lampiran"}
            type="file"
          />
        </FormAdd>
      </div>
    </div>
  );
}
