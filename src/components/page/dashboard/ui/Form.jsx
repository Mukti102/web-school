import React, { useEffect, useRef, useState } from "react";
import TextField from "./TextField";
import RequestStore from "../../../../store/RequestStore";
import Swal, { SweetAlertIcon } from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AppStore from "../../../../store/AppStore";
import PopupError from "../../../../hooks/usePopupError";
import SpinLoading from "../../../ui/SpinLoading";
export function FormAdd({
  url = "articles",
  children,
  isForClient = false,
  back,
  type = "store",
  isDescription = true,
}) {
  const navigate = useNavigate();
  const { store, update } = RequestStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, FormData, setInitialFormData, setCurrentThumbnail } =
    AppStore((state) => state);
  const [erorValidate, setErorValidate] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (type == "update") {
      try {
        const response = await update(url, FormData);
        if (response.status == "success") {
          setIsLoading(false);
          navigate(back ? back : -1);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data Berhasil Di Update",
          });
          setCurrentThumbnail(null);
        } else {
          Swal.fire({
            icon: "success",
            title: response?.status,
            text: response.message,
          });
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setErorValidate(err?.response?.data?.errors);
      }
    } else {
      try {
        const response = await store(url, FormData);
        setIsLoading(false);
        !isForClient ? navigate(-1) : setInitialFormData({});
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.message,
        });
        setCurrentThumbnail(null);
        navigate(back ? back : -1);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err?.response?.data?.message,
        });
        console.log(err);
        setIsLoading(false);
        setErorValidate(err?.response?.data?.errors);
      }
    }
  };
  useEffect(() => {
    if (erorValidate) {
      // scroll to Top
      const el = document.getElementById("#error");
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [erorValidate]);
  return (
    <>
      {erorValidate && (
        <PopupError
          erorValidate={erorValidate}
          setErorValidate={setErorValidate}
        />
      )}
      <form
        action=""
        method="POST"
        enctype="multipart/form-data"
        className="w-full mt-7 "
      >
        <div className="grid md:grid-cols-2 grid-cols-1cod gap-6">
          {children}
        </div>
        {isDescription && (
          <div className="mt-8">
            <TextField
              label={"Deskripsi"}
              handleChange={handleChange}
              name={"description"}
              type={"textarea"}
              value={FormData.description}
            />
          </div>
        )}
        <div className="w-full mt-10 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            class="text-white w-1/3   bg-gradient-to-br from-primary dark:to-orange-300 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center justify-center items-center flex gap-2 me-2 mb-2"
          >
            {isLoading ? <SpinLoading /> : "Simpan"}
          </button>
        </div>
      </form>
    </>
  );
}
