import React, { useEffect, useState } from "react";
import UseFormik from "../../../../hooks/UseFormik";
import { initialValueProfileSchool } from "../../../../schema/initialValue";
import useFetch from "../../../../hooks/useFetch";
import TextField from "../ui/TextField";
import { schoolSchemaValidation } from "../../../../schema/schemaValidation";
import SubmitButton from "../../../ui/SubmitButton";
import AppStore from "../../../../store/AppStore";
import Swal from "sweetalert2";
import SpinLoading from "../../../ui/SpinLoading";
import RequestStore from "../../../../store/RequestStore";

export default function ProfileSchool() {
  const [initialSchool, setInitialSchool] = useState(initialValueProfileSchool);
  const { update } = RequestStore((state) => state);
  const { data, isLoading } = useFetch("profile-school");
  const [loading, setLoading] = useState(false);
  const submitFunction = async (values) => {
    try {
      setLoading(true);
      const res = await update(`profile-school/${data[0]?.id}`, values);
      if (res?.status === "success") {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile Sekolah Updated Successfully",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.response?.data?.message,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      setInitialSchool(data[0]);
    }
  }, [data]);

  const formik = UseFormik(
    initialSchool,
    schoolSchemaValidation,
    submitFunction
  );

  return (
    <div className="overflow-hidden  px-5 shadow-primary bg-white py-5   w-full">
      <h1 className="text-2xl font-bold">Profile Sekolah</h1>
      <form action="" className="mt-10" onSubmit={formik?.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TextField
            name={"name"}
            handleChange={formik?.handleChange}
            value={formik.values?.name}
            label={"Nama Sekolah"}
            errorValidation={formik.errors?.name}
          />

          <TextField
            name={"adress_of_school"}
            handleChange={formik?.handleChange}
            value={formik.values?.adress_of_school}
            label={"Alamat Sekolah"}
            errorValidation={formik.errors?.adress_of_school}
          />

          <TextField
            name={"lead_of_school"}
            handleChange={formik?.handleChange}
            value={formik.values?.lead_of_school}
            label={"Kepala Sekolah"}
            errorValidation={formik.errors?.lead_of_school}
          />

          <TextField
            name={"nip_of_lead_of_school"}
            handleChange={formik?.handleChange}
            value={formik.values?.nip_of_lead_of_school}
            errorValidation={formik.errors?.ni_of_lead_of_school}
            label={"NIP Kepala Sekolah"}
          />

          <TextField
            name={"phone"}
            handleChange={formik?.handleChange}
            value={formik.values?.phone}
            label={"No. Telepon"}
          />

          <TextField
            name={"email"}
            handleChange={formik?.handleChange}
            value={formik.values?.email}
            label={"Email"}
          />

          <TextField
            name={"ketua_panitia"}
            handleChange={formik?.handleChange}
            value={formik.values?.ketua_panitia}
            label={"Ketua Panitia"}
          />

          <TextField
            name={"nip_ketua_panitia"}
            handleChange={formik?.handleChange}
            value={formik.values?.nip_ketua_panitia}
            errorValidation={formik.errors?.nip_ketua_panitia}
            label={"NIP Ketua Panitia"}
          />

          <TextField
            name={"ttd_lead_of_school"}
            handleChange={(e) => {
              formik?.setFieldValue("ttd_lead_of_school", e.target.files[0]);
            }}
            type="file"
            value={formik.values?.ttd_lead_of_school}
            errorValidation={formik.errors?.ttd_lead_of_school}
            label={"Tanda Tangan Kepala Sekolah"}
          />

          <TextField
            name={"ttd_ketua_panitia"}
            type="file"
            handleChange={(e) => {
              formik?.setFieldValue("ttd_ketua_panitia", e.target.files[0]);
            }}
            errorValidation={formik.errors?.ttd_ketua_panitia}
            value={formik.values?.ttd_ketua_panitia}
            label={"Tanda Tangan Ketua Panitia"}
          />

          <TextField
            name={"logo"}
            handleChange={(e) => {
              formik?.setFieldValue("logo", e.target.files[0]);
            }}
            value={formik.values?.logo}
            errorValidation={formik.errors?.logo}
            type="file"
            label={"Logo Sekolah"}
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton
            type="submit"
            name={loading ? <SpinLoading /> : "Simpan"}
          />
        </div>
      </form>
    </div>
  );
}
