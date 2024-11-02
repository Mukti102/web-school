import React, { useEffect } from "react";
import TextField from "../ui/TextField";
import * as Yup from "yup";
import UseFormik from "../../../../hooks/UseFormik";
import RequestStore from "../../../../store/RequestStore";
import { userSchemaValidation } from "../../../../schema/schemaValidation";
import { initialUserValue } from "../../../../schema/initialValue";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const { store } = RequestStore((state) => state);
  const navigate = useNavigate();

  const submitFunction = async (values) => {
    try {
      const res = await store("user", values); // Assuming store is imported or available
      if (res?.status === "success") {
        navigate("/dashboard/user");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Updated Successfully",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.response?.data?.errors,
      });
    }
  };

  const formik = UseFormik(
    initialUserValue,
    userSchemaValidation,
    submitFunction
  );

  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl font-bold">Tambahkan User</h1>
      <form onSubmit={formik.handleSubmit} className="mt-10">
        <div className="grid grid-cols-2 gap-5">
          {/* <FormAdd isDescription={false} url="user"> */}
          <TextField
            label={"Nama"}
            name={"name"}
            value={formik?.values?.name}
            handleChange={formik?.handleChange}
            placeholder={"Nama Lengkap...."}
            errorValidation={formik?.errors?.name}
          />
          <TextField
            label={"Username"}
            name={"username"}
            value={formik?.values?.username}
            handleChange={formik?.handleChange}
            errorValidation={formik?.errors?.username}
            placeholder={"Username..."}
          />
          <TextField
            label={"Password"}
            name={"password"}
            value={formik?.values?.password}
            errorValidation={formik?.errors?.password}
            handleChange={formik?.handleChange}
            type="password"
            placeholder={"*******"}
          />
          <TextField
            label={"Email"}
            name={"email"}
            value={formik?.values?.email}
            errorValidation={formik?.errors?.email}
            type="email"
            handleChange={formik?.handleChange}
            placeholder={"example@gmail.com..."}
          />
          <TextField
            label={"Nomor Telephone"}
            name={"phone"}
            value={formik?.values?.phone}
            handleChange={formik?.handleChange}
            errorValidation={formik?.errors?.phone}
            placeholder={"Phone..."}
          />
          <TextField
            label={"Photo Profile"}
            name={"profile"}
            value={FormData?.profile}
            errorValidation={formik?.errors?.profile}
            placeholder={"Photo Profile..."}
            handleChange={(event) => {
              const file = event.currentTarget.files[0];
              formik.setFieldValue("profile", file);
            }}
            type="file"
          />
          {/* </FormAdd> */}
        </div>
        <button
          type="submit"
          class="text-white w-1/3  mt-10   bg-gradient-to-br from-primary dark:to-orange-300 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center justify-center items-center flex gap-2 me-2 mb-2"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
