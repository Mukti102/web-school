import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import FormPendaftaran from "./FormPendaftaran";

export default function EditPendaftaran() {
  const { id, gelombang } = useParams();
  const { data, isLoading } = useFetch(`students/${id}`);

  const studentInfo = data
    ? {
        nomor_registrasi: Number(data.nomor_registrasi),
        gelombang_id: Number(data.angkatan?.gelombang_ke),
        jurusan_id: parseInt(data.jurusan?.id),
        fullname: data.fullname,
        NISN: data.NISN,
        NIS: data.NIS,
        gender: data.gender,
        tempat_lahir: data.tempat_lahir,
        tanggal_lahir: data.tanggal_lahir,
        agama: data.agama,
        anak_ke: parseInt(data.anak_ke),
        jumlah_saudara: data.jumlah_saudara,
        no_hp: data.no_hp,
        email: data.email,
        photo: data.photo,
      }
    : {};

  const allData = {
    parentInfo: data?.data_ortu,
    userInfo: studentInfo,
    previousSchoolInfo: data?.asal_sekolah,
    addressInfo: data?.data_alamat,
  };

  return <FormPendaftaran studentId={id} initialAllData={allData} />;
}
