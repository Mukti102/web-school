import React, { useEffect } from "react";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";

export default function EditAnnouncment() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { loading, data } = useFetch(`announcment/${id}`);
  const { title, author, description, thumbnail, date, time, lampiran } = data;
  useEffect(() => {
    setInitialFormData({
      title,
      author,
      thumbnail,
      date,
      description,
      time,
      lampiran,
    });
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Edit Pengumuman</h1>
      <div>
        <FormAdd
          back={"/dashboard/announcment"}
          type="update"
          url={`announcment/${id}`}
        >
          <TextField
            label={"Judul"}
            name={"title"}
            value={FormData.title}
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
            value={FormData.thumbnail}
            type="file"
          />
          <TextField
            label={"Waktu"}
            handleChange={handleChange}
            name={"time"}
            value={FormData.time}
            placeholder={"Buyerkan Waktu..."}
            type="text"
          />
          <TextField
            label={"Tanggal"}
            handleChange={handleChange}
            name={"date"}
            value={FormData.date}
            placeholder={"Tanggal..."}
            type="date"
          />
          <TextField
            label={"Lampiran"}
            handleChange={handleChange}
            name={"lampiran"}
            value={FormData.lampiran}
            type="file"
          />
        </FormAdd>
      </div>
    </div>
  );
}
