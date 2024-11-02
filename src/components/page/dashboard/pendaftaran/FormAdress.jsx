import React from "react";
import UseFormik from "../../../../hooks/UseFormik";
import { adressInitialValue } from "../../../../schema/initialValue";
import { adressSchemaValidation } from "../../../../schema/schemaValidation";
import SubmitButton from "../../../ui/SubmitButton";
import TextField from "../ui/TextField";

export default function FormAdress({
  initialValue,
  handleSubmit,
  backFunction,
}) {
  const formik = UseFormik(
    initialValue ? initialValue : adressInitialValue,
    adressSchemaValidation,
    handleSubmit
  );

  return (
    <div className="my-5">
      <form onSubmit={formik.handleSubmit} action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label={"Alamat"}
            placeholder={"jl. jalan"}
            name={"address"}
            value={formik.values.address}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.address}
          />

          <TextField
            label={"Desa"}
            name={"desa"}
            value={formik.values.desa}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.desa}
          />

          <TextField
            label={"Kecamatan"}
            name={"kecamatan"}
            value={formik.values.kecamatan}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.kecamatan}
          />

          <TextField
            label={"Kabupaten"}
            name={"kabupaten"}
            value={formik.values.kabupaten}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.kabupaten}
          />

          <TextField
            label={"Provinsi"}
            name={"provinsi"}
            value={formik.values.provinsi}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.provinsi}
          />

          <TextField
            label={"Kode Pos"}
            name={"kode_pos"}
            value={formik.values.kode_pos}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.kode_pos}
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton
            bg={"bg-gray-500"}
            handleOnclick={backFunction}
            type="button"
            name="kembali"
          />
          <SubmitButton name="Next" />
        </div>
      </form>
    </div>
  );
}
