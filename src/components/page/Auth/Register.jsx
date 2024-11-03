import React, { useState } from "react";
import UseFormik from "../../../hooks/UseFormik";
import { registerSchemaValidation } from "../../../schema/schemaValidation";
import { resgisterInitialValue } from "../../../schema/initialValue";
import RequestStore from "../../../store/RequestStore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SpinLoading from "../../ui/SpinLoading";

export default function Register() {
  const { store } = RequestStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const submitFunction = async (values) => {
    try {
      setIsLoading(true);
      const res = await store("user", values);
      if (res?.status === "success") {
        setIsLoading(false);
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Register Success",
        });
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.response?.data?.message,
      });
    }
  };

  const useFormik = UseFormik(
    resgisterInitialValue,
    registerSchemaValidation,
    submitFunction
  );

  return (
    <div classNameName="z-[10000] w-full">
      <section className="bg-gray-50  dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-2 sm:px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
              </h1>
              <form
                onSubmit={useFormik.handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-lg sm:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    onChange={useFormik.handleChange}
                    value={useFormik.values.name}
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:text-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nama Lengkap"
                    required
                  />
                  {useFormik.errors.name && (
                    <span className="text-red-600 dark:text-red-400 text-sm">
                      {useFormik.errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-lg sm:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    onChange={useFormik.handleChange}
                    value={useFormik.values.username}
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:text-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="UserName"
                    required
                  />
                  {useFormik.errors.username && (
                    <span className="text-red-600 dark:text-red-400 text-sm">
                      {useFormik.errors.username}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-lg sm:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    onChange={useFormik.handleChange}
                    value={useFormik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:text-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
                  {useFormik.errors.email && (
                    <span className="text-red-600 dark:text-red-400 text-sm">
                      {useFormik.errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-lg sm:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    onChange={useFormik.handleChange}
                    value={useFormik.values.password}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:text-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {useFormik.errors.password && (
                    <span className="text-red-600 dark:text-red-400 text-sm">
                      {useFormik.errors.password}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white flex justify-center dark:text-black font-bold bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-lg sm:text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? <SpinLoading /> : "Sing In"}
                </button>
                <p className="text-sm sm:text-sm font-light text-gray-500 dark:text-gray-300">
                  Already Have Account {""}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
