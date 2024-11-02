import React, { useRef, useState } from "react";
import { Button, Modal } from "flowbite-react";
import RequestStore from "../../../../store/RequestStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppStore from "../../../../store/AppStore";
import TextField from "../ui/TextField";
import AddButton from "../ui/AddButton";
import { BiPlus } from "react-icons/bi";
import Swal from "sweetalert2";
export default function AddGelombang() {
  const [openModal, setOpenModal] = useState(false);
  const { store } = RequestStore((state) => state);
  const { temporyData, setTemporyData } = AppStore((state) => state);

  const Schema = Yup.object().shape({
    angkatan: Yup.string()
      .min(2, "Minimal 4 Karakter")
      .required("Angkatan harus diisi"),
    gelombang_ke: Yup.number().required("Gelombang harus diisi"),
    kuota: Yup.number().required("Kuota harus diisi"),
  });

  function onCloseModal() {
    setOpenModal(false);
  }

  const formik = useFormik({
    initialValues: {
      angkatan: "",
      gelombang_ke: "",
      kuota: "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        const res = await store(`gelombang`, values);
        if (res?.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Berhasil ",
            text: res?.message,
          });
          setTemporyData([...temporyData, values]);
          setOpenModal(false);
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: err?.response?.data?.message?.angkatan[0],
        });
        setOpenModal(false);
      }
    },
  });

  return (
    <>
      <Button
        size={"sm"}
        className="my-2 mx-1 flex items-center"
        onClick={() => setOpenModal(true)}
      >
        <span>Tambah</span>
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <form
          onSubmit={formik.handleSubmit}
          className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none z-[10000000] p-5 mt-10"
        >
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 dark:border-white/10">
            <h5
              className="text-xl leading-normal text-surface dark:text-black font-semibold"
              id="exampleModalCenterTitle"
            >
              Tambahkan Gelombang Baru
            </h5>
            <button
              onClick={close}
              type="button"
              className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              data-twe-modal-dismiss
              aria-label="Close"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="mt-7">
            <div action="" className="flex flex-col gap-4">
              <TextField
                label={"Angkatan"}
                name={"angkatan"}
                type={"text"}
                value={formik.values.angkatan}
                handleChange={formik.handleChange}
                placeholder={"Angkatan..."}
                errorValidation={
                  formik.touched.angkatan && formik.errors.angkatan
                }
              />
              <TextField
                label={"Gelombang Ke"}
                name={"gelombang_ke"}
                type={"number"}
                value={formik.values.gelombang_ke}
                handleChange={formik.handleChange}
                placeholder={"Gelombang ke...."}
                errorValidation={
                  formik.touched.gelombang_ke && formik.errors.gelombang_ke
                }
              />
              <TextField
                label={"Kuota"}
                name={"kuota"}
                type={"number"}
                value={formik.values.kuota}
                handleChange={formik.handleChange}
                placeholder={"Kuota Siswa...."}
                errorValidation={formik.touched.kuota && formik.errors.kuota}
              />
            </div>
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
            <button
              onClick={() => setOpenModal(false)}
              type="button"
              className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
              data-twe-modal-dismiss
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Close
            </button>
            <button
              type="submit"
              className="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-700 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Tambahkan
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
