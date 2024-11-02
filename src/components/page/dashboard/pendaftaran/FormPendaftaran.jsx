import React, { useEffect, useState } from "react";
import Step from "../../pendaftaran/Step";
import { Stepper } from "../ui/Stepper";
import UseFormik from "../../../../hooks/UseFormik";
import StudentForm from "./StudentForm";
import { useNavigate, useParams } from "react-router-dom";
import HeadAlert from "../ui/HeadAlert";
import FormParent from "./FormParent";
import FormAdress from "./FormAdress";
import FormPreviousSchool from "./FormPreviousSchool";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import { all } from "axios";

export default function FormPendaftaran({ studentId = null, initialAllData }) {
  const { store, update } = RequestStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const { gelombang } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [allFormData, setAllFormData] = useState({});

  useEffect(() => {
    if (initialAllData) {
      setAllFormData(initialAllData);
    }
  }, [initialAllData]);

  const steps = [
    {
      name: "Personal Info",
      description: "Form Pendaftaran Siswa",
      status: true,
    },
    {
      name: "Data Alamat",
      description: "Form Pendaftaran Siswa",
      status: currentStep >= 1,
    },
    {
      name: "Data Orang Tua",
      description: "Masukan Data Orang Tua",
      status: currentStep >= 2, // Dynamically set status
    },
    {
      name: "Data Asal Sekolah",
      description: "Masukkan Data Asal Sekolah",
      status: currentStep === 3, // For the final step
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const studentSubmit = async (values) => {
    console.log(values);
    setAllFormData((prev) => ({
      ...prev,
      userInfo: values,
    }));
    nextStep();
  };

  const parentSubmit = async (values) => {
    setAllFormData((prev) => ({
      ...prev,
      parentInfo: values,
    }));
    nextStep();
  };

  const adressSubmit = async (values) => {
    setAllFormData((prev) => ({
      ...prev,
      addressInfo: values,
    }));
    nextStep();
  };
  const navigate = useNavigate();

  const previousSchoolSubmit = async (values) => {
    setAllFormData((prev) => ({
      ...prev,
      previousSchoolInfo: values,
    }));

    if (allFormData?.previousSchoolInfo === undefined) {
      return;
    }

    try {
      setIsLoading(true);
      const res = !studentId
        ? await store("students", allFormData)
        : await update(`students/${studentId}`, allFormData);
      navigate("/dashboard/pendaftaran");
      if (res?.status === "success") {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Data Berhasil Di ${studentId ? "Update" : "Tambahkan"}`,
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

  return (
    <>
      <div className="overflow-hidden pt-5 px-5 sm:px-9 shadow-primary py-5 bg-white w-full">
        <div className="w-max">
          <h1 className="font-medium text-lg">Input Form Pendaftaran</h1>
          <p className="text-sm">Pastikan Data Yang di isi Valid dan sesuai</p>
        </div>
        <Stepper data={steps} currentStep={currentStep} />
        <div>
          {/* Conditionally render form based on the current step */}
          {currentStep === 0 && (
            <StudentForm
              handleSubmit={studentSubmit}
              gelombang_id={gelombang}
              initialValue={allFormData?.userInfo}
              backFunction={prevStep}
            />
          )}
          {currentStep === 1 && (
            <FormAdress
              handleSubmit={adressSubmit}
              backFunction={prevStep}
              initialValue={allFormData?.addressInfo}
            />
          )}
          {currentStep === 2 && (
            <FormParent
              handleSubmit={parentSubmit}
              initialValue={allFormData?.parentInfo}
              backFunction={prevStep}
            />
          )}
          {currentStep === 3 && (
            <FormPreviousSchool
              handleSubmit={previousSchoolSubmit}
              initialValue={allFormData?.previousSchoolInfo}
              backFunction={prevStep}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
}
