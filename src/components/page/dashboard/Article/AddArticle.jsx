import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import { TagInput } from "../ui/Inputs";
export default function AddArticle() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  useEffect(() => {
    setInitialFormData({
      title: "",
      author: "",
      thumbnail: "",
      category_article_id: "",
    });
  }, []);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan Artikel</h1>
      <div>
        <FormAdd back={"/dashboard/article"}>
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
          <TagInput />
        </FormAdd>
      </div>
    </div>
  );
}
