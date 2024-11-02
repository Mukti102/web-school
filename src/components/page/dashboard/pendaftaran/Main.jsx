import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import useFetch from "../../../../hooks/useFetch";
import AppStore from "../../../../store/AppStore";

export default function MainPendaftaran({ title }) {
  const { setInitialFormData, handleChange, FormData } = AppStore(
    (state) => state
  );
  const { data } = useFetch("pendaftaran-page");
  useEffect(() => {
    if (data) {
      setInitialFormData(data);
    }
  }, [data]);
  return (
    <>
      <div className="text-2xl text-gray-800 font-bold">
        <h1>{title}</h1>
      </div>
      <FormAdd url={`pendaftaran-page/${FormData.id}`}>
        <TextField
          label={"Judul"}
          value={FormData.title}
          name={"title"}
          handleChange={handleChange}
          type="text"
        />
        <TextField
          onChange={handleChange}
          label={"Latar Belakang"}
          name={"background"}
          handleChange={handleChange}
          value={FormData.background}
          type="file"
        />
      </FormAdd>
    </>
  );
}
