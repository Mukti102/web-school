import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { FaFileAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import ToolBarList from "../ui/ToolBarList";
import ModalPhoto from "../../../ModalPhoto";
import useModalPhoto from "../../../../hooks/useModalPhoto";
import ViewProfile from "./ViewProfile";

export default function ViewStudent() {
  const params = useParams();
  const [detailData, setDetailData] = useState({});
  const { data } = useFetch(`students/${params?.id}`);

  useEffect(() => {
    if (data) {
      setDetailData(data);
    }
  }, [data]);

  const toolBar = [
    {
      name: "Detail Profile",
      icon: IoMdPerson,
    },
  ];

  const [target, setTarget] = useState(toolBar[0].name);

  const studentData = [
    { name: "Nama Lengkap", value: detailData?.fullname },
    { name: "Nomor Registrasi", value: detailData?.nomor_registrasi },
    { name: "Jenis Kelamin", value: detailData?.gender },
    { name: "NISN", value: detailData?.NISN },
    {
      name: "Tempat Tanggal Lahir",
      value: `${detailData?.tempat_lahir}, ${detailData?.tanggal_lahir}`,
    },
    { name: "Agama", value: detailData?.agama },
    { name: "Jurusan Yang Di Ambil", value: detailData?.jurusan?.title },
    { name: "Anak ke", value: detailData?.anak_ke },
    { name: "Jumlah Saudara", value: detailData?.jumlah_saudara },
    { name: "Nomor Hp", value: detailData?.no_hp },
    { name: "Email", value: detailData?.email },
  ];

  const addressData = [
    { name: "Alamat", value: detailData?.data_alamat?.address },
    { name: "Desa", value: detailData?.data_alamat?.desa },
    { name: "Kecamatan", value: detailData?.data_alamat?.kecamatan },
    { name: "Kabupaten", value: detailData?.data_alamat?.kabupaten },
    { name: "Provinsi", value: detailData?.data_alamat?.provinsi },
    { name: "Kode Pos", value: detailData?.data_alamat?.kode_pos },
  ];

  const previousSchoolData = [
    { name: "Asal Sekolah", value: detailData?.asal_sekolah?.previous_school },
    { name: "Jenjang", value: detailData?.asal_sekolah?.level },
    { name: "NPSN Sekolah", value: detailData?.asal_sekolah?.NPSN_school },
  ];

  const parentData = [
    { name: "Nomor KK", value: detailData?.data_ortu?.no_kk },
    { name: "Nama Ayah", value: detailData?.data_ortu?.father_name },
    { name: "Kepala Keluarga", value: detailData?.data_ortu?.lead_family },
    { name: "NIK", value: detailData?.data_ortu?.father_nik },
    { name: "Tanggal Lahir", value: detailData?.data_ortu?.father_birth },
    { name: "Pekerjaan", value: detailData?.data_ortu?.father_job },
    {
      name: "Pendidikan Terakhir",
      value: detailData?.data_ortu?.father_education,
    },
    { name: "Nama Ibu", value: detailData?.data_ortu?.mom_name },
    { name: "NIK", value: detailData?.data_ortu?.mom_nik },
    { name: "Tanggal Lahir", value: detailData?.data_ortu?.mom_birth },
    { name: "Pekerjaan", value: detailData?.data_ortu?.mom_job },
    {
      name: "Pendidikan Terakhir",
      value: detailData?.data_ortu?.father_education,
    },
  ];

  return (
    <>
      <div className="overflow-hidden pt-5 px-6 bg-white w-full flex gap-10">
        <ToolBarList list={toolBar} target={target} setTarget={setTarget} />
      </div>

      {/* content */}
      <div className="overflow-hidden px-5 sm:px-10 pt-10 pb-20 bg-white w-full">
        {target === "Detail Profile" ? (
          <ViewProfile
            previousSchoolData={previousSchoolData}
            adressData={addressData}
            photo={detailData?.photo}
            studentData={studentData}
            parentData={parentData}
          />
        ) : (
          <DetailLampiran
            parentData={parentData}
            studentData={studentData}
            photo={detailData?.photo}
          />
        )}
      </div>
    </>
  );
}

const DetailLampiran = ({ studentData, parentData, photo }) => {
  const { isModalOpen, selectedImage, openModal, closeModal } = useModalPhoto();
  return (
    <>
      <KopSurat />
      <div className="w-full">
        {/* Student Information */}
        <div>
          <h1 className="text-lg mb-2 font-semibold">Keterangan Siswa</h1>
          <table className="text-sm mt-3 w-full">
            <tbody>
              {studentData.map((item, i) => (
                <tr key={i} className="capitalize">
                  <td className="py-1">{i + 1}.</td>
                  <td className="py-1">{item.name}</td>
                  <td className="font-normal py-1">: {item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Parent Information */}
        <div>
          <h1 className="text-lg mt-5 mb-2 font-semibold">
            Keterangan Orang Tua
          </h1>
          <table className="text-sm mt-3 w-full">
            <tbody>
              {parentData?.map((item, i) => (
                <tr key={i} className="capitalize">
                  <td className="py-1">{i + 1}.</td>
                  <td className="py-1">{item.name}</td>
                  <td className="font-normal py-1">: {item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Profile Photo */}
        <div className="flex justify-end px-20">
          <div className="w-36 border-[1.5px] border-gray-500 shadow-primary">
            <img
              src={photo}
              alt="Foto Profil"
              className="mx-auto w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const KopSurat = () => (
  <div className="text-center w-[90%] mx-auto items-center justify-center flex gap-5 mb-10 border-b-[2px] border-black">
    {/* Institution Logo */}
    <div className="mb-4">
      <img
        src="https://3.bp.blogspot.com/-frEnGtnUAZs/WJnLXW4IP1I/AAAAAAAABAs/9Px5HMVYe_AzUcnB1UD4YOqJLLHrUQbhQCLcB/s1600/Logo%2BMA%2BRoudlotul%2BMutaalimin.jpg"
        alt="Logo Lembaga"
        className="mx-auto w-24 h-24"
      />
    </div>
    <div>
      {/* Institution Name */}
      <h1 className="text-xl font-bold uppercase">SEKOLAH MENEGAH ATAS</h1>
      {/* Institution Address and Contact */}
      <p className="text-sm">
        Jl. Contoh Alamat No. 123, Kota ABC, 12345 <br />
        Telepon: (0123) 456-7890 | Email: contoh@email.com <br />
        Website: www.namalembaga.com
      </p>
    </div>
    <div className="mb-4">
      <img
        src="https://3.bp.blogspot.com/-frEnGtnUAZs/WJnLXW4IP1I/AAAAAAAABAs/9Px5HMVYe_AzUcnB1UD4YOqJLLHrUQbhQCLcB/s1600/Logo%2BMA%2BRoudlotul%2BMutaalimin.jpg"
        alt="Logo Lembaga"
        className="mx-auto w-24 h-24"
      />
    </div>
  </div>
);
