import React, { useEffect, useState } from "react";
import AppStore from "../../../../store/AppStore";
import { Form } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import RequestStore from "../../../../store/RequestStore";
import TextField from "../ui/TextField";
import Swal from "sweetalert2";
import PopupError from "../../../../hooks/usePopupError";
import SpinLoading from "../../../ui/SpinLoading";
export default function Profile() {
  const { setInitialFormData, FormData, handleChange } = AppStore(
    (state) => state
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorValidate, setErorValidate] = useState(null);
  const { update } = RequestStore((state) => state);
  const user = JSON.parse(localStorage.getItem("user"));
  const { data } = useFetch(`user/${user?.id}`);
  const { name, username, email, phone, role, profile } = data;
  useEffect(() => {
    setInitialFormData({
      name,
      username,
      email,
      phone,
      password: "",
      profile,
    });
  }, [data]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await update(`user/${user?.id}`, FormData);
      if (response.status == "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data Berhasil Di Update",
        });
        setIsLoading(false);
      } else if (response.message == "Validated Fail") {
        console.log(response?.errors);
        setIsLoading(false);
        setErorValidate(response?.errors);
        // scroll to Top
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message,
        });
        setIsLoading(false);
      }
    } catch (err) {
      const errors = err?.response?.data?.errors || [];
      setErorValidate(errors);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
      {/* Profile Section */}
      <div className="col-span-1  h-max rounded-md sm:col-span-1 overflow-hidden px-5 shadow-primary bg-white">
        <div className="py-6 text-center">
          {/* Profile Picture */}
          <img
            className="w-24 h-24 mx-auto rounded-full object-cover"
            src={FormData?.profile}
            alt="Profile"
          />
          {/* Name */}
          <h2 className="mt-4 text-lg font-semibold text-gray-800">
            {FormData?.name}
          </h2>
          {/* Email */}
          <p className="text-sm text-gray-600">{FormData?.email}</p>
          {/* Contact Info */}
          <div className="mt-4">
            <p className="text-xs font-light text-gray-500">
              Phone: {FormData?.phone}
            </p>
            <p className="text-xs font-light text-gray-500">
              Location: City, Country
            </p>
          </div>
        </div>
      </div>

      {/* Edit Section */}
      <div className="col-span-2 rounded-md pb-5 overflow-hidden px-5 shadow-primary bg-white">
        <h2 className="py-4 text-xl font-semibold text-gray-600">
          Edit Profile
        </h2>
        {/* Form to edit profile (placeholders) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              value={FormData?.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errorValidate?.name && message(errorValidate?.name)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              value={FormData?.username}
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errorValidate?.username && message(errorValidate?.username)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={FormData?.password}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="********"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errorValidate?.password && message(errorValidate?.password)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={FormData?.email}
              placeholder="johndoe@example.com"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errorValidate?.email && message(errorValidate?.email)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={FormData?.phone}
              placeholder="+123 456 7890"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errorValidate?.phone && message(errorValidate?.phone)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo Profile
            </label>
            <TextField
              handleChange={handleChange}
              value={FormData?.profile}
              name={"profile"}
              type="file"
            />
            {errorValidate?.profile && message(errorValidate?.profile)}
          </div>
          <button
            type="submit"
            class="text-gray-900  w-full  bg-gradient-to-br from-primary dark:to-orange-300 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-8 py-3 text-center justify-center items-center flex gap-2 me-2 mb-2"
          >
            {isLoading ? <SpinLoading /> : "Simpan"}
          </button>
        </form>
      </div>
    </div>
  );
}

const message = (errors) => {
  return (
    <ul className="text-xs text-red-500 font-light my-1">
      {errors?.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
