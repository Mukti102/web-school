import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import UploadGaleries from "../ui/UploadGaleries";
import useGaleryUpload from "../../../../hooks/useGaleryUpload";

export default function EditJurusan() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { uploadRef, setGalery, handleUpload } = useGaleryUpload();
  const { id } = useParams();
  const { loading, data } = useFetch(`jurusan/${id}`);
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
  console.log(galery);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Edit Jurusan</h1>
      <div>
        <FormAdd url={`jurusan/${id}`} type="update">
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
            value={FormData.thumbnail}
            name={"thumbnail"}
            type="file"
          />
          <UploadGaleries
            name="jurusan"
            galeries={FormData.galery}
            handleUpload={handleUpload}
            uploadRef={uploadRef}
            type="update"
            setGalery={setGalery}
          />
        </FormAdd>
      </div>
    </div>
  );
}
