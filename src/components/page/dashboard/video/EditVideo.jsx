import React, { useEffect } from "react";
import AppStore from "../../../../store/AppStore";
import LoadingText from "../ui/LoadingBtn";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

export default function EditVideo() {
  const { handleChange, FormData, setInitialFormData, currentThumbnail } =
    AppStore((state) => state);
  const { id } = useParams();
  const { loading, data } = useFetch(`video/${id}`);
  const { title, author, thumbnail, video_path, description } = data;
  useEffect(() => {
    {
      data &&
        setInitialFormData({
          title,
          author,
          thumbnail,
          video_path,
          description,
        });
    }
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      {loading && <LoadingText />}
      <h1 className="text-2xl font-bold">Edit Artikel</h1>
      <div>
        <FormAdd type="update" url={`video/${id}`}>
          <TextField
            label={"Judul"}
            name={"title"}
            handleChange={handleChange}
            value={FormData.title}
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
            label={"Video url"}
            name={"video_path"}
            value={FormData.video_path}
            handleChange={handleChange}
            placeholder={"Tambahkan Penulis..."}
          />
          <TextField
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
            value={currentThumbnail ? currentThumbnail : FormData.thumbnail}
          />
        </FormAdd>
      </div>
    </div>
  );
}
