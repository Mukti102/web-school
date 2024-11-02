import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
export default function EditAgenda() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { loading, data } = useFetch(`agenda/${id}`);
  const {
    title,
    author,
    thumbnail,
    implementation,
    time,
    location,
    kordinator,
    description,
  } = data;
  useEffect(() => {
    {
      data &&
        setInitialFormData({
          title,
          author,
          thumbnail,
          implementation,
          time,
          location,
          kordinator,
          description,
        });
    }
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Agenda</h1>
      <div>
        <FormAdd back={"/dashboard/agenda"} type="update" url={`agenda/${id}`}>
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
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
            value={FormData.thumbnail}
          />
          <TextField
            label={"Implementasi"}
            handleChange={handleChange}
            name={"implementation"}
            type="text"
            value={FormData.implementation}
          />
          <TextField
            label={"Waktu"}
            handleChange={handleChange}
            name={"time"}
            type="text"
            value={FormData.time}
          />
          <TextField
            label={"Lokasi"}
            handleChange={handleChange}
            name={"location"}
            type="text"
            value={FormData.location}
          />
          <TextField
            label={"Kordinator"}
            handleChange={handleChange}
            name={"kordinator"}
            type="text"
            value={FormData.kordinator}
          />
        </FormAdd>
      </div>
    </div>
  );
}
