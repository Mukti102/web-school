import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";

export const lists = [
    {
      name: "Beranda",
      link: "/",
      subLink : null
    },
    {
      name: "Tentang",
      link: "/tentang-sekolah",
      subLink : [
      {
        name: "Tentang Sekolah",
        link: "/tentang-sekolah",
      },
      {
        name: "Extrakurikuler",
        link: "/extracuriculer",
      },
      {
        name: "Fasilitas",
        link: "/fasilitas",
      },
    ]
    },
    {
      name: "Jurusan",
      link: "/pendidikan",
      subLink:null
    },
    {
      name: "Informasi",
      link: "/berita",
      subLink : [{
        name: "Berita",
        link: "/berita",
    },
    {
      name: "Pengumuman",
      link: "/announcment",
    },
    {
      name: "Video",
      link: "/video",
    },
    {
      name: "Prestasi",
      link: "/prestasi",
    },
    {
      name: "Agenda",
      link: "/agenda",
    },
  ]
    },
    {
      name: "Pendaftaran",
      link: "/pendaftaran",
    },
  ];



  export const getMenuList = async () => {
    try {
      const response = await axios.get(BASE_URL + "menu");
      if (response.data) {
        return response.data.data
        .filter((item) => item.status == 1)
        .map((item) => {
          const subMenu = item.sub_menu ? JSON.parse(item.sub_menu) : null;
          return {
            name: item.name,
            link: item.link,
            subLink:
              subMenu && subMenu.length > 0
                ? subMenu.map((subItem) => ({
                    name: subItem.name,
                    link: subItem.link,
                  }))
                : null,
          };
        });
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      return []; // Mengembalikan array kosong jika terjadi error
    }
  };
  