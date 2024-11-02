import { useFormik } from "formik";
import Swal from "sweetalert2";

const UseFormik = (initialValues, validationSchema, submitFunction) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await submitFunction(values);
        if (res?.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: res?.message,
          });
        }
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: err?.response?.data?.message,
        });
      }
    },
  });

  return formik;
};

export default UseFormik;
