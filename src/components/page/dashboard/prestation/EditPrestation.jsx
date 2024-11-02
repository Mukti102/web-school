import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

export default function EditPrestation() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { loading, data } = useFetch(`prestasi/${id}`);
  const {
    title,
    author,
    thumbnail,
    time,
    status_winner,
    penyelenggara,
    juara,
    description,
    date,
  } = data;
  useEffect(() => {
    setInitialFormData({
      title,
      author,
      thumbnail,
      time,
      status_winner,
      penyelenggara,
      juara,
      description,
      date,
    });
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Prestasi</h1>
      <div>
        <FormAdd url={`prestasi/${id}/update`} type="update">
          <TextField
            label={"Judul"}
            name={"title"}
            handleChange={handleChange}
            placeholder={"Tambahkan Judul...."}
            value={FormData.title}
          />
          <TextField
            label={"Penulis"}
            name={"author"}
            handleChange={handleChange}
            placeholder={"Tambahkan Penulis..."}
            value={FormData.author}
          />
          <TextField
            label={"Juara"}
            name={"juara"}
            handleChange={handleChange}
            placeholder={"Tambahkan Juara..."}
            value={FormData.juara}
            type="text"
          />
          <TextField
            label={"status winner"}
            name={"status_winner"}
            handleChange={handleChange}
            placeholder={"Tambahkan Juara..."}
            value={FormData.status_winner}
            type="text"
          />
          <TextField
            label={"Penyelenggara"}
            name={"penyelenggara"}
            handleChange={handleChange}
            placeholder={"Tambahkan Penyelenggara..."}
            value={FormData.penyelenggara}
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
            name={"time"}
            handleChange={handleChange}
            type="time"
            value={FormData.time}
          />
          <TextField
            label={"Tanggal"}
            name={"date"}
            handleChange={handleChange}
            type="date"
            value={FormData.date}
          />
        </FormAdd>
      </div>
    </div>
  );
}
