import React, { useEffect } from "react";
import TextField from "../ui/TextField";
import { FormAdd } from "../ui/Form";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";

export default function PendidikanPage() {
  const { handleChange, FormData, setInitialFormData } = AppStore(
    (state) => state
  );
  const { data } = useFetch("pendidikan-page");
  useEffect(() => {
    if (data) {
      setInitialFormData(data?.length > 0 ? data[0] : []);
    }
  }, [data]);
  return (
    <FormAdd url={`pendidikan-page/${FormData?.id}`}>
      <TextField
        label={"Judul"}
        value={FormData?.title}
        handleChange={handleChange}
        name={"title"}
      />
      <TextField
        label={"Potrate Photo"}
        value={FormData?.potret_photo}
        handleChange={handleChange}
        type="file"
        name={"potret_photo"}
      />
      <TextField
        value={FormData?.lanscape_photo}
        label={"Lanscape Photo"}
        handleChange={handleChange}
        type="file"
        name={"lanscape_photo"}
      />
      <TextField
        value={FormData?.thumbnail}
        label={"thumbnail"}
        handleChange={handleChange}
        type="file"
        name={"thumbnail"}
      />
    </FormAdd>
  );
}
