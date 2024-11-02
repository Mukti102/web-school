import React, { useEffect, useState } from "react";
import SubmitButton from "../../../ui/SubmitButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DownLoadPdf from "./DownLoadPdf";
import useFetch from "../../../../hooks/useFetch";
import AppStore from "../../../../store/AppStore";
import YourDocument from "./YourDocument";
import { CiSaveDown1 } from "react-icons/ci";
import MyDocument from "./PDF";
export default function ViewProfile({
  studentData,
  parentData,
  adressData,
  photo,
  previousSchoolData,
}) {
  const { data } = useFetch("profile-school");
  const { setDataSekolah, dataSekolah } = AppStore((state) => state);
  const navigate = useNavigate();
  const [isPrint, setIsPrint] = useState(false);
  useEffect(() => {
    setDataSekolah(data);
  }, [data]);
  return (
    <div>
      <div className="mb-10 text-xl uppercase font-semibold text-gray-600">
        <h1>Bukti Pendaftaran</h1>
      </div>
      <div className="sm:w-40 w-20 h-20 mb-2 sm:h-44">
        <img
          className="w-full h-full object-cover"
          src={
            !photo
              ? photo
              : "https://tse1.mm.bing.net/th?id=OIP.74QCKUaoThEkKLbKbV2EMgHaH7&pid=Api&P=0&h=180"
          }
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <h1 className="text-lg font-semibold mt-2">Data Siswa</h1>
          <table className="text-[11px] sm:text-xs text-gray-700 mt-3">
            <tbody>
              {studentData?.map((itm, i) => (
                <tr className="capitalize">
                  <td className="py-1">{itm?.name}</td>
                  <td className="font-normal py-1">: {itm?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="text-lg font-semibold mt-2">Data Alamat</h1>
          <table className="text-[11px] sm:text-xs text-gray-700 ">
            <tbody>
              {adressData?.map((itm, i) => (
                <tr key={innerWidth} className="capitalize">
                  <td className="py-1">{itm?.name}</td>
                  <td className="font-normal py-1">: {itm?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="text-lg font-semibold mt-2">Data Oarng Tua</h1>
          <table className="text-[11px] sm:text-xs text-gray-700 ">
            <tbody>
              {parentData?.map((itm, i) => (
                <tr key={i} className="capitalize">
                  <td className="py-1">{itm?.name}</td>
                  <td className="font-normal py-1">: {itm?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="text-lg font-semibold mt-2">Data Asala Sekolah</h1>
          <table className="text-[11px] sm:text-xs text-gray-700 ">
            <tbody>
              {previousSchoolData?.map((itm, i) => (
                <tr key={i} className="capitalize">
                  <td className="py-1">{itm?.name}</td>
                  <td className="font-normal py-1">: {itm?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex ">
        <Link onClick={() => navigate(-1)}>
          <SubmitButton name="Kembali" />
        </Link>
        <PDFDownloadLink
          document={
            <MyDocument
              dataSchool={dataSekolah ? dataSekolah[0] : ""}
              parentData={parentData}
              previousSchoolData={previousSchoolData}
              studentData={studentData}
            />
          }
          fileName="Bukti Pendaftaran.pdf"
        >
          {({ loading }) => (
            <SubmitButton
              name={
                loading ? (
                  <span className="text-xs animate-pulse items-center flex gap-1">
                    Menyimpan...
                  </span>
                ) : (
                  "Cetak"
                )
              }
              bg={"bg-green-500"}
            />
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
