import React, { useEffect, useState } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import HeadingH4 from "../../../HeadingH4";
import AppStore from "../../../../store/AppStore";
import useFetch from "../../../../hooks/useFetch";

export default function SocialMedia() {
  const { setInitialFormData, FormData, handleChange } = AppStore(
    (state) => state
  );
  const [isExist, setIsExist] = useState(false);
  const { data } = useFetch("social-media");
  const initialData = {
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
    linkedind: "",
  };
  useEffect(() => {
    if (data?.length == 0) {
      setIsExist(false);
      setInitialFormData(initialData);
    } else {
      setIsExist(true);
      setInitialFormData({
        instagram: data?.instagram,
        facebook: data?.facebook,
        youtube: data?.youtube,
        twitter: data?.twitter,
        linkedind: data?.linkedind,
      });
    }
  }, [data]);
  return (
    <>
      <HeadingH4>Social Media </HeadingH4>
      <FormAdd
        isDescription={false}
        type={isExist ? "update" : "store"}
        url={isExist ? `social-media/${data?.id}` : `social-media`}
      >
        <TextField
          handleChange={handleChange}
          label={"Isntagram"}
          value={FormData?.instagram}
          name={"instagram"}
          placeholder={"Link Instagram"}
        />
        <TextField
          handleChange={handleChange}
          label={"Facebook"}
          value={FormData?.facebook}
          name={"facebook"}
        />
        <TextField
          handleChange={handleChange}
          label={"Youtube"}
          value={FormData?.youtube}
          name={"youtube"}
        />
        <TextField
          handleChange={handleChange}
          label={"Twitter"}
          value={FormData?.twitter}
          name={"twitter"}
        />
        <TextField
          handleChange={handleChange}
          label={"LinkedInd"}
          value={FormData?.linkedind}
          name={"linkedind"}
        />
      </FormAdd>
    </>
  );
}
