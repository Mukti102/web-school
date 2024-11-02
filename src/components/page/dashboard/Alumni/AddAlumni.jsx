import React, { useEffect } from "react";
import HeadingH4 from "../../../HeadingH4";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import { TeaxtArea } from "../ui/TextArea";
import AppStore from "../../../../store/AppStore";

export default function AddAlumni() {
  const { setInitialFormData, FormData, handleChange } = AppStore(
    (state) => state
  );

  const initialData = {
    name: "",
    angkatan: "",
    photo: "",
    response: "",
    comment: "",
  };
  useEffect(() => {
    setInitialFormData(initialData);
  }, []);
  return (
    <div className="overflow-hidden pt-5 shadow-primary px-6  bg-white w-full gap-10">
      <HeadingH4>Tambah Alumni</HeadingH4>
      {/* content */}
      <div className="overflow-hidden   pt-5 pb-10  bg-white  w-full">
        <div className="border-[1.5px] border-gray-100 p-5 ">
          <FormAdd isDescription={false} url="alumnis">
            <TextField
              name={"name"}
              label={"Nama"}
              handleChange={handleChange}
            />
            <TextField
              name={"angkatan"}
              label={"Angkatan"}
              handleChange={handleChange}
            />
            <TextField
              name={"photo"}
              label={"Photo"}
              type="file"
              handleChange={handleChange}
            />
            <TextField
              label={"Testimoni Singkat"}
              name={"response"}
              handleChange={handleChange}
            />
            <TextField
              label={"Komentar"}
              name={"comment"}
              type="textarea"
              handleChange={handleChange}
            />
          </FormAdd>
        </div>
      </div>
    </div>
  );
}
