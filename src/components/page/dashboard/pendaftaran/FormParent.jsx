import React from "react";
import UseFormik from "../../../../hooks/UseFormik";
import { parentInitialValue } from "../../../../schema/initialValue";
import { parentSchemaValidation } from "../../../../schema/schemaValidation";
import SubmitButton from "../../../ui/SubmitButton";
import TextField from "../ui/TextField";

export default function FormParent({
  initialValue,
  handleSubmit,
  backFunction,
}) {
  const formik = UseFormik(
    initialValue ? initialValue : parentInitialValue,
    parentSchemaValidation,
    handleSubmit
  );

  return (
    <div className="my-5">
      <form onSubmit={formik.handleSubmit} action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label={"Nomor KK"}
            name={"no_kk"}
            handleChange={formik.handleChange}
            value={formik.values.no_kk}
            errorValidation={formik.errors.no_kk}
          />
          <TextField
            type="text"
            label={"Kepala Keluarga"}
            name={"lead_family"}
            handleChange={formik.handleChange}
            value={formik.values.lead_family}
            errorValidation={formik.errors.lead_family}
          />
          <TextField
            type="text"
            label={"Nama Ayah/Wali"}
            name={"father_name"}
            handleChange={formik.handleChange}
            value={formik.values.father_name}
            errorValidation={formik.errors.father_name}
          />

          <TextField
            label={"NIK Ayah/Wali"}
            name={"father_nik"}
            handleChange={formik.handleChange}
            value={formik.values.father_nik}
            errorValidation={formik.errors.father_nik}
          />

          <TextField
            type="date"
            label={"Tgl. Lahir Ayah/Wali"}
            name={"father_birth"}
            handleChange={formik.handleChange}
            value={formik.values.father_birth}
            errorValidation={formik.errors.father_birth}
          />
          <TextField
            type="text"
            label={"Pekerjaan Ayah/Wali"}
            name={"father_job"}
            handleChange={formik.handleChange}
            value={formik.values.father_job}
            errorValidation={formik.errors.father_job}
          />
          <TextField
            type="text"
            label={"Pendidikan Terakhir Ayah/Wali"}
            name={"father_education"}
            handleChange={formik.handleChange}
            value={formik.values.father_education}
            errorValidation={formik.errors.father_education}
          />
          <div></div>
          <TextField
            type="text"
            label={"Nama Ibu/Wali"}
            name={"mom_name"}
            handleChange={formik.handleChange}
            value={formik.values.mom_name}
            errorValidation={formik.errors.mom_name}
          />
          <TextField
            label={"NIK Ibu/Wali"}
            name={"mom_nik"}
            handleChange={formik.handleChange}
            value={formik.values.mom_nik}
            errorValidation={formik.errors.mom_nik}
          />
          <TextField
            type="date"
            label={"Tgl. Lahir Ibu/Wali"}
            name={"mom_birth"}
            handleChange={formik.handleChange}
            value={formik.values.mom_birth}
            errorValidation={formik.errors.mom_birth}
          />
          <TextField
            type="text"
            label={"Pekerjaan Ibu/Wali"}
            name={"mom_job"}
            handleChange={formik.handleChange}
            value={formik.values.mom_job}
            errorValidation={formik.errors.mom_job}
          />
          <TextField
            type="text"
            label={"Pendidikan Terakhir Ibu/Wali"}
            name={"mom_education"}
            handleChange={formik.handleChange}
            value={formik.values.mom_education}
            errorValidation={formik.errors.mom_education}
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
