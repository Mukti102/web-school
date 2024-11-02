import React, { useEffect, useState } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import LoadingText from "../ui/LoadingBtn";
import { TagInput } from "../ui/Inputs";
export default function EditArticle() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { loading, data } = useFetch(`articles/${id}`);
  const { title, author, thumbnail, tags, description } = data;
  useEffect(() => {
    {
      data &&
        setInitialFormData({
          title,
          author,
          thumbnail,
          tags: tags ? JSON.parse(tags) : tags,
          description,
        });
    }
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      {loading && <LoadingText />}
      <h1 className="text-2xl font-bold">Edit Artikel</h1>
      <div>
        <FormAdd
          back={"/dashboard/articles"}
          type="update"
          url={`articles/${id}`}
        >
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
            label={"Thumbnail"}
            handleChange={handleChange}
            name={"thumbnail"}
            type="file"
            value={FormData.thumbnail}
          />
          <TagInput values={tags} />
        </FormAdd>
      </div>
    </div>
  );
}
