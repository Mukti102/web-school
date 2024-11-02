import React, { useEffect } from "react";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import LoadingText from "../ui/LoadingBtn";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";

export default function AboutScholl() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { loading, data } = useFetch("about-school");
  useEffect(() => {
    setInitialFormData({
      visi: data?.visi,
      misi: data?.misi,
      tentang_sekolah: data?.tentang_sekolah,
      thumbnail: data?.thumbnail,
    });
  }, [data]);
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      {loading && <LoadingText />}
      <h1 className="text-2xl font-bold">Tentang Sekolah</h1>
      <div>
        <FormAdd isDescription={false} type="update" url={`about-school/${id}`}>
          <TextField
            label={"Background"}
            name={"thumbnail"}
            handleChange={handleChange}
            value={FormData?.thumbnail}
            type="file"
          />
          <TextField
            label={"Tentang Sekolah"}
            name={"tentang_sekolah"}
            handleChange={handleChange}
            value={FormData?.tentang_sekolah}
            type="textarea"
          />
          <TextField
            label={"Visi"}
            name={"visi"}
            handleChange={handleChange}
            value={FormData?.visi}
            type="textarea"
          />
          <TextField
            label={"Misi"}
            name={"misi"}
            handleChange={handleChange}
            value={FormData?.misi}
            type="textarea"
          />
        </FormAdd>
      </div>
    </div>
  );
}
