import React, { useEffect } from "react";
import { FormAdd } from "../ui/Form";
import TextField from "../ui/TextField";
import AppStore from "../../../../store/AppStore";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { InputOption } from "../ui/Inputs";
import { genders } from "../constanta";

export default function EditStudent() {
  const { handleChange, setInitialFormData, FormData, setCurrentThumbnail } =
    AppStore((state) => state);
  const { store, update } = RequestStore((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();
  const { options } = AppStore((state) => state);
  const { data } = useFetch(`students/${id}`);
  const {
    full_name,
    gender,
    previous_school,
    field_of_study,
    NSIN,
    NIK,
    no_KK,
    place_birth,
    date_birth,
    religion,
    phone,
    desa,
    kecamatan,
    kabupaten,
    provinsi,
    address,
    photo,
    SKHUN,
    father_name,
    date_father_birth,
    father_education,
    father_job,
    mom_name,
    date_mom_birth,
    mom_education,
    mom_job,
    scan_kk,
    scan_ijazah,
    scan_skhun,
  } = data;
  const initialFormData = {
    full_name,
    gender,
    previous_school,
    field_of_study,
    NSIN,
    NIK,
    no_KK,
    place_birth,
    date_birth,
    religion,
    phone,
    desa,
    kecamatan,
    kabupaten,
    provinsi,
    address,
    photo,
    SKHUN,
    father_name,
    date_father_birth,
    father_education,
    father_job,
    mom_name,
    date_mom_birth,
    mom_education,
    mom_job,
    scan_kk,
    scan_ijazah,
    scan_skhun,
  };

  useEffect(() => {
    setInitialFormData(initialFormData);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await update(`students/${id}`, FormData);
    if (res.status == "success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data Berhasil Di Tambahkan",
      });
      navigate(-1);
      setCurrentThumbnail(null);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: res.message,
      });
    }
  };

  return (
    <form className="overflow-hidden py-5 px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-2xl my-5 font-bold">Update Data Siswa</h1>
      <div className="w-full   mt-8  grid grid-cols-2 ">
        <div>
          <div className="text-lg">
            <Title title={"Data Siswa"} />
          </div>
          <div className="pr-20 py-3 flex-col flex gap-3">
            <TextField
              label={"Nama Lengkap"}
              name={"full_name"}
              value={FormData.full_name}
              handleChange={handleChange}
            />
            <InputOption
              label={"Jenis Kelamin"}
              name={"gender"}
              options={genders}
              value={FormData.gender}
              handleChange={handleChange}
            />
            <InputOption
              label={"Pilih Jurusan"}
              options={options?.jurusan}
              name={"field_of_study"}
              placeholder="Jurusan"
              value={FormData.field_of_study}
              handleChange={handleChange}
            />
            <TextField
              label={"Asal Sekolah"}
              name={"previous_school"}
              value={FormData.previous_school}
              handleChange={handleChange}
            />
            <TextField
              label={"NSIN"}
              name={"NSIN"}
              value={FormData.NSIN}
              handleChange={handleChange}
            />
            <TextField
              label={"NIK"}
              name={"NIK"}
              handleChange={handleChange}
              value={FormData.NIK}
            />
            <TextField
              label={"Nomor KK"}
              name={"no_KK"}
              value={FormData.no_KK}
              handleChange={handleChange}
            />
            <TextField
              label={"Nomor SKHUN"}
              name={"SKHUN"}
              value={FormData.SKHUN}
              handleChange={handleChange}
            />
            <TextField
              label={"Tempat Lahir"}
              name={"place_birth"}
              value={FormData.place_birth}
              handleChange={handleChange}
            />
            <TextField
              label={"Tanggal Lahir"}
              name={"date_birth"}
              type="date"
              value={FormData.date_birth}
              handleChange={handleChange}
            />
            <TextField
              label={"Agama"}
              name={"religion"}
              value={FormData.religion}
              handleChange={handleChange}
            />
            <TextField
              label={"Nomor Telephone"}
              name={"phone"}
              value={FormData.phone}
              handleChange={handleChange}
            />
            <TextField
              label={"Provinsi"}
              name={"provinsi"}
              value={FormData.provinsi}
              handleChange={handleChange}
            />
            <TextField
              label={"Kabupaten"}
              name={"kabupaten"}
              value={FormData.kabupaten}
              handleChange={handleChange}
            />
            <TextField
              label={"Kecamatan"}
              name={"kecamatan"}
              value={FormData.kecamatan}
              handleChange={handleChange}
            />
            <TextField
              label={"Desa"}
              name={"desa"}
              value={FormData.desa}
              handleChange={handleChange}
            />
            <TextField
              label={"Alamat"}
              name={"address"}
              value={FormData.address}
              placeholder={"jl.Rajawali no 54"}
              handleChange={handleChange}
            />
            <TextField
              label={"Photo"}
              name={"photo"}
              value={FormData.photo}
              type="file"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Title title={"Data Orang Tua"} />
          <div className="pr-20 py-3 flex-col flex gap-3">
            <TextField
              label={"Nama Ayah"}
              name={"father_name"}
              value={FormData.father_name}
              handleChange={handleChange}
            />
            <TextField
              label={"Tanggal Lahir"}
              name={"date_father_birth"}
              value={FormData.date_father_birth}
              type="date"
              handleChange={handleChange}
            />
            <TextField
              label={"Pendidikan terakhir"}
              name={"father_education"}
              value={FormData.father_education}
              handleChange={handleChange}
            />
            <TextField
              label={"Pekerjaan"}
              name={"father_job"}
              value={FormData.father_job}
              handleChange={handleChange}
            />
          </div>
          <div className="pr-20 mt-5 py-3 flex-col flex gap-3">
            <TextField
              label={"Nama Ibu"}
              name={"mom_name"}
              value={FormData.mom_name}
              handleChange={handleChange}
            />
            <TextField
              label={"Tanggal Lahir"}
              name={"date_mom_birth"}
              type="date"
              value={FormData.date_mom_birth}
              handleChange={handleChange}
            />
            <TextField
              label={"Pendidikan terakhir"}
              name={"mom_education"}
              value={FormData.mom_education}
              handleChange={handleChange}
            />
            <TextField
              label={"Pekerjaan"}
              name={"mom_job"}
              value={FormData.mom_job}
              handleChange={handleChange}
            />
          </div>
          <div className="pr-20 mt-5 py-3 flex-col flex gap-3">
            <Title title={"Berkas Pendaftaran"} />
            <InputFile
              label={"Scan KK"}
              name={"scan_kk"}
              value={FormData.scan_kk}
              handleChange={handleChange}
            />
            <InputFile
              label={"Scan Ijazah"}
              name={"scan_ijazah"}
              value={FormData.scan_ijazah}
              handleChange={handleChange}
            />
            <InputFile
              label={"Scan SKHUN"}
              name={"scan_skhun"}
              value={FormData.scan_skhun}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          class="text-white w-1/3  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center justify-center items-center flex gap-2 me-2 mb-2"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

const InputFile = ({ name, value, label, handleChange }) => {
  return (
    <>
      <label
        className="text-sm text-gray-700 font-semibold"
        htmlFor="file_input"
      >
        {label}
      </label>
      <input
        // value={value}
        name={name}
        onChange={handleChange}
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
    </>
  );
};

const Title = ({ title }) => {
  return (
    <div className="text-xl text-gray-700 underline font-bold">
      <h1>{title}</h1>
    </div>
  );
};
