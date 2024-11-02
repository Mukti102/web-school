import React from "react";
import UseFormik from "../../../../hooks/UseFormik";
import SubmitButton from "../../../ui/SubmitButton";
import TextField from "../ui/TextField";
import { PrevSchoolSchemaValidation } from "../../../../schema/schemaValidation";
import { PreviousSchoolInitialValue } from "../../../../schema/initialValue";
import SpinLoading from "../../../ui/SpinLoading";

export default function FormPreviousSchool({
  initialValue,
  handleSubmit,
  isLoading,
  backFunction,
}) {
  const formik = UseFormik(
    initialValue ? initialValue : PreviousSchoolInitialValue,
    PrevSchoolSchemaValidation,
    handleSubmit
  );

  return (
    <div className="my-5">
      <form onSubmit={formik.handleSubmit} action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label={"Asalah Sekolah"}
            name={"previous_school"}
            handleChange={formik.handleChange}
            value={formik.values.previous_school}
            errorValidation={formik.errors.previous_school}
          />
          <TextField
            label={"Level"}
            name={"level"}
            handleChange={formik.handleChange}
            value={formik.values.level}
            errorValidation={formik.errors.level}
          />
          <TextField
            label={"NPSN Sekolah"}
            name={"NPSN_school"}
            handleChange={formik.handleChange}
            value={formik.values.NPSN_school}
            errorValidation={formik.errors.NPSN_school}
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton
            bg={"bg-gray-500"}
            handleOnclick={backFunction}
            type="button"
            name="kembali"
          />
          <SubmitButton name={isLoading ? <SpinLoading /> : "Simpan"} />
        </div>
      </form>
    </div>
  );
}
