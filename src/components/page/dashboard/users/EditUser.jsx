import React, { useEffect, useState } from "react";
import TextField from "../ui/TextField";
import useFetch from "../../../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import RequestStore from "../../../../store/RequestStore";
import UseFormik from "../../../../hooks/UseFormik";
import { userSchemaValidation } from "../../../../schema/schemaValidation";
import { initialUserValue } from "../../../../schema/initialValue";
import { roles } from "../constanta";
import { InputOption } from "../ui/Inputs";
import Swal from "sweetalert2";

export default function EditUser() {
  const { update } = RequestStore((state) => state);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { data } = useFetch(`user/${id}`);
  const [initialUser, setInitialUser] = useState(initialUserValue);
  useEffect(() => {
    if (data) {
      const { name, username, password, email, phone, profile, role } = data;
      setInitialUser({
        name,
        username,
        password,
        email,
        role,
        phone,
        profile,
      });
    }
  }, [data]); // Only run this when data changes

  const submitFunction = async (values) => {
    try {
      setIsLoading(true);
      const res = await update(`user/${id}`, values);
      if (res?.status === "success") {
        setIsLoading(false);
        navigate("/dashboard/user");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Updated Successfully",
        });
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.response?.data?.errors,
      });
    }
  };

  const formik = UseFormik(initialUser, userSchemaValidation, submitFunction);

  // Update Formik values only when initialUser changes
  useEffect(() => {
    if (initialUser.name) {
      // Check if initialUser is valid
      formik.setValues(initialUser);
    }
  }, [initialUser]); // Only depend on initialUser

  return (
    <div className="overflow-hidden py-5 px-5 shadow-primary bg-white rounded-lg w-full">
      <h1 className="text-2xl font-bold">Edit User</h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="mt-10">
          <div className="grid grid-cols-2 gap-5">
            <TextField
              label={"Nama"}
              name={"name"}
              value={formik.values.name}
              handleChange={formik.handleChange}
              placeholder={"Nama Lengkap...."}
              errorValidation={formik.errors.name}
            />
            <TextField
              label={"Username"}
              name={"username"}
              value={formik.values.username}
              handleChange={formik.handleChange}
              errorValidation={formik.errors.username}
              placeholder={"Username..."}
            />
            <InputOption
              label={"Role"}
              name={"role_id"}
              value={formik.values.role}
              handleChange={(e) => {
                formik.setFieldValue("role_id", parseInt(e.target.value));
              }}
              type="options"
              options={roles}
              placeholder="Pilih role"
              errorValidation={formik.errors.username}
            />
            <TextField
              label={"Password"}
              name={"password"}
              value={formik.values.password}
              errorValidation={formik.errors.password}
              handleChange={formik.handleChange}
              type="password"
              placeholder={"*******"}
            />
            <TextField
              label={"Email"}
              name={"email"}
              value={formik.values.email}
              errorValidation={formik.errors.email}
              type="email"
              handleChange={formik.handleChange}
              placeholder={"example@gmail.com..."}
            />
            <TextField
              label={"Nomor Telephone"}
              name={"phone"}
              value={formik.values.phone}
              handleChange={formik.handleChange}
              errorValidation={formik.errors.phone}
              placeholder={"Phone..."}
            />
            <TextField
              label={"Photo Profile"}
              name={"profile"}
              value={formik.values.profile}
              errorValidation={formik.errors.profile}
              handleChange={(event) => {
                const file = event.currentTarget.files[0];
                formik.setFieldValue("profile", file);
              }}
              type="file"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white w-1/3 mt-10 bg-gradient-to-br from-primary dark:to-orange-300 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center justify-center items-center flex gap-2 me-2 mb-2"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
