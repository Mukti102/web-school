import React, { useEffect } from "react";
import TextField from "../ui/TextField";
import { studentInitialValue } from "../../../../schema/initialValue";
import { studentSchemaValidation } from "../../../../schema/schemaValidation";
import UseFormik from "../../../../hooks/UseFormik";
import AppStore from "../../../../store/AppStore";
import { InputOption } from "../ui/Inputs";
import SubmitButton from "../../../ui/SubmitButton";
import { Defaultjurusan, genders } from "../constanta";
import { date, number } from "yup";
import { nomorRegistasiGenerate } from "../../../../utils/method";
import { useParams } from "react-router-dom";

export default function StudentForm({
  gelombang_id,
  initialValue,
  handleSubmit,
  backFunction,
}) {
  const { id } = useParams();
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const { options } = AppStore((state) => state);
  const { jurusan } = options;
  const formik = UseFormik(
    initialValue ? initialValue : studentInitialValue,
    studentSchemaValidation,
    handleSubmit
  );

  useEffect(() => {
    const nomor_registrasi = nomorRegistasiGenerate();
    formik.setFieldValue("nomor_registrasi", nomor_registrasi);
    formik.setFieldValue("gelombang_id", gelombang_id);
    formik.setFieldValue("user_id", userId);
  }, [formik?.values?.gelombang_id]);

  return (
    <div className="my-5">
      <form onSubmit={formik.handleSubmit} action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label={"Nama Lengkap"}
            name={"fullname"}
            value={formik?.values?.fullname}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.fullname}
          />
          <TextField
            label={"NISN"}
            name={"NISN"}
            value={formik?.values?.NISN}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.NISN}
          />
          <TextField
            label={"NIS"}
            name={"NIS"}
            value={formik?.values?.NIS}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.NIS}
          />
          <InputOption
            handleChange={(e) => {
              formik.setFieldValue("jurusan_id", parseInt(e?.target?.value));
            }}
            placeholder="Pilih Jurusan"
            options={
              jurusan?.length == 0 || jurusan == undefined
                ? Defaultjurusan
                : jurusan
            }
            label={"Jurusan"}
            name={"jurusan_id"}
          />
          <InputOption
            label={"Gender"}
            name={"gender"}
            options={genders}
            value={formik?.values?.gender}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.gender}
          />
          <TextField
            label={"Tempat Lahir"}
            name={"tempat_lahir"}
            value={formik?.values?.tempat_lahir}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.tempat_lahir}
          />
          <TextField
            label={"Tanggal Lahir"}
            name={"tanggal_lahir"}
            type="date"
            value={formik?.values?.tanggal_lahir}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.tanggal_lahir}
          />
          <TextField
            label={"Agama"}
            name={"agama"}
            value={formik?.values?.agama}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.agama}
          />
          <TextField
            label={"Anak Ke"}
            type="number"
            name={"anak_ke"}
            value={formik?.values?.anak_ke}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.anak_ke}
          />
          <TextField
            label={"Jumlah Saudara"}
            name={"jumlah_saudara"}
            type="number"
            value={formik?.values?.jumlah_saudara}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.jumlah_saudara}
          />
          <TextField
            label={"No HP"}
            name={"no_hp"}
            value={formik?.values?.no_hp}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.no_hp}
          />
          <TextField
            label={"Email"}
            name={"email"}
            value={formik?.values?.email}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.email}
          />
          <TextField
            label={"Photo"}
            optional={true}
            name={"photo"}
            type="file"
            value={formik?.values?.photo}
            handleChange={(e) => {
              formik.setFieldValue("photo", e.target.files[0]);
            }}
            errorValidation={formik.errors.photo}
          />
          <TextField
            type="hidden"
            label={"Nomor Registrasi"}
            name={"nomor_registrasi"}
            handleChange={formik.handleChange}
            errorValidation={formik.errors.nomor_registrasi}
          />
          <TextField
            type="hidden"
            label={"User Id"}
            name={"user_id"}
            handleChange={(e) => {
              formik.setFieldValue("user_id", parseInt(e.target.value));
            }}
            errorValidation={formik.errors.nomor_registrasi}
          />
          <TextField
            type="hidden"
            label={"Gelombang"}
            name={"gelombang_id"}
            handleChange={(e) => {
              formik.setFieldValue("gelombang_id", parseInt(e.target.value));
            }}
            errorValidation={formik.errors.gelombang_id}
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
