import React, { useEffect } from "react";
import HeadingH4 from "../../../HeadingH4";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import { TeaxtArea } from "../ui/TextArea";
import AppStore from "../../../../store/AppStore";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

export default function EditAlumni() {
  const { setInitialFormData, FormData, handleChange } = AppStore(
    (state) => state
  );
  const { id } = useParams();
  const { data } = useFetch(`alumnis/${id}`);
  const { name, angkatan, photo, response, comment } = data;
  const initialData = {
    name,
    angkatan,
    photo,
    response,
    comment,
  };
  useEffect(() => {
    setInitialFormData(initialData);
  }, [data]);
  return (
    <div className="overflow-hidden pt-5 shadow-primary px-6  bg-white w-full gap-10">
      <HeadingH4>Edit Alumni</HeadingH4>
      {/* content */}
      <div className="overflow-hidden   pt-5 pb-10  bg-white  w-full">
        <div className="border-[1.5px] border-gray-100 p-5 ">
          <FormAdd isDescription={false} url="alumnis">
            <TextField
              name={"name"}
              value={FormData?.name}
              label={"Nama"}
              handleChange={handleChange}
            />
            <TextField
              name={"angkatan"}
              value={FormData?.angkatan}
              label={"Angkatan"}
              handleChange={handleChange}
            />
            <TextField
              name={"photo"}
              label={"Photo"}
              value={FormData?.photo}
              type="file"
              handleChange={handleChange}
            />
            <TextField
              label={"Testimoni Singkat"}
              name={"response"}
              handleChange={handleChange}
              value={FormData?.response}
            />
            <TextField
              label={"Komentar"}
              type="textarea"
              name={"comment"}
              desvalue={FormData?.comment}
              handleChange={handleChange}
            />
          </FormAdd>
        </div>
      </div>
    </div>
  );
}
