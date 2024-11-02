import React from "react";
import { BiLogIn, BiPrinter } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiCashRegister } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";

export default function Step() {
  const steps = [
    {
      title: "Buat Akun Jika Belum Punya Akun",
      isActive: true,
      description:
        "Jika anda belum mempunyai akun harap untuk registrasi terlebih dahulu dengan mengisi form",
      icon: MdPhoneIphone,
    },
    {
      title: "Login",
      isActive: true,
      description:
        "Setelah anda mendaftar, silahkan silahkan Login meggunakan akun yang sudah terdaftar",
      icon: BiLogIn,
    },
    {
      title: "Masuk Pendaftaran",
      isActive: true,
      description:
        "Setelah anda Login, anda akan di arahkan ke dashboard lalu klik pendaftaran di menu",
      icon: PiCashRegister,
    },
    {
      title: "Isi Formulir",
      isActive: true,
      description:
        "Setelaha Masuk Di Pendaftaran Silahkan isi formulir dengan data valid dan benar",
      icon: IoNewspaperSharp,
    },
    {
      title: "Tunggu Konfirmasi",
      isActive: true,
      description:
        "Setelaha Mengisi Konfirmasi formulir akan di perikasa petugas. cek secara berkala di dashboard untuk memastikan apakah kamu diterima atau tidak ",
      icon: GiConfirmed,
    },
    {
      title: "Cetak Formulir",
      isActive: true,
      description:
        "Jika Status pendaftaran di terima cetak formulir yang sudah kamu isi dan serahkan kepada petugas sekolah di hari yang sudah ditentukan ",
      icon: BiPrinter,
    },
  ];
  return (
    <ol class="relative  text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {steps.map((step, index) => (
        <li class="mb-10 ms-8" key={index}>
          <span
            class={`absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
          ${
            step.isActive
              ? "bg-green-200 dark:bg-green-900"
              : "bg-gray-200 dark:bg-gray-400"
          }
          rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 `}
          >
            <step.icon
              className={`sm:w-6 sm:h-6 w-5 h-5 ${
                step.isActive
                  ? "text-green-500 dark:text-green-500"
                  : "text-gray-300 "
              }`}
            />
          </span>
          <h3 class="font-medium text-sm leading-tight">{step.title}</h3>
          <p class="sm:text-sm text-xs font-light w-[80%]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
